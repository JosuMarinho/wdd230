let oLastModif = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = oLastModif.toLocaleString();

const options = {
    year: "numeric"
};
document.querySelector("#copyright-year").textContent = new Date().toLocaleDateString("en-US", options);

    