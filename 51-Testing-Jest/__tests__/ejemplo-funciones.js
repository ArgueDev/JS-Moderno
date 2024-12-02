function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

describe('TEsting a las funciones de suma y resta', () => {
    test('Suma de 20  30', () => {
        expect(suma(20, 30)).toBe(50);
    });
    test('Resta 10 - 5', () => {
        expect(restar(10, 5)).toBe(5);
    });
    test('La suma de 10 y 10 no sea 10', () => {
        expect(suma(10, 10)).not.toBe(10);
    });
    test('Resta de 10 - 5 no sea otro valor', () => {
        expect(restar(10, 5)).not.toBe(2);
    })
});