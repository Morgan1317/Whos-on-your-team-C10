const inquirer = require('inquirer');
const Manager = require('./Manager')
const Intern = require('./Intern')
const Engineer = require('./Engineer')

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
                return console.log(this.team); //PUT RETURN TO HTML HERE 
            }
           
        })
    }


}

module.exports = Team; 