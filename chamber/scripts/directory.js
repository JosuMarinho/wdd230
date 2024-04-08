document.addEventListener("DOMContentLoaded", function() {
    const gridButton = document.getElementById("grid-view");
    const listButton = document.getElementById("list-view");
    const memberSection = document.querySelector(".member-card-section");
  
    let currentView = "grid"; // Por defecto, se muestra la vista de cuadrícula
  
    // Cargar los datos de los miembros desde el archivo JSON
    fetch("data/members.json")
      .then(response => response.json())
      .then(data => {
        displayMembers(data); // Mostrar los miembros una vez que se carguen los datos
      })
      .catch(error => console.error("Error loading members:", error));
  
    // Función para mostrar los miembros en la página
    function displayMembers(members) {
      memberSection.innerHTML = ""; // Limpiar cualquier contenido previo
  
      members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");
  
        const memberInfo = `
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>Phone: ${member.phone}</p>
          <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>Membership Level: ${member.membership_level}</p>
          <p>${member.other}</p>
          <img src="images/${member.image}" alt="${member.name}">
        `;
  
        memberCard.innerHTML = memberInfo;
        memberSection.appendChild(memberCard);
      });
    }
  
    // Event listeners para cambiar entre la vista de cuadrícula y la vista de lista
    gridButton.addEventListener("click", function() {
      if (currentView !== "grid") {
        memberSection.classList.remove("list");
        currentView = "grid";
      }
    });
  
    listButton.addEventListener("click", function() {
      if (currentView !== "list") {
        memberSection.classList.add("list");
        currentView = "list";
      }
    });
  });
  