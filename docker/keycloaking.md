====
keycloaking:
https://iam.scigap.org/auth/realms/ddstudio/protocol/openid-connect/auth?client_id=security-admin-console&redirect_uri=https%3A%2F%2Fiam.scigap.org%2Fauth%2Fadmin%2Fddstudio%2Fconsole%2F&state=6b26e999-9909-4992-b97c-c099cc638de0&nonce=622711f1-3d07-41b5-8efb-9a31199a66dd&response_mode=fragment&response_type=code&scope=openid

https://iam.scigap.org/auth/realms/ddstudio/protocol/openid-connect
clientid:account

redirect_uri: https://minioadmin.geocodes.earthcube.org/oauth_callback
if things muck up:
using mc from my mac
mc alias set dev  https://oss.geocodes.earthcube.org {accesskey} {secretkey}
mc ls dev
mc admin info dev
# if log in is mucked up...
mc admin config reset dev identity_openid
====
