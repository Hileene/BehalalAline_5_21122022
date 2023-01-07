// RECUPERATION DE L'ID DE CHAQUE PRODUIT

const idProduct = new URLSearchParams(window.location.search);
const id = idProduct.get('id')
console.log(id);

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
    titleProduct.textContent = product.name;

    const priceProduct = document.querySelector("#price")
    priceProduct.textContent = product.price;

    const descriptionProduct = document.querySelector("#description")
    descriptionProduct.textContent = product.description;

    //MISE EN PLACE DE DES OPTIONS DE COULEURS
    const colorsProduct = document.querySelector("#colors")
    const colors = product.colors
    colors.forEach((color) => {
        const colorsOptions = document.createElement("option")
        colorsOptions.value = color
        colorsOptions.textContent = color
        colorsProduct.appendChild(colorsOptions);
    })
}

// TABLEAU QUI CONTIENT LES DONNEES DU PRODUIT

// FONCTION POUR AJOUTER UN PRODUIT AU PANIER

// VALIDATION DU NOMBRE D'ARTICLES