
https://earthcube.us.auth0.com/.well-known/openid-configuration
http://localhost:9001/oauth_callback
policy: https://minio/policy

add roles

consoleAdmin	minio console admin
formsuser	user of ecrr forms
listFormsBucket

add action> flows>login flow
custom:

``
/**
* Handler that will be called during the execution of a PostLogin flow.
* 
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
  */
  exports.onExecutePostLogin = async (event, api) => {
  const namespace = 'https://minio';
  if (event.authorization) {
  api.idToken.setCustomClaim(`${namespace}/policy`, event.authorization.roles);
  api.accessToken.setCustomClaim(`${namespace}/policy`, event.authorization.roles);
  }
  }
``
