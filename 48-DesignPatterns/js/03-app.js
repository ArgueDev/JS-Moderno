// Singleton

let instancia = null;
class Peronsa {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona = new Peronsa('Juan', 'correo@corre.com');
console.log(persona);

const persona2 = new persona('karen', 'emial@email.com');
console.log(persona2);