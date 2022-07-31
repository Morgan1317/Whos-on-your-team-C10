const inquirer = require('inquirer');


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
    };
    getEmployee(){
        inquirer
            .prompt([{
                type:'input',
                name: 'name',
                message: `What is the team manager's name?`
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the team manager's id?`
            },
            {
                type:'input',
                name: 'email',
                message: `What is the team manager's email?`
            }])
            // {
            //     type:'input',
            //     name: 'officeNumber',
            //     message: `What is the team manager's office number?`   
            // },
            // {
            //     type:'checkbox',
            //     name: 'type',
            //     message: `Which type of team member would you like to add?`,
            //     choices: ['Engineer', 'Intern', `I don't want to add any more team members`]   
            // }]);

            .then(({name, id, email}) => {
                this.employee = new Employee(name,id,email)
                console.log(this.employee)
                employeeType()
            })
       
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole(){
        return 'Employee';
    }


}


module.exports = Employee; 