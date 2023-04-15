const inquirer = require('inquirer');

async function addNewDepartment() {
    const answer = await inquirer.prompt([
            {
                type: 'input',
                name: 'addRole',
                message: 'What department would you like to add?',
            }
        ])
            // temporary log until DB logic is added
            return `${answer.addNewDepartment} added`;
}

module.exports = addNewDepartment;