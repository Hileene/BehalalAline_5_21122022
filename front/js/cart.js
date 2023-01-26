document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM entièrement chargé et analysé");
});

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
          ` <article class="cart__item" data-id="${product._id}" data-color="${addItemToCart[i].color}" data-quantity="${addItemToCart[i].quantity}">
                <div class="cart__item__img">
                  <img src="${product.imageUrl}" alt="${product.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${addItemToCart[i].color}</p>
                    <p>${product.price}€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" data-id="${product._id}" data-color="${addItemToCart[i].color}" value="${addItemToCart[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;
              updateQuantity()
              //FONCTION POUR MODIFIER LA QUANTITÉ D'ARTICLE DANS LE PANIER
              function updateQuantity(){
                  let inputs = document.querySelectorAll(".itemQuantity");
                  console.log(inputs)
                  inputs.forEach((input, i) => {
                    input.addEventListener("change", () => {
                      console.log(input.value);
                      console.log(i)
                      console.log(addItemToCart[i])
                      addItemToCart[i].quantity = input.value;
                      console.log(addItemToCart[i])
                      localStorage.setItem("cart", JSON.stringify(addItemToCart))
                    
                  })
                })
              }
              //FONCTION POUR SUPPRIMER UN PRODUI DU PANIER


              //FONCTION POUR AFFICHER LE PRIX TOTAL DU PANIER
              
                
            })
            
            
          .catch(err => console.error(err));
          }
        }
        
// GESTION DU FORMULAIRE DE COMMANDE

//Récupération des id des articles du panier
/*const itemsIds = []
addItemToCart.forEach((product) => {
  itemsIds.push(product.id)
})

//Écoute du champ input
document.querySelector(".cart__order__form__submit").addEventListener("click", function(e) {
  e.preventDefault();


})*/