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


function saveToUser(jsonstring, filename,itemMetadata, toolname,  bucket, s3Credentials ){

    // Using fPutObject API upload your file to the bucket europetrip.
    let path = `${s3Credentials.username}/${toolname}/${filename}`
    var metaData = {
        'Content-Type': 'application/ld+json',
        'X-Amz-Meta-Testing': 1234,
        'X-Amz-Meta-Status' : itemMetadata.status?itemMetadata.status: 'draft',
        'X-Amz-Meta-Playground': itemMetadata.playground? itemMetadata.playground: true,
    }
     saveTos3(jsonstring, path,metaData, bucket,  s3Credentials )
}

function saveToGroup(jsonstring, filename,itemMetadata, toolname, bucket, s3Credentials, group ){

    // Using fPutObject API upload your file to the bucket europetrip.
    let path = `${group}/${toolname}/${filename}`
    var metaData = {
        'Content-Type': 'application/ld+json',
        'X-Amz-Meta-Testing': 1234,
        'X-Amz-Meta-Status' : itemMetadata.status?itemMetadata.status: 'draft',
        'X-Amz-Meta-Playground': itemMetadata.playground? itemMetadata.playground: true,
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

const  listUserFiles = async function(  bucketName, toolname,  s3Credentials ){
    return new Promise (function(resolve, reject) {
        const minioClient = s3Client(s3Credentials)

        let prefix = `${s3Credentials.username}/${toolname}/`
        let recursive = true

        var data = []
        var stream =  minioClient.extensions.listObjectsV2WithMetadata(bucketName, prefix, recursive)
        stream.on('data', function(obj) {
         console.log(obj)
         data.push(obj)
         } )
        stream.on('error', function(err) {
        console.log(err)
        reject(err)
         } )
         stream.on('end', function() {
          console.log('End')
          resolve (data )
        })

    })

}

const getFroms3 = function( filepath, bucket, s3Credentials ){
    return new Promise (function(resolve, reject) {
        const minioClient = s3Client(s3Credentials)

        minioClient.getObject(bucket, filepath,
          function(err, dataStream) {
           const chunks= []
            if (err) {
              reject(err)
            }
            dataStream.on('data', function(chunk) {

             chunks.push(chunk)
            })
            dataStream.on('end', function() {

              resolve( JSON.parse(chunks.join('') ) )
            })
            dataStream.on('error', function(err) {
              console.log(err)
            })

        });

    })
}

// not needed. we get a metadata with the listing of files.
// function getMetadataFroms3( filepath, bucket, s3Credentials ){
//     const minioClient = s3Client(s3Credentials)
//
//
//
//     minioClient.statObject(bucket, filepath, jsonstring, metaData, function(err, stat) {
//
//         if (err) {
//           return console.log(err)
//         }
//         return stat
//       })
//     });
//     // minioClient.makeBucket(bucket, 'us-east-1', function(err) {
//     //     if (err) return console.log(err)
//     //
//     //     console.log('Bucket created successfully in "us-east-1".')
//     //
//     //     var metaData = {
//     //         'Content-Type': 'application/ld+json',
//     //         'X-Amz-Meta-Testing': 1234,
//     //     }
//     //     // Using fPutObject API upload your file to the bucket europetrip.
//     //     let path = `${username}\${filename}`
//     //     const jsonldstring = JSON.stringify(jsonld)
//     //
//     //     minioClient.putObject(bucket, path, jsonldstring, metaData, function(err, etag) {
//     //       if (err) return console.log(err)
//     //       console.log('File uploaded successfully.' + etag)
//     //     });
//     // });
//
// }

export {saveToUser, saveToGroup,listUserFiles, getFroms3}
