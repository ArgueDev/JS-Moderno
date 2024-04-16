const dinero = 300;
const totalPagar = 500;
const tarjeta = true;

if (dinero >= totalPagar) {
    console.log('Si podemos pagar');
} else if (tarjeta) { 
    console.log('Si puede pagar porque tengo tarjeta');
} else {
    console.log('Fondos insuficientes');
}