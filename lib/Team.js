const inquirer = require('inquirer');
const Manager = require('./Manager')
const Intern = require('./Intern')
const Engineer = require('./Engineer')
const Employee = require('./Employee');

class Team {
    constructor(){
        this.team = [];
    }

    getEmployee(position){
        const array = [{
            type:'input',
            name: 'name',
            message: `What is the ${position}'s name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the ${position}'s id?`
        },
        {
            type:'input',
            name: 'email',
            message: `What is the ${position}'s email?`
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
    getManager(){
        const array = this.getEmployee('manager')
        inquirer
        .prompt(array)

        .then(({name,id,email,officeNumber}) => {
            this.team.push(new Manager(name,id,email,officeNumber));
            this.employeeType();
        })
    }
    getIntern(){
        const array = this.getEmployee('Intern')
        inquirer
        .prompt(array)

        .then(({name,id,email,school}) => {
            this.team.push(new Intern(name,id,email,school));
            this.employeeType();
        })
    }
    getEngineer(){
        const array = this.getEmployee('Engineer')
        inquirer
        .prompt(array)

        .then(({name,id,email,github}) => {
            this.team.push(new Engineer(name,id,email,github));
            this.employeeType();
        })
    }


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
                return this.writePage(this.team);
            }
      
        })
    }
    writePage(team){
         // writeFile(data)
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <main>
            ${this.generateCard(team)}
        </main>

            
        </body>
        </html>
            `
    }

    generateCard(team){
        for(let i = 0; i<this.team.length; i++){
                `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${Employee.getName(this.team[i])}
            ${this.getRole(this.team[i])}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.getId(this.team[i])}</li>

            <li class="list-group-item">${this.getEmail(this.team[i])}</li>
            <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            </div>
            `}
    }


    
};

  
module.exports = Team; 