const inquirer = require('inquirer');
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
        });
}

module.exports = addNewDepartment;