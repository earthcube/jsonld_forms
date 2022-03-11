import * as Minio from "minio"
//import 'dotenv/config'
/* notes
'SignatureDoesNotMatch'
bad accessKey/secretKey combination (aka username/password)

*/
function s3Client (  s3Credentials){
    console.log( "minio user:" + s3Credentials.username )


    return new Minio.Client({
               endPoint: s3Credentials.endpoint,
               port: s3Credentials.port,
               useSSL: s3Credentials.useSsl,
               accessKey: s3Credentials.username,
               secretKey: s3Credentials.password
           });
}


function saveToUser(jsonstring, filename,itemMetadata,  bucket, s3Credentials ){

    // Using fPutObject API upload your file to the bucket europetrip.
    let path = `${s3Credentials.username}/${filename}`
    var metaData = {
        'Content-Type': 'application/ld+json',
        'X-Amz-Meta-Testing': 1234,
        'X-Amz-Meta-Status' : itemMetadata.status,
        'X-Amz-Meta-Playground': itemMetadata.playground,
    }
     saveTos3(jsonstring, path,metaData, bucket,  s3Credentials )
}

function saveToGroup(jsonstring, filename,itemMetadata, bucket, s3Credentials, group ){

    // Using fPutObject API upload your file to the bucket europetrip.
    let path = `${group}/${filename}`
    var metaData = {
        'Content-Type': 'application/ld+json',
        'X-Amz-Meta-Testing': 1234,
        'X-Amz-Meta-Status' : itemMetadata.status,
        'X-Amz-Meta-Playground': itemMetadata.playground,
    }

    saveTos3(jsonstring, path,metaData, bucket,  s3Credentials )


}

function saveTos3(jsonstring, filepath, metaData, bucket, s3Credentials ){
    const minioClient = s3Client(s3Credentials)



    minioClient.putObject(bucket, filepath, jsonstring, metaData, function(err, etag) {
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

function listUserFiles(  bucketName,  s3Credentials ){
    const minioClient = s3Client(s3Credentials)

    let prefix = `${s3Credentials.username}`
    let recursive = false

    var data = []
    var stream =minioClient.listObjectsV2WithMetadata(bucketName, prefix, recursive)
    stream.on('data', function(obj) { data.push(obj) } )
    stream.on('error', function(err) { console.log(err) } )
    stream.on('end', function() {
      console.log('End')
      return data
    })


}

export {saveToUser, saveToGroup,listUserFiles}
