====
autho
:
https://manage.auth0.com/dashboard/us/earthcube/applications/fAYNXoXqaY6aRGp7KAvJ9qgZaFhXDmCr/settings

https://auth0.com/docs/get-started/applications/configure-applications-with-oidc-discovery
earthcube.us.auth0.com
https://earthcube.us.auth0.com/.well-known/openid-configuration
clientid:account


create policy in auth0

https://find-nuclei.com/minio_part_one/

userpolicy_openid

googled pages:
https://github.com/minio/minio/blob/master/docs/sts/keycloak.md
https://git.shivering-isles.com/github-mirror/minio/minio/-/blob/0bfd20a8e35780a0d36d24050148c998dc63d0b5/docs/sts/keycloak.md
https://www.oak-tree.tech/blog/minio-oauth2-acorn

redirect_uri: https://minioadmin.geocodes.earthcube.org/oauth_callback

if things muck up:
using mc from my mac
mc alias list

managin localhost:
# reset localhost
mc admin config reset local identity_openid
mc admin service restart local

watching
mc admin trace local
mc admin config get local identity_openid

managing oss.geocodes..

mc alias set dev  https://oss.geocodes.earthcube.org {accesskey} {secretkey}
mc ls dev
mc admin info dev
# if log in is mucked up...
mc admin config reset dev identity_openid
====

Config URL
https://iam.scigap.org/auth/realms/ddstudio/.well-known/openid-configuration

Client ID:account
Claim Name: policy
BEWARE claim prefix should be empty...
mc admin config set local identity_openid claim_prefix=''

Redirect URI
http://localhost:9001/oauth_callback

secrete:
client/account/credentials


http://localhost:9001/auth/realms/ddstudio/.well-known/openid-configuration

http://localhost:9000/auth/realms/ddstudio/.well-known/openid-configuration
https://iam.scigap.org/auth/admin/ddstudio/console/#/realms/ddstudio/roles

POLCY:
add policy role for admins
name: policy
role: consoleAdmin

add policy role for users:
name: policy
role: readwrite


google:
bf50152b9a81d18f19427904721a19347a68eb93
