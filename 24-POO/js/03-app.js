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

/** Herencia */
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return 'Bienvenido a la tienda 2'
    }

    mostrarInformacion() {
        return `La Empresa ${this.nombre}, cuenta con un saldo de ${this.saldo} y pertence a la categoria ${this.categoria}, para mas informacion llamar al ${this.telefono}`;
    }

}

const empresa = new Empresa('ArgueDev', 1000, 969536442, 'Programacion');
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());