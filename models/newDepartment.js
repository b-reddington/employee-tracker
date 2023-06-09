const db = require('../config/connection');
const inquirer = require('inquirer');

async function newDepartment() {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: 'What department would you like to add?',
        }
    ])
    db.query(`INSERT INTO department (name) VALUES ("${answer.addDepartment}");`, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            return `${answer.addDepartment} added`;

        }
    })
}

module.exports = newDepartment;