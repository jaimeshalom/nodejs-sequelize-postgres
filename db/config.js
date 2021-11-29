const { config } = require('../config/config');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `${config.dbDbms}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: config.dbDbms,
  },
  production: {
    url: config.dbUrl,
    dialect: config.dbDbms,
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
