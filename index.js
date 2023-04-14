
const inquirer = require('inquirer');
const cTable = require('console.table');

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


                    promptUser();
                    break;
                case 'Update Employee Role':
                    

                    promptUser();
                    break;
                case 'View All Roles':
                    

                    promptUser();
                    break;
                case 'Add Role':
                    

                    promptUser();
                    break;
                case 'View All Departments':
                    

                    promptUser();
                    break;
                case 'Add Department':
                    

                    promptUser();
                    break;
                case 'Quit':
                    console.log(`Goodbye!`);
                    break;
                default:
                    console.log('You must pick an option.');
                    promptUser();

            }
        });
        
}

// This console log acts as a header for when the user starts the application
console.log(`\x1b[96m
  ███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗
  ██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝
  █████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗  
  ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝  
  ███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗
  ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
                                                                               
  ████████╗██████╗  █████╗  ██████╗██╗  ██╗███████╗██████╗             
  ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗            
     ██║   ██████╔╝███████║██║     █████╔╝ █████╗  ██████╔╝            
     ██║   ██╔══██╗██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗            
     ██║   ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║            
     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ \x1b[0m`);

promptUser();

