// weakMap

const producto = {
    idProducto: 10
}

const weakMap = new WeakMap();

weakMap.set(producto, 'monitor');

console.log(weakMap);