// Manejar localStorage para mensajes de bienvenida
document.addEventListener("DOMContentLoaded", function() {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // milisegundos en un día

    if (lastVisit) {
        const daysDifference = Math.round((currentDate - lastVisit) / oneDay);
        if (daysDifference === 0) {
            document.querySelector('.sidebar').innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";
        } else if (daysDifference === 1) {
            document.querySelector('.sidebar').innerHTML = "<p>Back so soon! Awesome!</p>";
        } else {
            document.querySelector('.sidebar').innerHTML = "<p>You last visited " + daysDifference + " days ago.</p>";
        }
    } else {
        document.querySelector('.sidebar').innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";
    }

    // Guardar la fecha de la última visita
    localStorage.setItem("lastVisit", currentDate);
});