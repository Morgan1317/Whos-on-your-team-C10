const Employee = require('../lib/Employee');

// tests to make sure employee object is made with correct parameters
test('Creates an employee object', () => {
    const employee = new Employee ('Moira',1,'Moira@gmail.com');

    expect(employee.name).toBe('Moira');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})

