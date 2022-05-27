
# Using Minio as a backend
This docker needs to be changed to a treafik router, rather than ngnx

keycloak:  https://github.com/minio/minio/blob/master/docs/sts/keycloak.md

https://davidtruxall.com/secure-a-vue-js-app-with-keycloak/
https://github.com/keycloak/keycloak/blob/main/adapters/oidc/js/dist/keycloak.d.ts

Tested (notes at end of document). It works. It's simple, and we can initially manually manage via ui

Users and groups put files in thier own work areas. I proposed the following subuckets
* resource
* org
* people
* datasets (aka future)
* prov

We then need to figure out a migration to published buckets with the same information.
with some pattern to avoid naming conflicts

# workflow
* user signs up
  * user fills in form, user account and record created. 
* straight create
  * user signs in, taken to users page
  * user selects create new record, drafts saved to users 'home' aka user/username 
  * user saves record as published.
  * migration to published bucket
* Edit
  * user signs in, take to users page
  * user sees list of previous records, selects edit
  * forms UI opens with users records as initial data.
  * user creates new record, drafts saved to users 'home' aka user/username
  * user saves record as published.
  * migration to published bucket

## tasks

* Admin interface (manual on port 9001, for now):
  * create a user
    * add policy that restricts them to thier homespace
    * add user to a group
  * create group 
    * add group, add policy them to a homespace
    
* UI Minio 'api'- loose use of api, becuase just need functions to push info to minio from browser.
  * List of records
  * push to appropriate location based on resource and user or group
    * naming conventions, needed
    * metadata
      * status: draft|| pubished
      * formtype: [form main type (resource|| dataset|| org||...)]:[subtype]:[version]
  * Pull from s3 store, and load into form as initial state

* UI Pages (not jsonforms based (or maybe json forms based ;) )
  * login/Auth a user
     *  just get username/user.json file from the store
  * Save record
    * Name, status
      * draft
      * publish
  * signup  a user
    * What info do we need
    * write or update username/user.json
  * ask to create a group
    * What info do we need

  
* UI Forms -- These will need a button to save a draft or a published record.
  * resource
  * person
     * populate from  person (orcid, other)
  * org
    * populate from  ?  (NSF, ?)
  * dataset

### Setup
This needs to be done a initial docker creation stage.

#### Create  buckets:
* bucket
  * subbuckets
  
##### Buckets:
* forms
  * resource
    * schema
    * initialdata 
    * subtypes name (full, simple, custom for a community or tool type)
      * schemaui
      * schema (optional)
      * initialdata  (optional)
  * org
  * people
  * dataset
  * (user)
  * (group)
* **jsonld**
  * [username] (place to store user information and records)
    * user.json
    * resource 
    * org 
    * people 
    * dataset 
    * prov
  * [groupname]
    * group.json
    * resource
    * org
    * people
    * datasets (aka future)
    * prov
* **published**
  * ecrr
  * org
  * people
  * datasets (aka future)

Naming pattern so that if there is a conflict; aka simple name like notebook, does not get overwriten by different users
or do we just keep the subbuckets in the
publshed/[username/groupname]/resource

#### add Policies
* write to user space
* write to a group in the user space


#### Migration policy (future):
when a record is published, move to published bucket

#### production
* rsync a backup

## Setting up Minio for multi users

###Policy 

