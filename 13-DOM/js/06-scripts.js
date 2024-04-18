const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); // Si en el css - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); // Se trae el html