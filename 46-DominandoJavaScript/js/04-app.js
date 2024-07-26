// Implicit Biding

const usuario = {
    nombre: 'Christian',
    edad: 25,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }
}

usuario.informacion()