const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true
}

const { nombre, precio, disponible } = producto;
console.log(nombre);

// Destructurin con arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, , tercero, , quinto] = numeros;

console.log(primero);
console.log(tercero);
console.log(quinto);