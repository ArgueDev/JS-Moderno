// Objecto Literal
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

// Objecto Constructor
function Prodcuto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Prodcuto('Monitor de 24 Pulgadas', 500);
console.log(producto2);