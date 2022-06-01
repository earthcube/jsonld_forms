import Vue from 'vue';
import createAuth0Client from '@auth0/auth0-spa-js';
import convert from 'xml-js'
/** Define a default action to perform after authentication */
const DEFAULT_REDIRECT_CALLBACK = () =>
    window.history.replaceState({}, document.title, window.location.pathname);

let instance;

/** Returns the current instance of the SDK */
export const getInstance = () => instance;

/** Creates an instance of the Auth0 SDK. If one has already been created, it returns that instance */
export const useAuth0 = ({
                             onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
                             redirectUri = window.location.origin,
                             ...options
                         }) => {
    if (instance) return instance;

    // The 'instance' is simply a Vue object
    instance = new Vue({
        data() {
            return {
                loading: true,
                isAuthenticated: false,
                user: {},
                auth0Client: null,
                popupOpen: false,
                error: null
            };
        },
        methods: {
            /** Authenticates the user using a popup window */
            async loginWithPopup(options, config) {
                this.popupOpen = true;

                try {
                    await this.auth0Client.loginWithPopup(options, config);
                    this.user = await this.auth0Client.getUser();
                    this.isAuthenticated = await this.auth0Client.isAuthenticated();
                    this.error = null;
                } catch (e) {
                    this.error = e;
                    // eslint-disable-next-line
                    console.error(e);
                } finally {
                    this.popupOpen = false;
                }

                this.user = await this.auth0Client.getUser();
                this.isAuthenticated = true;
            },
            /** Handles the callback when logging in using a redirect */
            async handleRedirectCallback() {
                this.loading = true;
                try {
                    await this.auth0Client.handleRedirectCallback();
                    this.user = await this.auth0Client.getUser();
                    this.isAuthenticated = true;
                    this.error = null;
                } catch (e) {
                    this.error = e;
                } finally {
                    this.loading = false;
                }
            },
            /** Authenticates the user using the redirect method */
            loginWithRedirect(o) {
                return this.auth0Client.loginWithRedirect(o);
            },
            /** Returns all the claims present in the ID token */
            getIdTokenClaims(o) {
                return this.auth0Client.getIdTokenClaims(o);
            },
            /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
            getTokenSilently(o) {
                return this.auth0Client.getTokenSilently(o);
            },
            /** Gets the access token using a popup window */

            getTokenWithPopup(o) {
                return this.auth0Client.getTokenWithPopup(o);
            },
            /** Logs the user out and removes their session on the authorization server */
            logout(o) {
                return this.auth0Client.logout(o);
            },



            /** Define a default action to perform after authentication */
            /** POST https://minio.example.net?Action=AssumeRoleWithWebIdentity
             &WebIdentityToken=TOKEN
             &Version=2011-06-15
             &DurationSeconds=86000
             &Policy={}

             https://localhost:9000/?Action=AssumeRoleWithWebIdentity
             **/
            async getMinioAuth  (token) {
                let querystring = `?Action=AssumeRoleWithWebIdentity&WebIdentityToken={$token}&Version=2011-06-15&DurationSeconds=86000&Policy={}`
                let server = "https://localhost:9000/"
                let url = `{$server}{$querystring}`
                const request = new Request(
                    url,
                    {
                        method: "POST",
                        mode: "cors",
                        cache: "default",
                        body: JSON.stringify(this.post)
                    }
                );
                const res = await fetch(request);
                const data = await res.text();
                /* <?xml version="1.0" encoding="UTF-8"?>
            <AssumeRoleWithWebIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
            <AssumeRoleWithWebIdentityResult>
               <AssumedRoleUser>
                  <Arn/>
                  <AssumeRoleId/>
               </AssumedRoleUser>
               <Credentials>
                  <AccessKeyId>Y4RJU1RNFGK48LGO9I2S</AccessKeyId>
                  <SecretAccessKey>sYLRKS1Z7hSjluf6gEbb9066hnx315wHTiACPAjg</SecretAccessKey>
                  <Expiration>2019-08-08T20:26:12Z</Expiration>
                  <SessionToken>eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJZNFJKVTFSTkZHSzQ4TEdPOUkyUyIsImF1ZCI6IlBvRWdYUDZ1Vk80NUlzRU5SbmdEWGo1QXU1WWEiLCJhenAiOiJQb0VnWFA2dVZPNDVJc0VOUm5nRFhqNUF1NVlhIiwiZXhwIjoxNTQxODExMDcxLCJpYXQiOjE1NDE4MDc0NzEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0Ojk0NDMvb2F1dGgyL3Rva2VuIiwianRpIjoiYTBiMjc2MjktZWUxYS00M2JmLTg3MzktZjMzNzRhNGNkYmMwIn0.ewHqKVFTaP-j_kgZrcOEKroNUjk10GEp8bqQjxBbYVovV0nHO985VnRESFbcT6XMDDKHZiWqN2vi_ETX_u3Q-w</SessionToken>
               </Credentials>
            </AssumeRoleWithWebIdentityResult>
            <ResponseMetadata/>
            </AssumeRoleWithWebIdentityResponse>
            */

                const  response = convert.xml2json(data, {compact: true, spaces: 4})
                const credentials = response.AssumeRoleWithWebIdentityResponse.ResponseMetadataAssumeRoleWithWebIdentityResult.Credentials
                // const userKey = credentials.AccessKeyId
                //
                // const userSecret = credentials.SecretAccessKey
                //
                // return {"key": userKey,"secret": userSecret}
                return credentials



            }
        },
        /** Use this lifecycle method to instantiate the SDK client */
        async created() {
            // Create a new instance of the SDK client using members of the given options object
            this.auth0Client = await createAuth0Client({
                ...options,
                client_id: options.client_id,
                redirect_uri: redirectUri,
                domain: options.domain
            });

            try {
                // If the user is returning to the app after authentication..
                if (
                    window.location.search.includes('code=') &&
                    window.location.search.includes('state=')
                ) {
                    // handle the redirect and retrieve tokens
                    const { appState } = await this.auth0Client.handleRedirectCallback();

                    this.error = null;

                    // Notify subscribers that the redirect callback has happened, passing the appState
                    // (useful for retrieving any pre-authentication state)
                    onRedirectCallback(appState);
                }
            } catch (e) {
                this.error = e;
            } finally {
                // Initialize our internal authentication state
                this.isAuthenticated = await this.auth0Client.isAuthenticated();
                this.user = await this.auth0Client.getUser();
                this.loading = false;
            }
        }
    });

    return instance;
};

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const Auth0Plugin = {
    install(Vue, options) {
        Vue.prototype.$auth = useAuth0(options);
    }
};
