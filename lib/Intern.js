const Employee = require('./Employee')

// class that extends from employee, so can use suuper to get those initial inputs, ie name. 
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school; 
    }
    

};

module.exports = Intern; 