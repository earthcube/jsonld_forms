====
keycloaking:
https://iam.scigap.org/auth/admin/ddstudio/console/#/realms/ddstudio
https://iam.scigap.org/auth/realms/ddstudio/protocol/openid-connect/auth?client_id=security-admin-console&redirect_uri=https%3A%2F%2Fiam.scigap.org%2Fauth%2Fadmin%2Fddstudio%2Fconsole%2F&state=6b26e999-9909-4992-b97c-c099cc638de0&nonce=622711f1-3d07-41b5-8efb-9a31199a66dd&response_mode=fragment&response_type=code&scope=openid

https://iam.scigap.org/auth/realms/ddstudio/protocol/openid-connect
clientid:account

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
