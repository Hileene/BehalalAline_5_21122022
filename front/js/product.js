//VARIABLE QUI RÉCUPÈRE DES VALEURS DANS LE LOCALSTRORAGE
let addItemToCart = JSON.parse(localStorage.getItem("cart")) || []

console.log(addItemToCart)

//RÉCUPÈRATION DE L'ID DU PRODUIT
const idProduct = new URLSearchParams(window.location.search);
const id = idProduct.get('id')


const apiUrl = "http://localhost:3000/api/products/";

fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(product => displayProducts(product))
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
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    let color = document.querySelector("#colors").value;
    let quantity = document.querySelector("#quantity").value;
    if (color == "") {
        alert("Veuillez sélectionner une couleur")
    }
    if (quantity < 1 || quantity > 100) {
        alert("Vous devez ajouter au moins article et pas plus de 100 articles")
    }


    // FONCTION POUR COMFIRMER L'AJOUT DU PRODUIT DANS LE PANIER
    const addToCartConrfirmation = () =>{
        if(window.confirm("Votre produit a bien été ajouté. Consultez votre panier OK ou revenir sur la page d'accueil ANNULER")){
            window.location.href = "cart.html";
        }else{
        window.location.href = "index.html";
        }
    }
    saveDataLocalStorage(color, quantity)

    

    //SAUVEGARDER LES DONNÉES DANS LE LOCALSTORAGE
    function saveDataLocalStorage(color, quantity) {
        const productData = {
            id: id,
            color: color,
            quantity: Number(quantity),
        }
        //AJOUT DE LA MÉTHODE .FIND POUR TROUVER UN ÉLÉMENT DANS L'ARRAY
        const productToUpdate = addItemToCart.find(element => element.id === productData.id && element.color === productData.color)
        
        // Si le produit n'était pas dans le panier
        if (productToUpdate == undefined) {
            //Mettre à jour le panier
            addItemToCart.push(productData);
            localStorage.setItem("cart", JSON.stringify(addItemToCart))
            console.log("Votre produit à bien été ajouté au panier")
            addToCartConrfirmation()
        }

        //Si le produit avec un même id et une même couleur est déjà dans le panier
        else {
            //Augmenter la quantité du produit identique
            productToUpdate.quantity += productData.quantity;
            localStorage.setItem("cart", JSON.stringify(addItemToCart))
            console.log("Vous avez ajouté le même canapé", productToUpdate)
            addToCartConrfirmation()
        }
        /*addItemToCart.push(productData)
        localStorage.setItem("cart", JSON.stringify(addItemToCart))*/
    }
})

