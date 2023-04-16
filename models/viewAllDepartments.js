const cTable = require('console.table');
const db = require('../config/connection');

async function viewAllDepartments() {
    db.query(`SELECT * FROM department`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table(rows);
        return;
    });
}

module.exports = viewAllDepartments;