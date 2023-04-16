const db = require('../config/connection');
const cTable = require('console.table');

async function viewAllDepartments() {
    // Name, Salary, Department to add role to
    db.query(`SELECT * FROM department`, (err, rows) => {
        if (err) {
            console.log(err);
            // Return to menu
            return;
        }
        return console.table(rows);
    });
}

module.exports = viewAllDepartments;