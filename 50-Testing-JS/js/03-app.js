// Probar 2 valores
function expected(esperado) {
    return {
        toBe(resultado) {
            if (resultado !== esperado) {
                console.error(`El resultado ${resultado} es diferente a lo esperado, la prueba no paso`);
            } else {
                console.log('La prueba paso correctamente');
            }              
        }
    }
}

function suma(a, b) {
    return a + b;
}

async function sumaAsync(a, b) {
    return Promise.resolve(suma(a, b));
}

async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`El test ${mensaje} se ejecuto correctamente`);
    } catch (error) {
        console.error('Error:');
        console.error(error);
    }
}

let resultado = suma(1, 3);
let esperado = 3;

expected(esperado).toBe(resultado);

test('Suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsync(10, 20);
    const esperado = 30

    expected(esperado).toBe(resultado);
})
