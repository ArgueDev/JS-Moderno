/*(function () {
    console.log('Desde un IIFE');

    // const nombreCliente = 'Christian';
    window.nombreCliente = 'Christian';
})(); */

export const nombreCliente = 'Christian';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        return 'Tiene Saldo';
    } else {
        return 'No tiene Saldo';
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('Desde export default');
}