const Sequelize = require('sequelize');
require('dotenv').config();
console.log('DB_NAME:', process.env.DB_NAME); // Log to check if values are loaded


// Create a connection object
const sequelize = new Sequelize(
  "phoenix_bmxq",
  "phoenix",
  process.env.DB_PASSWORD,
  {
    // Database location
    host: 'dpg-ct1r0v1opnds73fmorfg-a',
    dialect: 'postgres',
    logging: console.log,
    port: 5432
  },
);

//test connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

//create tables and schema if don't already exist
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = sequelize;