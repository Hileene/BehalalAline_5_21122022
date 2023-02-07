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

      })
      .catch(err => console.error(err));
  }
}

///FONCTION POUR AFFICHER LE PRIX TOTAL DU PANIER
function totalPriceCart() {
  let totalPrice = 0
  for (let p of addItemToCart) {
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

//Création des expressions régulières

let firstNameField = /^[A-zÀ-úÂ-ûÄ-ü\s\-]{2,25}$/;
let lastNameField = /^[A-zÀ-úÂ-ûÄ-ü\s\-']{2,30}$/;
let addressField = /^[0-9]{1,3}[A-zÀ-úÂ-ûÄ-ü\s\-',]+$/;
let cityField = /^[A-zÀ-úÂ-ûÄ-ü\s\-']{1,25}$/;
let emailField = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

//Récupération des id messages d'erreur

const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
let firstNameState = false
let firstNameInput = document.getElementById("firstName")
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
let lastNameState= false
let lastNameInput = document.getElementById("lastName").value;
const addressErrorMsg = document.getElementById("addressErrorMsg");
let addressNameState = false
let addressInput = document.getElementById("address").value;

const cityErrorMsg = document.getElementById("cityErrorMsg");
let cityNameState = false
let cityInput = document.getElementById("city").value;
const emailErrorMsg = document.getElementById("emailErrorMsg");
let emailNameState = false
let emailInput = document.getElementById("email").value;



let badInput = 0

// Vérification des champs du formulaire
firstNameInput.addEventListener("input", (test) => {
test = firstNameField.test(firstNameInput.value)
firstNameErrorMsg.innerHTML = test ? "" : "Veuillez renseignez un prénom valide" // condition ternaire
firstNameState =test ? true : false
})

// Ajout d'un event listener pour écouter le bouton au click
const submitForm = document.querySelector(".cart__order__form")
submitForm.addEventListener("submit", (e) => {
  e.preventDefault()


if(firstNameState) {


  

  let contact = {
    firstName: firstNameInput.value,
    lastName: lastNameInput,
    city: cityInput,
    address: addressInput,
    email: emailInput,
  }
  
  let products = []
  for (let product of addItemToCart) {
    products.push(product.id)
  }
  
  let sendData = {
    
    contact, products
    
  }
  
  console.log(sendData)
  
  
  let order = JSON.stringify(sendData)
  
  
  
  //FETCH METHODE POST POUR ENVOYER LES DONNÉES AU BACKEND
    
    async function orderForm() {

      const body = order
      console.log(body)
      let response = await fetch("http://localhost:3000/api/products/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      })
      if (response.ok) {
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
      } else {
        alert("Erreur")
        console.log("erreur")


      }
      console.log(response)
    }
    
    //Appel de la fonction
    orderForm()
  }else {
    alert("Merci de remplir tous les champs correctement")
  }

  })



  


  /*let errorMsg2 = lastNameErrorMsg;
  if (lastNameField.test(lastNameInput)) {
    errorMsg2.innerText = "";
  } else {
    errorMsg2.innerText = "Veuillez renseigner un nom de famille valide";
    badInput++;
  }

  let errorMsg3 = addressErrorMsg;
  if (addressField.test(addressInput)) {
    errorMsg3.innerText = "";
  } else {
    errorMsg3.innerText = "Veuillez renseigner une adresse valide";
    badInput++;
  }

  let errorMsg4 = cityErrorMsg;
  if (cityField.test(cityInput)) {
    errorMsg4.innerText = "";
  } else {
    errorMsg4.innerText = "Veuillez renseigner une ville valide";
    badInput++;
  }

  let errorMsg5 = emailErrorMsg;
  if (emailField.test(emailInput)) {
    errorMsg5.innerText = "";
  } else {
    errorMsg5.innerText = "Veuillez renseigner un email valide";
    badInput++;
  }*/

















