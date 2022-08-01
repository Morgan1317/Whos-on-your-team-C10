
// created class employee, which passed the test
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
    };
  
    // these functions will call upon the parameters asked for from the class they are in. 
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }
    // because employee is the parent, we can use constructor, to have it recall the name of the class it is called ins role
    getRole(){
        return this.constructor.name;
    }
}


module.exports = Employee; 