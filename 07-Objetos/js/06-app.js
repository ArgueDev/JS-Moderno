const producto = {

    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    
    informacion: {

        medida: {
            peso: '1Kg',
            medida: '1m'
        },

        fabricacion: {
            pais: 'China'
        }

    }

}

const { nombre } = producto;
const { informacion: { fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(pais);