function sumar(a, b) {
    return a + b;
}

const suma = sumar(2, 3);
console.log(suma);

// Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}


function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(300);
total = agregarCarrito(300);

const totalPagar = calcularImpuesto(total);

console.log(total);
console.log(`El total a pagar es de: ${totalPagar}`);