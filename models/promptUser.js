// Used for creating prompts
const inquirer = require('inquirer');
const cTable = require('console.table');

// Exported Models
const addNewDepartment = require('./addNewDepartment');
const addNewRole = require('./addNewRole');

function promptUser() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'actions',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Update Employee Role', 'View All Roles', 'Add Role',
                    'View All Departments', 'Add Department', 'Quit'],
            },
        ])
        .then((answers) => {
            switch (answers.actions) {
                case 'View All Employees':
                    // add query to view all employees
                    promptUser();
                    break;

                case 'Update Employee Role':
                    promptUser();
                    break;
                case 'View All Roles':
                    // add query to view all roles
                    promptUser();
                    break;

                case 'Add Role':
                    addNewRole();
                    break;

                case 'View All Departments':
                    // add query to view all departments
                    promptUser();
                    break;

                case 'Add Department':
                    addNewDepartment();
                    break;

                case 'Quit':
                    console.log(`\x1b[33mGoodbye!\x1b[0m`);
                    break;

                default:
                    console.log('You must pick an option.');
                    promptUser();
            }
        });
}
module.exports = promptUser;