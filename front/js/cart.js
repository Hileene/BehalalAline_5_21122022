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
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;
        updateQuantity()
        removeItem()
        //FONCTION POUR MODIFIER LA QUANTITÉ D'ARTICLE DANS LE PANIER
        /*Problème dans le DOM: quand deux articles ont le même id il ne sont affiché l'un après l'autre
        * ce qui diffère du localstorage*/
        function updateQuantity() {
          let inputs = document.querySelectorAll(".itemQuantity");
          inputs.forEach((input, i) => {
            input.addEventListener("change", () => {
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
        //document.getElementById("totalQuantity").textContent = addItemToCart[i].quantity + p.quantity
      })
    }

}
totalPriceCart()

// GESTION DU FORMULAIRE DE COMMANDE




// Ajout d'un event listener pour écouter le bouton au click
const submitForm = document.querySelector(".cart__order__form")
submitForm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  let badInput = 0
  
  // Récupération des id des différents input
  
  let firstNameInput = document.getElementById("firstName").value;
  let lastNameInput = document.getElementById("lastName").value;
  let addressInput = document.getElementById("address").value;
  let cityInput = document.getElementById("city").value;
  let emailInput = document.getElementById("email").value;
  
  if(badInput === 0) {

    let  contact = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      city: cityInput,
      address: addressInput,
      email: emailInput,
    }
    console.log(contact);
    
    let products = []
    for(let product of addItemToCart) {
      products.push(product.id)
    }
    console.log(products)
    
    let sendData = {
      
      contact, products
      
    }
    
    console.log(sendData)
    
    
    let order= JSON.stringify(sendData)
    
    
    
    //FETCH METHODE POST POUR ENVOYER LES DONNÉES AU BACKEND
    async function orderForm() {
      
      if(addItemToCart.length === 0) alert("Veuillez ajouter un article à votre panier")
      const cartForm = document.querySelector(".cart__order__form")
      const body = order
      console.log(body)
      let response = await fetch("http://localhost:3000/api/products/order", {
        method: "POST",
            headers: { "Content-Type": "application/json" },
            body: body,
          })
          if(response.ok) {
            //Réponse du serveur
            const result = await response.json()
            
            // Vide le localstorage
            function deleteLocalStorage(key) {
              localStorage.removeItem(key)
            }
            // Appel de la fonction
            deleteLocalStorage(addItemToCart)
            //Envoie du formmulaire 
            // window.location.href = `./confirmation.html?orderId=${result.orderId}`;
          }
          console.log(response)
        }
        //Appel de la fonction
        orderForm()
    
  } else {

    //Création des expressions régulières
        
        let firstName = /^[A-zÀ-úÂ-ûÄ-ü\s\-]{1,25}$/;
        let lastName = /^[A-zÀ-úÂ-ûÄ-ü\s\-']{1,30}$/;
        let address = /^[0-9]{1,3}[A-zÀ-úÂ-ûÄ-ü\s\-',]+$/;
        let city = /^[A-zÀ-úÂ-ûÄ-ü\s\-']{1,25}$/;
        let email = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
        
        //Récupération des id messages d'erreur
        
        const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
        const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
        const addressErrorMsg = document.getElementById("addressErrorMsg");
        const cityErrorMsg = document.getElementById("cityErrorMsg");
        const emailErrorMsg = document.getElementById("emailErrorMsg");

      function testForm() {

        
      }




  }
  

  



      
    })

  






//METTRE LES REGEX SUR LES INPUT POUR VERIFIER VALIDITÉ DATA