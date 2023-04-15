const inquirer = require('inquirer');

async function addNewRole() {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: 'What role would you like to add?',
        }
    ]);

    return `${answer.addRole} role added`;
}

module.exports = addNewRole;