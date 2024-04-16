// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++){
//     if (i % 2 == 0) {
//         console.log(`El numero ${i} es par`);
//     } else {
//         console.log(`El numero ${i} es impar`);
//     }
// }

const carrito = [
    {nombre: 'Monitor', precio: 1000},
    {nombre: 'Television', precio: 900},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 400}
]

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`);
}

