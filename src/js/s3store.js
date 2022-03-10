import * as Minio from "minio"
//import 'dotenv/config'

function s3Client (  username, password, server, port, ssl){
console.log( "dummy vcall to minio " + username + password)


return new Minio.Client({
           endPoint: server,
           port: port,
           useSSL: ssl,
           accessKey: username,
           secretKey: password
       });
}

function saveToUser(jsonstring, filename, bucket, username, password, server, port, ssl ){
const minioClient = s3Client(username, password, server, port, ssl)
var metaData = {
    'Content-Type': 'application/ld+json',
    'X-Amz-Meta-Testing': 1234,
}
// Using fPutObject API upload your file to the bucket europetrip.
let path = `${username}/${filename}`

minioClient.putObject(bucket, path, jsonstring, metaData, function(err, etag) {
  if (err) return console.log(err)
  console.log('File uploaded successfully.' + etag)
});
// minioClient.makeBucket(bucket, 'us-east-1', function(err) {
//     if (err) return console.log(err)
//
//     console.log('Bucket created successfully in "us-east-1".')
//
//     var metaData = {
//         'Content-Type': 'application/ld+json',
//         'X-Amz-Meta-Testing': 1234,
//     }
//     // Using fPutObject API upload your file to the bucket europetrip.
//     let path = `${username}\${filename}`
//     const jsonldstring = JSON.stringify(jsonld)
//
//     minioClient.putObject(bucket, path, jsonldstring, metaData, function(err, etag) {
//       if (err) return console.log(err)
//       console.log('File uploaded successfully.' + etag)
//     });
// });

}

export {saveToUser}
