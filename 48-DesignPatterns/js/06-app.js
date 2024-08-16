// Mixin Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
    }
}

// Agregar funcionesPersona a la clase de persona
Object.assign(Persona.prototype, funcionesPersona);

const cliente = new Persona('Juana', 'correo@correo.com');
console.log(cliente);
cliente.mostrarInformacion();