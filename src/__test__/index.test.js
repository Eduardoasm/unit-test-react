const functionString = require('../index');

describe('probando funcionalidades de una funcion', () => {
    test('resultado string', () => {
        expect(typeof functionString()).toBe('string')
    })
    test('resultado no concuerde con una ciudad', () => {
        expect(functionString()).not.toMatch(/Barinas/)
    });
});

