const cliente = {
    nombre: 'Christian',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('Es Christian', () => {
        expect(cliente).toMatchSnapshot();
    });
});