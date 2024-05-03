document.addEventListener('DOMContentLoaded', () => {
    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: ''
    }

   /** Seleccionar los elementos de la interfaz */ 
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spiner = document.querySelector('#spiner');
    
    /** Asignar eventos */
    inputEmail.addEventListener('blur', validar);
    inputCC.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', (e) => {
        e.preventDefault();

        resetForm();
        
    });

    function enviarEmail(e) {
        e.preventDefault();
        spiner.classList.add('flex');
        spiner.classList.remove('hidden');

        setTimeout(() => {
            spiner.classList.remove('flex');
            spiner.classList.add('hidden');

            resetForm();

            /** Crear una alerta */
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje Enviado Correctamente';
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
            
        }, 3000);
        
    }

    function validar(e) {
        if (e.target.value.trim() === '' && e.target.id !== 'cc') {
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.value.trim() !== '' && e.target.id === 'cc' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        
        limiparAlerta(e.target.parentElement);

        /** Asignar los valores */
        email[e.target.name] = e.target.value.trim().toLowerCase();

        /** Comprobar el objeto email */
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        
        limiparAlerta(referencia);

        /** Generar alerta en HTML */
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        /** Inyectar el error al formulario */
        referencia.appendChild(error);
    }

    /** Comprueba si ya existe una alerta */
    function limiparAlerta(referencia) { 
        const alerta = referencia.querySelector('.bg-red-600');

        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        const camposObligatorios = ["email", "asunto", "mensaje"];
        const camposLlenos = camposObligatorios.every(field => email[field].trim() !== "");
    
        if (camposLlenos || email.cc.trim() !== "") {
            btnSubmit.classList.remove("opacity-50");
            btnSubmit.disabled = false;
        } else {
            btnSubmit.classList.add("opacity-50");
            btnSubmit.disabled = true;
        }
    }

    function resetForm() {
        /** reiniciar el objeto */
        email.email = '';
        email.cc = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }

});