'use strict';

const mainGrindContainer = document.querySelector('.main-grind-container');

const baseURL = "https://josumarinho.github.io/wdd230/";
const linksURL = "data/links.json";

const getLinks = async function() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    displayLinks(data.weeks);
}

const displayLinks = function(data) {
    for (let index = 0; index < data.length; index++) {
        let sectionEl = document.createElement('section');
        sectionEl.classList.add('card');

        let h2El = document.createElement('h2');
        h2El.textContent = data[index].week;
        sectionEl.appendChild(h2El);

        let ulEl = document.createElement('ul');

        data[index].links.forEach((link) => {
            let liEl = document.createElement('li');
            let linkEl = document.createElement('a');
            linkEl.href = `${baseUrl}/${link.url}`;
            linkEl.textContent = link.title;
            linkEl.target = '_blank';
            liEl.appendChild(linkEl);
            ulEl.appendChild(liEl);
        });

        sectionEl.appendChild(ulEl);
        mainGrindContainer.appendChild(sectionEl);
    }
};

getLinks();