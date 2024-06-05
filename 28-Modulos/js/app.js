import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFuncion();

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

console.log(tieneSaldo(ahorro));

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente);

console.log(cliente.mostrarInformacion());

const empresa = new Empresa('ArgueDev', 2000, 'WEB');

console.log(empresa.mostrarInformacion());


