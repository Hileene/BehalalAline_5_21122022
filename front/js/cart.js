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
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${addItemToCart[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" data-id="${addItemToCart[i].id}" data-color="${addItemToCart[i].color}">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;
        updateQuantity()
        removeItem()
        //FONCTION POUR MODIFIER LA QUANTITÉ D'ARTICLE DANS LE PANIER
        function updateQuantity() {
          let inputs = document.querySelectorAll(".itemQuantity");
          inputs.forEach((input, i) => {
            input.addEventListener("change", () => {
              /*console.log(input.value);
              console.log(i)*/
              addItemToCart[i].quantity = input.value;
              console.log(addItemToCart[i].quantity)
              localStorage.setItem("cart", JSON.stringify(addItemToCart))
              totalPriceCart()

            })
          })
        }
        //FONCTION POUR SUPPRIMER UN PRODUIT DU PANIER
        function removeItem() {
          let deleteItems = document.querySelectorAll(".cart__item .deleteItem")
          deleteItems.forEach((item, i) => {
            item.addEventListener("click", () => {
              console.log(item)
              let removeId = addItemToCart[i].id
              let removeColor = addItemToCart[i].color
              addItemToCart = addItemToCart.filter(item => item.id !== removeId || item.color !== removeColor)
              localStorage.setItem("cart", JSON.stringify(addItemToCart))
              alert('Votre article a bien été supprimé.');
              if (addItemToCart.length === 0) {
                localStorage.clear()
              
              }
              location.reload()
              

            })
          })

        }


        //FONCTION POUR AFFICHER LE PRIX TOTAL DU PANIER
        /* function totalPrice() {

            //Déclaration des variables de la quantité et du prix total en tant que nombre
            let totalItems = 0
            let totalAmount = 0
            let price = product.price
            //console.log(price)
            //Déclaration et association du calcul aux éléments ".cart__item"
            const products = document.querySelectorAll(".cart__item")
            products.forEach((product) => {
              totalItems += JSON.parse(addItemToCart[i].quantity)
              console.log(totalItems)
              totalAmount += addItemToCart[i].quantity * price
              //console.log(product)
              console.log(totalAmount)
              //Affichage des résultats dans le DOM
              document.getElementById("totalQuantity").textContent = totalItems
              document.getElementById("totalPrice").textContent = totalAmount
            })
        }
 */
      })
      .catch(err => console.error(err));
  }
}

//TOTALPRICE
function totalPriceCart() {
  let totalPrice = 0
  for(let p of addItemToCart) {
    const apiUrl = "http://localhost:3000/api/products/";
  
    fetch(`${apiUrl}/${p.id}`)
      .then(response => response.json())
      .then(product => {
        let totalPriceProduct = p.quantity * product.price
        //console.log(totalPriceProduct)
        totalPrice += totalPriceProduct
        document.getElementById("totalPrice").textContent = totalPrice
        //document.getElementById("totalQuantity").textContent =
      })
    }

}
totalPriceCart()

// GESTION DU FORMULAIRE DE COMMANDE

// Récupération des id des différents input

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");

//Récupération des id messages d'erreur

const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
const addressErrorMsg = document.getElementById("addressErrorMsg");
const cityErrorMsg = document.getElementById("cityErrorMsg");
const emailErrorMsg = document.getElementById("emailErrorMsg");


let contact = {
  firstName: "firstName",
  lastName: "lastName",
  city: "city",
  address: "address",
  email: "email",
}
let products = [
   
"055743915a544fde83cfdfc904935ee7"
]

let sendData = {

  contact, products
  
}
console.log(sendData)

//FETCH METHODE POST(si bad request cela veur dire méthode envoie mles mauvaises données)

//METTRE LES REGEX SUR LES INPUT POUR VERIFIER VALIDITÉ DATA