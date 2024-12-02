const password = '123456';

describe('Valida que el password no este vacio', () => { 
    test('Debe tener al menos 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });
    test('Password no vacio', () => { 
        expect(password).not.toHaveLength(0);
    });
});