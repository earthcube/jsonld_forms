# Using Mino as a backend

## tasks
* Admin interface:
  * create a user
    * add policy that restricts them to thier homespace
    * add user to a group
  * create group 
    * add group, add policy them to a homespace
  
* ui
  * Auth a in a user
  * signup as a user
  * ask to create a group
  * Save record
    * Name, status
      * draft
      * publish
  
* UI Forms
  * resource
  * person
     * populate from  person (orcid, other)
  * org
    * populate from  ?  (NSF, ?)
  * dataset

### Setup
#### Create  buckets:
This needs to be done a initial docker creation stage.
* bucket
  * subbuckets
  
##### Buckets:
* user (place to store user information and records)
  * user.json
  * resource records
  * org records
  * people records
  * dataset records
  * prov
* [groupname]
  * ecrr
  * org
  * people
  * datasets (aka future)
  * prov
* published
  * ecrr
  * org
  * people
  * datasets (aka future)
  

#### add Policies
* write to user space
* write to a group in the user space


#### Migration policy (future):
when a record is published, move to ecrrpublished bucket

#### production
* rsync a backup

## Setting up Minio for multi users

###Policy 

#### By User
For a user with no group, this will set a policy that publishes to thier directory

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": ["s3:ListBucket"],
      "Effect": "Allow",
      "Resource": ["arn:aws:s3:::users"],
      "Condition": {"StringLike": {"s3:prefix": ["${aws:username}/*"]}}
    },
    {
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Effect": "Allow",
      "Resource": ["arn:aws:s3:::users/${aws:username}/*"]
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
      "Resource": ["arn:aws:s3:::users"],
      "Condition": {"StringLike": {"s3:prefix": ["genericGroup/*"]}}
    },
    {
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Effect": "Allow",
      "Resource": ["arn:aws:s3:::users/genericGroup/*"]
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



