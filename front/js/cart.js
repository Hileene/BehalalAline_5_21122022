//RÉCUPÉRATION DE L'ARRAY VIA LE LOCALSTORAGE
let addItemToCart = JSON.parse(localStorage.getItem("cart"))
console.log(addItemToCart)

if (!addItemToCart) {
    let cartTitle = document.getElementById("cartAndFormContainer")
    cartTitle.innerHTML = `<h1>Votre panier est vide</h1>`
}
else {
    //CRÉATION DES ÉLÉMENTS HTML
    for (let i = 0; i < addItemToCart.length; i++) {
        const apiUrl = "http://localhost:3000/api/products/";

        fetch(`${apiUrl}/${addItemToCart[i].id}`)
            .then(response => response.json())
            .then(product => {
                document.getElementById("cart__items").innerHTML +=
                ` <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="${product.imageUrl}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Nom du produit</h2>
                    <p>Vert</p>
                    <p>42,00 €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté :${addItemToCart[i].quantity} </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`
                /* //Création de la balise article
                let cartSection = document.querySelector("#cart__items");
                let elArticle = document.createElement("article");
                cartSection.appendChild(elArticle);
                elArticle.setAttribute("data-id", addItemToCart[i].id)
                elArticle.setAttribute("data-color", addItemToCart[i].colors)
        
                //Création des balises div et img
                let imgDiv = document.createElement("div");
                elArticle.appendChild(imgDiv)
        
                let imageCart = document.createElement("img");
                imgDiv.appendChild(imageCart);
                //imageCart.src = product.imageUrl;
                imageCart.alt = addItemToCart[i].altTxt */
            })
            .catch(err => console.error(err));


    }


}


