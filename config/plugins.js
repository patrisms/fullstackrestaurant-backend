// module.exports = {
//     graphql: {
//         playgroundAlways: true
//     }
// }

module.exports = {
    //
    graphql: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  };
  module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIAWQTCOG4ACGFNQSXR'),
        secretAccessKey: env('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'),
        region: env('us-east-2'),
        params: {
          Bucket: env('patricia-robinsonfullstackrestaurantapp'),
           StorageClass: env('S3-Standard') // Configure your Amazon S3 Storage Classes (including this to environment variable is not a must)
        },
        logger: console // Only if you want to `stdout` logs
      }
    }
   });