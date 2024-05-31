const carrito = new Set();

carrito.add('Camiseta'); // Agrega al set
carrito.add('Jean'); // Agrega al set
carrito.add('Chompa'); // Agrega al set
carrito.add('Pantaloneta'); // Agrega al set
console.log(carrito.has('Guitarra')); // Verifica si existe en el set
console.log(carrito.delete('Camiseta')); // Elimina del set
console.log(carrito.size); // Cantidad de elementos en el set

carrito.forEach(producto => {
    console.log(producto);
})

console.log(carrito);

