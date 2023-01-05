// RECUPERATION DE L'ID DE CHAQUE PRODUIT
const idProduct = new URLSearchParams(window.location.search);
const id = idProduct.get('id')
console.log (id);

const apiUrl = "http://localhost:3000/api/products/";

fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(product => displayProducts(product))
    .catch(err => console.error(err));

//AFFICHAGE IMG, TITRE, PRIX, DESCRIPTION

function displayProducts(product) {
    const imgProduct = document.querySelector(".item__img")
    const image = document.createElement("img")
    image.src = product.imageUrl
    image.alt = product.altTxt
    imgProduct.appendChild(image);

    const titleProduct = document.querySelector("#title")
    const title = document.createElement("h1")
    title.textContent = product.name
    titleProduct.appendChild(title);

    const priceProduct = document.querySelector("#price")
    const price = document.createElement("p")
    price.textContent = product.price
    priceProduct.appendChild(price);

    const descriptionProduct = document.querySelector("#description")
    const description = document.createElement("p")
    description.textContent = product.description
    descriptionProduct.appendChild(description);

    //AFFICHAGE COULEURS
    const colorProduct = document.querySelector("#colors")
    const color = document.createElement("option")
    color.textContent = product.color
    colorProduct.appendChild(color);

   
}









