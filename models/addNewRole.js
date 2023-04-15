const inquirer = require('inquirer');

async function addNewRole() {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: 'What role would you like to add?',
        }
    ]);

    // temporary log until DB logic is added
    return `${answer.addRole} added`;
}

module.exports = addNewRole;