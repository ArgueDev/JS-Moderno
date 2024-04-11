inciarApp();

function inciarApp() {
    console.log('Iniciando App...');
    
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Christian');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticado usuario espere...');
    console.log(`Usuario autentiado exitosamente! ${usuario}`);
}