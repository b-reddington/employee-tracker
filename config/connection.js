// Connect to the database
const promptUser = require('../models/promptUser');
require('dotenv').config();
const Sequelize = require('sequelize');
let sequelize;

    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
async function init() {
    (async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            await promptUser();
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })();
}
module.exports = init;
