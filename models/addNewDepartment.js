const inquirer = require('inquirer');
const promptUser = require('./promptUser');
function addNewDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'addRole',
                message: 'What department would you like to add?',
            }
        ])
        .then((answer) => {
            // temporary log until DB logic is added
            console.log(`${answer.addRole} department added`)
            promptUser();
        });
}

module.exports = addNewDepartment;