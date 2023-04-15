// Used for creating prompts
const inquirer = require('inquirer');
const cTable = require('console.table');

// Exported Models
const addNewDepartment = require('./addNewDepartment');
const addNewRole = require('./addNewRole');

async function promptUser() {
    answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'actions',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Update Employee Role', 'View All Roles', 'Add Role',
                'View All Departments', 'Add Department', 'Quit'],
        },
    ])
    // This will be used to exit the application
    let shouldExit = false;

    let result;
    switch (answers.actions) {
        case 'View All Employees':
            // add query to view all employees
            break;

        case 'Update Employee Role':
            break;
        case 'View All Roles':
            // add query to view all roles
            break;

        case 'Add Role':
            result = await addNewRole();
            break;

        case 'View All Departments':
            // add query to view all departments
            break;

        case 'Add Department':
            result = await addNewDepartment();
            break;

        case 'Quit':
            console.log(`\x1b[33mGoodbye!\x1b[0m`);
            break;

        default:
            console.log('You must pick an option.');
    }
    // console log used for debugging purposes
    console.log(`The result is: ${result}`);

    if (shouldExit) {
        // await database.disconnect(); will be used to disconnect from the database
        process.exit(0);
    } else {
        // used to recursively call the promptUser function
        promptUser();
    }
}

module.exports = promptUser;