#### By User
For a user with no group, this will set a policy that publishes to thier directory
needed to add  "s3:GetBucketLocation"

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketLocation"

      ],
      "Resource": [
        "arn:aws:s3:::*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::forms"
      ],
      "Condition": {
        "StringLike": {
          "s3:prefix": [
            "${aws:username}/*"
          ]
        }
      }
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": [
        "arn:aws:s3:::forms/${aws:username}/*"
      ]
    }
  ]
}
```

#### Group
this will restrict a group to a folder called genericGroup, in users
when creating a new policy, we need to change the name genericGroup.


```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": ["s3:ListBucket"],
      "Effect": "Allow",
      "Resource": ["arn:aws:s3:::forms"],
      "Condition": {"StringLike": {"s3:prefix": ["genericGroup/*"]}}
    },
    {
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Effect": "Allow",
      "Resource": ["arn:aws:s3:::forms/genericGroup/*"]
    }
  ]
}
```
#### testing setup:

Created users should not be set to readwrite. That means they can readwrite, anywhere.
[Postman export](./MinioTests.postman_collection.json)

created users:
* user1 (nogroup)
* user2 ( genericgroup)
* user3 (genericgroup, secondgroup)

groups:
* nogroup
* genericgroup
* secondgroup

tests:
* should work:
  * submit to users home (should work)
  * submit to group home (should work)
  * submit to second group home (should work)
* Should Fail
  * submit to root (should fail)
  * sumbit to other users directory
  * submit to group where user is not a member

Postman config
* PUTS.
* Use aws authentication, with a serivce of s3
* set raw body type with a content type of json

===
``s3system:
#    image: minio/minio:latest
    image: quay.io/minio/minio
    restart: unless-stopped
    ports:
      - 9000:9000
      - 9001:9001
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.s3system.entrypoints=http"
      - "traefik.http.routers.s3system.rule=Host(`oss.${HOST:?HOST environment varaible is required}`)"
      - "traefik.http.middlewares.s3system-https-redirect.redirectscheme.scheme=https"
      - "traefik.http.routers.s3system.middlewares=s3system-https-redirect"
      - "traefik.http.routers.s3system-secure.entrypoints=https"
      - "traefik.http.routers.s3system-secure.rule=Host(`oss.${HOST:?HOST environment varaible is required}`)"
      - "traefik.http.routers.s3system-secure.tls=true"
      - "traefik.http.routers.s3system-secure.tls.certresolver=http"
      - "traefik.http.routers.s3system-secure.service=s3system"
      - "traefik.http.services.s3system.loadbalancer.server.port=9000"
      - "traefik.http.routers.s3admin.entrypoints=http"
      - "traefik.http.routers.s3admin.rule=Host(`minioadmin.${HOST:?HOST environment varaible is required}`)"
      - "traefik.http.middlewares.s3admin-https-redirect.redirectscheme.scheme=https"
      - "traefik.http.routers.s3admin.middlewares=s3admin-https-redirect"
      - "traefik.http.routers.s3admin-secure.entrypoints=https"
      - "traefik.http.routers.s3admin-secure.rule=Host(`minioadmin.${HOST:?HOST environment varaible is required}`)"
      - "traefik.http.routers.s3admin-secure.tls=true"
      - "traefik.http.routers.s3admin-secure.tls.certresolver=http"
      - "traefik.http.routers.s3admin-secure.service=s3admin"
      - "traefik.http.services.s3admin.loadbalancer.server.port=9001"
      - "traefik.http.middlewares.s3system-secure.headers.accesscontrolallowmethods=GET,OPTIONS,PUT,POST"
      - "traefik.http.middlewares.s3system-secure.headers.accesscontrolalloworigin=*"
      - "traefik.http.middlewares.s3system-secure.headers.accesscontrolmaxage=200"
      - "traefik.http.middlewares.s3system-secure.headers.addvaryheader=true"
      - "traefik.http.middlewares.s3system-secure.headers.accesscontrolallowcredentials=true"
#      - "traefik.http.middlewares.s3system-secure.headers.accesscontrolallowheaders=Authorization,Origin,Content-Type,Accept"
      - "traefik.http.middlewares.s3system-secure.headers.accesscontrolallowheaders=*"
      - "traefik.http.middlewares.s3system-secure.headers.customresponseheaders.Access-Control-Allow-Headers=*"
#      - "traefik.http.middlewares.s3system-secure.headers.customresponseheaders.Access-Control-Allow-Headers=Authorization,Origin,Content-Type,Accept"
      - "traefik.http.routers.s3system-secure.middlewares=s3system-secure@docker"
      - "traefik.docker.network=traefik_default"
    volumes:
      - /data/s3/Data:/data
    environment:
#      - MINIO_ACCESS_KEY=${S3KEY}
#      - MINIO_SECRET_KEY=${S3SECRET}
      MINIO_ROOT_USER: ${S3KEY}
      MINIO_ROOT_PASSWORD: ${S3SECRET}
    networks:
      - traefik_default
#    command: ["server","/data/", "--console-address \":9001\""]
    command: server /data --console-address ":9001"
``


