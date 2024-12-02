import Citas from '../js/classes/Citas.js';

describe('Probar la clse de citas', () => {
    
    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Christian',
            telefono: '0969536446',
            fecha: '10-12-2024',
            hora: '10:03',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita(citaObj);

        // Prueba 
        expect(citas).toMatchSnapshot();

    });

    // Actualizar cita
    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Peluchin',
            propietario: 'Christian',
            telefono: '0969536446',
            fecha: '10-12-2024',
            hora: '10:03',
            sintomas: 'Solo duerme'
        };

        citas.editarCita(citaActualizada);

        // Prueba
        expect(citas).toMatchSnapshot();
    });

    // Eliminar cita
    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        // Prueba
        expect(citas).toMatchSnapshot();
    })
});