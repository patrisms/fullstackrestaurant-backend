// module.exports = {
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: 'cluster0.zspyk.mongodb.net',
//         port: 27017,
//         database: 'restaurant',
//         username: 'someuser',
//         password: 'someuser',
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// };
 

module.exports = {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb+srv://someuser:someuser@cluster0.zspyk.mongodb.net/restaurant?retryWrites=true&w=majority'
      },
      options: {
        ssl: true,
      },
    },
  },
};