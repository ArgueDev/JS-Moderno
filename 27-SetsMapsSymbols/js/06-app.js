// iteradores

function crearIterado(carrito) {

    let i = 0;
    
    return {
        siguiente: () => {
            const fin = ( i >= carrito.lenght);
            const valor = !fin ? carrito[i++] : undefined;
            
            return {
                fin,
                valor
            }
        }
    }

}

const carrito = ['Producto1', 'Producto2', 'Producto3'];

// Utilizar el iterado
const recorrerCarrito = crearIterado(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());