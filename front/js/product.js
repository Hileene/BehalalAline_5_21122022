//VARIABLE QUI RÉCUPÈRE DES VALEURS DANS LE LOCALSTRORAGE
let addItemToCart = JSON.parse(localStorage.getItem("cart")) || []
console.log(addItemToCart)

//RÉCUPÈRATION DE L'ID DU PRODUIT
const idProduct = new URLSearchParams(window.location.search);
const id = idProduct.get('id')


const apiUrl = "http://localhost:3000/api/products/";

fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(product => {
        console.log(product, product.id)
       if(product._id === undefined) {
        document.querySelector(".item").innerHTML = `<h1>Aucun produit sélectionné</h1>`
       }else {
         displayProducts(product)

    } 
        
    })
    .catch(err => console.error(err));

    

//AFFICHAGE IMG, TITRE, PRIX, DESCRIPTION
function displayProducts(product) {
    let imgProduct = document.querySelector(".item__img")
    let image = document.createElement("img")
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

// VÉRIFICATION QUE LES CHAMPS COULEUR ET NBR D'ARTICLES ONT ÉTÉ SÉLECTIONNÉS

const addButton = document.querySelector("#addToCart")
addButton.addEventListener("click", () => {
    let color = document.querySelector("#colors").value;
    let quantity = document.querySelector("#quantity").value;
    if (color == "" || quantity < 1 || quantity > 100) {
        alert("Veuillez sélectionner une couleur et au moins 1 article (max.100 articles)")
    }else{
        saveDataLocalStorage(color, quantity)

    }
    

    //SAUVEGARDER LES DONNÉES DANS LE LOCALSTORAGE
    function saveDataLocalStorage(color, quantity) {
        const productData = {
            id: id,
            color: color,
            quantity: Number(quantity)
        }
        //AJOUT DE LA MÉTHODE .FIND POUR TROUVER UN ÉLÉMENT DANS L'ARRAY
         const productToUpdate = addItemToCart.find(element => element.id === productData.id && element.color === productData.color)
        // Si le produit n'était pas dans le panier
        if(productToUpdate == undefined) {
            //Mettre à jour le panier
             addItemToCart.push(productData);
             localStorage.setItem("cart", JSON.stringify(addItemToCart))
            alert("Votre produit à bien été ajouté au panier")

        }
        //Si le produit avec un même id et une même couleur est déjà dans le panier
        else {
            //Augmenter la quantité du produit identique
            let newQuantity = productToUpdate.quantity + productData.quantity;
            if(newQuantity > 100) {
                alert("Vous ne pouvez pas avoir plus de 100 produits dans votre panier");

            }
            else{
                productToUpdate.quantity = newQuantity;
                localStorage.setItem("cart", JSON.stringify(addItemToCart)) 
                alert("Votre produit a bien été ajouté au panier")
            }
        }
        
     }
 })
       
        



