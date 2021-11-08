// module.exports = {
//   "defaultConnection": "default",
//   "connections": {
//     "default": {
//       "connector": "strapi-hook-bookshelf",
//       "settings": {
//         "client": "sqlite",
//         "filename": ".tmp/data.db"
//       },
//       "options": {
//         "useNullAsDefault": true
//       }
//     }
//   }
// }

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
 