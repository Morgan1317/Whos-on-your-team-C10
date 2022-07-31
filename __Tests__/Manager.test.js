const Manager = require('../lib/Manager');


test('Creates an manager object', () => {
    const manager = new Manager ('Moira',1,'Moira@gmail.com',1);

    expect(manager.name).toBe('Moira');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

})