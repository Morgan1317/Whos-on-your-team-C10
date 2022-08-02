const Employee = require('./Employee')
// class that extends from employee, so can use suuper to get those initial inputs, ie name. 
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github; 
    }

};

module.exports = Engineer; 