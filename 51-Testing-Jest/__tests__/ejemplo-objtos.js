const cliente = {
    nombre: 'Christian',
    balance: 1000,
};

describe('Testing al Cliente', () => {  
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(900);
    });
    test('Es Christian', () => { 
        expect(cliente.nombre).toBe('Christian');
    });
});                     