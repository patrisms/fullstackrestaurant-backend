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