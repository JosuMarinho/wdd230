"use strict";

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

const getProphetData = async function() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
  }
  
  const displayProphets = function(prophets) {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); 
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', `${prophet.imageurl}`);
      portrait.setAttribute('alt', `Portrait of ${fullName}`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(fullName); 
      card.appendChild(portrait); 
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }

  getProphetData(); // Call the function to get the data and display it on the page