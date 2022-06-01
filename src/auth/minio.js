import Vue from 'vue';
import convert from 'xml-js'

/** Define a default action to perform after authentication */
/** POST https://minio.example.net?Action=AssumeRoleWithWebIdentity
 &WebIdentityToken=TOKEN
 &Version=2011-06-15
 &DurationSeconds=86000
 &Policy={}

 https://localhost:9000/?Action=AssumeRoleWithWebIdentity
 **/
const getMinioAuth =  async (token) => {
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
    const userKey = credentials.AccessKeyId

    const userSecret = credentials.SecretAccessKey

    return {"key": userKey,"secret": userSecret}



}



// // Create a simple Vue plugin to expose the wrapper object throughout the application
// export const getMinioAuth = {
//     install(Vue, options) {
//         Vue.prototype.$auth = useAuth0(options);
//     }
// };
