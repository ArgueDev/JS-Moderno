const enlace = document.createElement('A');

// Agregando el texto
enlace.textContent = 'Nuevo Enlace';

// Agregando el href
enlace.href = '#';

// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]);


// Crear un card
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de ROCK';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona'
parrafo3.classList.add('precio');

// crear div con la clase info
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('DIV');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);
// Asignar info
card.appendChild(info);

// Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
