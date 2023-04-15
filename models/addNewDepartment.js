const inquirer = require('inquirer');

async function addNewDepartment() {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: 'What department would you like to add?',
        }
    ]);

    return `${answer.addRole} department added`;
}

module.exports = addNewDepartment;