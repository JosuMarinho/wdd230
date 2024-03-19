let oLastModif = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = oLastModif;

const options = {
    year: "numeric"
};
document.querySelector("#yearDate").innerHTML =  new Date().toLocaleDateString("en-US", options);