const cTable = require('console.table');
const db = require('../config/connection');
const inquirer = require('inquirer');

async function updateEmployee() {
    // Get list of employees to choose from
    const employees = await db.promise().query('SELECT id, CONCAT(first_name, " ", last_name) as name FROM employee');

    // Get list of roles to choose from
    const roles = await db.promise().query('SELECT id, title FROM role');

    // Prompt user to select an employee and a new role
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'Which employee would you like to update?',
            choices: employees[0].map(employee => ({ name: employee.name, value: employee.id }))
        },
        {
            type: 'list',
            name: 'newRoleId',
            message: 'What role would you like to assign to this employee?',
            choices: roles[0].map(role => ({ name: role.title, value: role.id }))
        }
    ]);

    // Update the selected employee's role
    const { employeeId, newRoleId } = answers;
    const query = `
    UPDATE employee 
    SET role_id = ${newRoleId}
    WHERE id = ${employeeId}
  `;
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log(`Employee with ID ${employeeId} has been updated to new role with ID ${newRoleId}`);
        return;
    });
}
module.exports = updateEmployee;