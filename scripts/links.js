'use strict';

const mainGrindContainer = document.querySelector('.main-grind-container');

const baseURL = "https://josumarinho.github.io/wdd230/";
const linksUrl = "data/links.json";

const getLinks = async function() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    displayLinks(data.weeks);
}

const displayLinks = function(data) {
    // Borra el contenido existente del contenedor principal
    mainGrindContainer.innerHTML = '';

    // Crea una única sección para todas las semanas
    let sectionEl = document.createElement('section');
    sectionEl.classList.add('card'); // Agrega la clase 'card' al elemento <section>

    // Itera sobre cada elemento en el array 'data'
    for (let index = 0; index < data.length; index++) {
        // Crea un encabezado <h2> para mostrar el título de la semana
        let h2El = document.createElement('h2');
        h2El.textContent = data[index].week; // Establece el texto del encabezado como el título de la semana
        sectionEl.appendChild(h2El); // Agrega el encabezado al elemento <section>

        // Crea una lista <ul> para contener los enlaces
        let ulEl = document.createElement('ul');

        // Itera sobre cada enlace en la semana actual
        data[index].links.forEach((link) => {
            // Crea un elemento <li> para cada enlace
            let liEl = document.createElement('li');
            // Crea un enlace <a> con la URL generada a partir de 'baseURL' y el enlace específico de la semana
            let linkEl = document.createElement('a');
            linkEl.href = `${baseURL}/${link.url}`; // La URL completa se forma concatenando 'baseURL' y la URL específica del enlace
            linkEl.textContent = link.title; // Establece el texto del enlace como el título del enlace
            linkEl.target = '_blank'; // Abre el enlace en una nueva pestaña
            liEl.appendChild(linkEl); // Agrega el enlace al elemento <li>
            ulEl.appendChild(liEl); // Agrega el elemento <li> a la lista <ul>
        });

        // Agrega la lista <ul> al elemento <section>
        sectionEl.appendChild(ulEl);
    }

    // Agrega la única sección al contenedor principal 'mainGrindContainer' al final
    mainGrindContainer.appendChild(sectionEl);
};