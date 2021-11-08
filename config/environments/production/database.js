/*const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
};

/*modules.exports = {
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "strapi-hook-bookshelf",
      "settings": {
        "client": "sqlite",
        "host": "${process.env.DATABASE_HOST || '127.0.0.1'}",
        "port": "${process.env.DATABASE_PORT || 27017}",
        "srv": "${process.env.DATABASE_SRV || false}",
        "database": "${process.env.DATABASE_NAME || 'strapi'}",
        "username": "${process.env.DATABASE_USERNAME || ''}",
        "password": "${process.env.DATABASE_PASSWORD || ''}",
        "ssl": "${process.env.DATABASE_SSL || false}"
      },
      "options": {
        "ssl": "${process.env.DATABASE_SSL || false}",
        "authenticationDatabase": "${process.env.DATABASE_AUTHENTICATION_DATABASE || ''}"
      }
    }
  }
}
*/

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl: true,
      },
    },
  },
});
 