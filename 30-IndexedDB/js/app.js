let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
})

function crmDB() {
    // Crear bd verson 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function () {
        console.log('Hubo un error en la base de datos');
    }

    // Si se creo bien
    crmDB.onsuccess = function () {
        console.log('Base de datos creada');
        DB = crmDB.result;
    }

    // configuracion de la base de datos
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas Creadas');
    }
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');
    
    transaction.oncomplete = function () {
        console.log('Transaccion Completada');
    }

    transaction.onerror = function () {
        console.log('Hubo un error en la transacion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 969536442,
        nombre: 'Christian',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}