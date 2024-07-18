import { obtenerClienteId, actualizarCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function () {
    // Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosUrl = new URLSearchParams(window.location.search);
        const idCliente = parametrosUrl.get('id');

        const cliente = await obtenerClienteId(idCliente);

        mostrarCliente(cliente);

        // Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    function mostrarCliente(cliente) {
        const { nombre, email, telefono, empresa, id } = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        if (validar(cliente)) {
            // Mostrar mensaje
            mostrarAlerta('Todos los Campos son Obligatorios');
            return;
        }

        // Reescribe el objeto
        actualizarCliente(cliente)
    }

})();