// loads environmental variables in .env into process.env
require('dotenv').config();

const Sequelize = require('sequelize');

// if application starts on Heroku using the Jaws DB add on use that env variable
// otherwise use the local variables set in .env file
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
