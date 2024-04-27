const year = document.querySelector("#currentyear");
const lastModif = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;


let oLastModif = new Date(document.lastModified);

let nLastModif = Date.parse(document.lastModified);

lastModif.innerHTML = `Last Modified: <span>${oLastModif}</span>`