function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaron', 'Negro');
console.log(auto);

// Window binding

window.color = 'negro'
function hola() {
    console.log(color);
}

hola()