const Employee = require('./Employee')

// class that extends from employee, so can use suuper to get those initial inputs, ie name. 
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber; 
    }    
};
module.exports = Manager; 