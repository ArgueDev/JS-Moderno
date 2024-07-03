function inicarApp() {

    const resultado = document.querySelector('#resultado');

    const selectCategorias = document.querySelector('#categorias');

    if (selectCategorias) {
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenercCategorias();
    }

    const favoritosDiv = document.querySelector('.favoritos');
    if (favoritosDiv) {
        obtenerFavoritos();
    }


    const modal = new bootstrap.Modal('#modal', {});
    

    function obtenercCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categories = []) {
        categories.forEach(categoria => {
            const { strCategory } = categoria;
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;
            
            selectCategorias.appendChild(option);
        });
    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetas(resultado.meals));
    }

    function mostrarRecetas(meals = []) {
        limpiarHTML(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = meals.length ? 'Resultados' : 'No hay resultados';
        resultado.append(heading);

        meals.forEach(receta => {
            const { idMeal, strMeal, strMealThumb } = receta;

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');
            
            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${strMeal ?? receta.titulo}`;
            recetaImagen.src = strMealThumb ?? receta.img;
            
            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';
            // recetaButton.dataset.bsTarget = '#modal';
            // recetaButton.dataset.bsToggle = 'modal';
            recetaButton.onclick = () => {
                seleccionarReceta(idMeal ?? receta.id);
            }
            
            // Inyectar en el HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);
            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);
            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);
        });
    }

    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]))
    }

    function mostrarRecetaModal(meals) {
        const { idMeal, strInstructions, strMeal, strMealThumb } = meals;

        // Agregar contenido al modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML =
            `
                <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}" />
                <h3 class="my-3">Instrucciones</h3>
                <p>${strInstructions}</p>
                <h3 class="my-3">Ingredientes y Cantidades</h3>
            `;
        
        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');
        
        // Mostrar cantidades e ingredientes
        for (let i = 1; i <= 20; i++) {
            if (meals[`strIngredient${i}`]) {
                const ingrediente = meals[`strIngredient${i}`];
                const cantidad = meals[`strMeasure${i}`];

                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
            }
        };

        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        // Botones de cerrar y favorito
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeEnStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';

        // LocalStorage
        btnFavorito.onclick = () => {
            if (existeEnStorage(idMeal)) {
                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado Correctamente');
                return;
            }

            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            }); 
            btnFavorito.textContent = 'Eliminar Favorito';
            mostrarToast('Agregado Correctamente');

        }
        
        const btnCerrarModal = document.createElement('BUTTON');
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = () => {
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);


        modal.show();
    }

    function agregarFavorito(receta) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));
    }

    function eliminarFavorito(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function existeEnStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(favorito => favorito.id === id);
    }

    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);

        toastBody.textContent = mensaje;
        toast.show();
    }

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

        if (favoritos.length) {
            mostrarRecetas(favoritos);
            return;
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'No hay favoritos';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        resultado.appendChild(noFavoritos);
    }

    function limpiarHTML(select) {
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    }

}

document.addEventListener('DOMContentLoaded', inicarApp);