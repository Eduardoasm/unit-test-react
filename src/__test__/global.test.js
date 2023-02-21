const string = "Hola Mundo";
const array = ['manzana', 'pera', 'cambur']
const reverseString = (string, cb) => {
    cb(string.split('').reverse().join(''))
};


test('esta esperando un string', () => {
    expect(string).toMatch(/Mundo/)
});

test('¿tenemos un cambur?', () => {
    expect(array).toContain('cambur')
});

test('mayor que', () => {
    expect(10).toBeGreaterThan(9)
});

test('verdadero', () => {
    expect(true).toBeTruthy()
});

test('Probar un callback', () => {
    reverseString('Hola', (string) => {
        expect(string).toBe('aloH')
    })
});

const reverseString2 = (string) => {
    return new Promise((resolve, reject) => {
        if(!string) {
            reject(Error('Error'))
        }
        resolve(string.split('').reverse().join(''))
    })
};

test('resuelva la promesa', () => {
    reverseString2('Hola')
    .then(string => {
        expect(string).toBe('aloH')
    })
});

test('con async await', async () => {
    const string = await reverseString2('Hola')
    expect(string).toBe('aloH')
});
