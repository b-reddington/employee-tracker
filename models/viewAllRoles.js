const cTable = require('console.table');
const db = require('../config/connection');

async function viewAllRoles() {
    // Name, Salary, Department to add role to
    db.query(`SELECT * FROM role`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table(rows);
        return;
    });
}

module.exports = viewAllRoles;