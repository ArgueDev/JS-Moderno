class Cliente {
    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    
    getNombre() {
        return this.#nombre;
    }
    
    mostrarInformacion() {
        return `Cliente ${this.#nombre} tiene un saldo de: ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido a mi tienda';
    }
}

const juan = new Cliente('Juan', 200);
console.log(juan.mostrarInformacion());
console.log(juan.saldo);
console.log(juan.nombre); // Undefined

juan.setNombre('Christian');
console.log(juan.getNombre());