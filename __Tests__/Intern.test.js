const Intern = require('../lib/Intern');


test('Creates an intern object', () => {
    const intern = new Intern ('Moira',1,'Moira@gmail.com','school');

    expect(intern.name).toBe('Moira');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

})