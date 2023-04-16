const cTable = require('console.table');
const db = require('../config/connection');

async function viewAllEmployees() {
    // Name, Salary, Department to add role to
    const query = `
    SELECT first_name, 
    last_name, 
    manager_id 
    FROM employee`;
    db.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table(rows);
        return;
    });
}

module.exports = viewAllEmployees;