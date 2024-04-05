const producto = "Monitor de 20 Pulgadas";

// .repeat te va a permitir repetir una cadena de texto
const texto = ' En Promocion'.repeat(2.4);
console.log(texto);
console.log(`${producto} ${texto}`)

// Split, dividir un string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Escuchar, Musica, Escribir, Aprender a programar';
console.log(hobbies.split(', '));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));