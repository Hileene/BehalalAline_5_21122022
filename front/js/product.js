// RECUPERATION DE L'ID DE CHAQUE PRODUIT
const idProduct = new URLSearchParams(window.location.search);
const id = idProduct.get('id')
console.log (id);

const apiUrl = "http://localhost:3000/api/products/";

fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(product => console.log(product))
    .catch(err => console.error(err));