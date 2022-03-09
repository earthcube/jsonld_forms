import * as Minio from "minio"
//import 'dotenv/config'

function s3Client (  username, password, server, port, ssl){
console.log( "dummy vcall to minio " + username + password)
console.log(process.env.endPoint)
console.log(process.env.port)
console.log(process.env.useSSL)
console.log(process.env.accessKey)
console.log(process.env.secretKey)

return new Minio.Client({
           endPoint: server,
           port: port,
           useSSL: ssl,
           accessKey: username,
           secretKey: password
       });
}

function saveToUser(jsonld, filename, bucket, username, password, server, port, ssl ){
const minioClient = s3Client(username, password, server, port, ssl)

minioClient.makeBucket(bucket, 'us-east-1', function(err) {
    if (err) return console.log(err)

    console.log('Bucket created successfully in "us-east-1".')

    var metaData = {
        'Content-Type': 'application/ld+json',
        'X-Amz-Meta-Testing': 1234,
    }
    // Using fPutObject API upload your file to the bucket europetrip.
    let path = `${username}\${filename}`
    const jsonldstring = JSON.stringify(jsonld)

    minioClient.putObject(bucket, path, jsonldstring, metaData, function(err, etag) {
      if (err) return console.log(err)
      console.log('File uploaded successfully.' + etag)
    });
});

}

export {saveToUser}
