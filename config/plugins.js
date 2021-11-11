module.exports = {
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: "dnwdxavgx",
      api_key: "476438797683372",
      api_secret: "a1cbYAdvnu5Vn37M7hu9uManluU",
    },
  },
};
