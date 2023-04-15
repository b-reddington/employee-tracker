const express = require('express');
const sequelize = require('./config/connection');
const promptUser = require('./models/promptUser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// turn on connection to db and server
function init() {

    app.listen(PORT, console.log(`Now listening on port: ${PORT}`));

    // Timeout set to avoid duplicate text from appearing 
    // before the sql server is established
    setTimeout(() => {
        promptUser();
    }, 25);
}
module.exports = init;