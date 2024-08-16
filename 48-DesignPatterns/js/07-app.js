// Namespace Pattern

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hotdog',
        precio: 15
    }
];

restaurantApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log(`Bienvenido a nuestro menu`);
        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.precio}`);
        });
    }
}

const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);