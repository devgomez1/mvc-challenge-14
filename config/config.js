const Sequelize = require('sequilize'); 
require('dotenv').config(); 

const sequelize = process.env.JAWSB_URL 
    ? new Sequelize(process.env.JAWSB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        disalect: 'mysql',
        port: 3210
    });

module.exports = sequelize; 