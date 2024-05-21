class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre} tiene un saldo de: ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido a mi tienda';
    }
}

console.log(Cliente.bienvenida());

const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInformacion());

const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const mario = new Cliente2('Mario', 300);
console.log(mario);