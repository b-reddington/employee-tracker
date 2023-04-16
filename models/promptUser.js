// Used for creating prompts
const inquirer = require('inquirer');

// Exported Models
const addEmployee = require('./addEmployee');
const viewAllEmployees = require('./viewAllEmployees');
const updateEmployee = require('./updateEmployee');
const addNewRole = require('./addNewRole');
const viewAllRoles = require('./viewAllRoles');
const addNewDepartment = require('./addNewDepartment');
const viewAllDepartments = require('./viewAllDepartments');

const db = require('../config/connection');

async function promptUser() {
    answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'actions',
            message: 'What would you like to do?',
            choices: [
                'Add an Employee',
                'View All Employees',
                'Add Role',
                'Update Employee Role',
                'View All Roles',
                'Add Department',
                'View All Departments',
                'Quit'],
        },
    ])
    // This will be used to exit the application
    let shouldExit = false;

    let result;
    switch (answers.actions) {

        case 'Add an Employee':
            result = await addEmployee();
            break;

        case 'View All Employees':
            result = await viewAllEmployees();
            break;

        case 'Add Role':
            result = await addNewRole();
            break;

        case 'Update Employee Role':
            result = await updateEmployee();
            break;

        case 'View All Roles':
            result = await viewAllRoles();
            break;

        case 'Add Department':
            result = await addNewDepartment();
            break;

        case 'View All Departments':
            result = await viewAllDepartments();
            break;

        case 'Quit':
            console.log(`\x1b[33mGoodbye!\x1b[0m`);
            shouldExit = true;
            break;

        default:
            console.log('You must pick an option.');
    }
    // console log used for debugging purposes
    // console.log(`The result is: ${result}`);

    if (shouldExit) {
        // close the connection to the database
        await db.end();
        // close the application
        await process.exit(0);
    } else {
        // used to recursively call the promptUser function
        promptUser();
    }
}

module.exports = promptUser;