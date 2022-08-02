const Engineer = require('../lib/Engineer');

// tests to make sure engineer object is made with correct parameters
test('Creates an engineer object', () => {
    const engineer = new Engineer ('Moira',1,'Moira@gmail.com','github');

    expect(engineer.name).toBe('Moira');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

})