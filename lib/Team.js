// this file runs the majority of the input, and thus requires all the files to be loaded in. 
const inquirer = require('inquirer');
const Manager = require('./Manager')
const Intern = require('./Intern')
const Engineer = require('./Engineer')

// a separate file is used to actually write the file, and so it also needs to be loaded in. 
const writeFile = require('../src/generate-site')

// team constructor looks at the entire team, all of the employees. 
class Team {
    constructor(){
        this.team = [];
    }
    // prompts user for input, and adjust questions asked depending on user input
    getEmployee(position){
        const array = [{
            type:'input',
            name: 'name',
            message: `What is the ${position}'s name?`,
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log(`You need to enter ${position}'s name?`);
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the ${position}'s id?`,
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log(`You need to enter ${position}'s id`);
                  return false;
                }
              }
        },
        {
            type:'input',
            name: 'email',
            message: `What is the ${position}'s email?`,
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log(`You need to enter ${position}'s email!`);
                  return false;
                }
              }
        }];
        if( position === 'manager'){    
            array.push({ type:'input', name: 'officeNumber',message: `What is the team manager's office number?`});  
        } else if (position === 'Intern') {
            array.push({ type:'input', name: 'school',message: `What school does this team member attend? `});   
        } else if (position === 'Engineer') {
            array.push({ type:'input', name: 'github',message: `What is the team member's github?`});   
        } else {
            return; 
        }
        return array; 
       
    }
    // starts when the code is first initialized, by prompting the user for the manager, it then adds manager to team and moves to ask if more team members should be added 
    getManager(){
        const array = this.getEmployee('manager')
        inquirer
        .prompt(array)

        .then(({name,id,email,officeNumber}) => {
            this.team.push(new Manager(name,id,email,officeNumber));
            this.employeeType();
        })
    }
    // if intern is selected the intern questions are prompted and pushed into team array 
    getIntern(){
        const array = this.getEmployee('Intern')
        inquirer
        .prompt(array)

        .then(({name,id,email,school}) => {
            this.team.push(new Intern(name,id,email,school));
            this.employeeType();
        })
    }
     // if engineer is selected the intern questions are prompted and pushed into team array 
    getEngineer(){
        const array = this.getEmployee('Engineer')
        inquirer
        .prompt(array)

        .then(({name,id,email,github}) => {
            this.team.push(new Engineer(name,id,email,github));
            this.employeeType();
        })
    }

    // prompts if user wants to add another employee, and if so what type, and moves to corresponding prompts according to user selection
    employeeType(){
        inquirer .prompt([
        {
            type:'list',
            name: 'member',
            message: `Which type of team member would you like to add?`,
            choices: ['Engineer', 'Intern', `I don't want to add any more team members`]   
        }])
        .then(({member}) => {
            if (member === 'Intern'){
                return this.getIntern()
            } else if (member === 'Engineer'){
                return this.getEngineer()
            } else {
                // if user does not select any more employees, and write page is called
                return this.writePage();
            }
      
        })
    }
    // function calls to write the page, and calls upon write file script, inputting the data according to user response
    writePage(){
        
        return writeFile(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The Team</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
        <header>The Team</header>
        <main class = 'row justify-content-center'>
            ${this.generateCard()}
        </main>

            
        </body>
        </html>
            `)
    }

    // cards are generated dependant on input

    generateCard(){
        // empty array is initialized to hold the cards for the team members so they can be pushed and added
        const cardsArray = [];
        for(let i = 0; i<this.team.length; i++){
        //    depending on the role of the employee, different cards are generated with their corresponding names,email,etc, using the functions in employee.js
        // 
            if(this.team[i].getRole() === 'Manager'){
                cardsArray.push(`
                <div class="card col-4">
                <div class="card-header manager">
                ${this.team[i].getName()} : 
                <i class="fa-solid fa-mug-hot" aria-hidden="true"></i>
                ${this.team[i].getRole()}
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${this.team[i].getId()}</li>

                <li class="list-group-item">Email: <a href="mailto: ${this.team[i].getEmail()}">${this.team[i].getEmail()}</a></li>

                <li class="list-group-item">Office Number: ${this.team[i].officeNumber}</li>
                </ul>
                </div>
                `)
            }
            else if(this.team[i].getRole() === 'Intern'){
                cardsArray.push(`
                <div class="card col-4">
                <div class="card-header intern">
                ${this.team[i].getName()} :
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                ${this.team[i].getRole()}
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.team[i].getId()}</li>

                <li class="list-group-item">Email: <a href="mailto: ${this.team[i].getEmail()}">${this.team[i].getEmail()}</a></li>
                <li class="list-group-item">School: ${this.team[i].school}</li>
                </ul>
                </div>
                `)
                
            }
            else if(this.team[i].getRole() === 'Engineer'){
                cardsArray.push(`
                <div class="card col-4">
                <div class="card-header engineer">
                ${this.team[i].getName()} : 
                <i class="fa-solid fa-glasses" aria-hidden="true"></i>
                ${this.team[i].getRole()}
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.team[i].getId()}</li>

                <li class="list-group-item">Email: <a href="mailto: ${this.team[i].getEmail()}">${this.team[i].getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${this.team[i].github}" target="_blank" rel="noopener noreferrer">${this.team[i].github}</a></li>
                </ul>
                </div>
                `)
            }
        }
        // once there are no more team mates to run through, length of teams array is 0, they array is joined and returned to the writePage function
        // this allows all the cards to be printed out. 
            return cardsArray.join('')
             
    }


    
};

  
module.exports = Team; 