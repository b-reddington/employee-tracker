const inquirer = require('inquirer');
function addNewRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'addRole',
                message: 'What role would you like to add?',
            }
        ])
        .then((answer) => {
            // temporary log until DB logic is added
            console.log(`${answer.addRole} role added`)
        });
}

module.exports = addNewRole;