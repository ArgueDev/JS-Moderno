const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        if (this.disponible) {
            console.log(`El producto: ${this.nombre} tiene un precio de: $${this.precio}, esta disponible`);
        } else {
            console.log(`El producto: ${this.nombre} tiene un precio de: $${this.precio}, no esta disponible`);
        }
    }
}

const producto2 = {
    nombre: 'Tablet',
    precio: 3000,
    disponible: false,
    mostrarInfo: function () {
        if (this.disponible) {
            console.log(`El producto: ${this.nombre} tiene un precio de: $${this.precio}, esta disponible`);
        } else {
            console.log(`El producto: ${this.nombre} tiene un precio de: $${this.precio}, no esta disponible`);
        }
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();