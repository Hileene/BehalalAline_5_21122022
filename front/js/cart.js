//RÉCUPÉRATION DE L'ARRAY VIA LE LOCALSTORAGE
let addItemToCart = JSON.parse(localStorage.getItem("cart"))
console.log(addItemToCart)

if (!addItemToCart) {
  let cartTitle = document.getElementById("cartAndFormContainer")
  cartTitle.innerHTML = `<h1>Votre panier est vide</h1>`
}
  else {
  //CRÉATION DES ÉLÉMENTS HTML
  const apiUrl = "https://behalalaline-5-kanap.onrender.com/api/products";
  
  fetch(`${apiUrl}`)
  .then(response => response.json())
  .then(product => {
    for (let a of addItemToCart) {
      let search = product.find(element => element._id === a.id)
      document.getElementById("cart__items").innerHTML +=
      ` <article class="cart__item" data-id="${a.id}" data-color="${search.color}">
                <div class="cart__item__img">
                  <img src="${search.imageUrl}" alt="${search.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${search.name}</h2>
                    <p>${a.color}</p>
                    <p>${search.price}€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${a.quantity}">
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

        function updateQuantity() {
          let inputs = document.querySelectorAll(".itemQuantity");
          inputs.forEach((input, i) => {
            input.addEventListener("change", () => {
              if(input.valueAsNumber >= 1 && input.valueAsNumber <= 100) {
              addItemToCart[i].quantity = input.valueAsNumber;
              localStorage.setItem("cart", JSON.stringify(addItemToCart))
              totalPriceCart()
            }else {
              window.alert("Veuillez sélectionner une quantité valide")

            }
            })
          })
        }

        //FONCTION POUR SUPPRIMER UN PRODUIT DU PANIER
        function removeItem() {
          let deleteItems = document.querySelectorAll(".cart__item .deleteItem")
          deleteItems.forEach((item, i) => {
            item.addEventListener("click", () => {
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

      }
      })
      .catch(err => console.error(err));
}


///FONCTION POUR AFFICHER LE PRIX TOTAL DU PANIER
if(addItemToCart) {
function totalPriceCart() {
  let totalPrice = 0
  let totalQuantity = 0
  for (let p of addItemToCart) {
    const apiUrl = "https://behalalaline-5-kanap.onrender.com/api/products";

    fetch(`${apiUrl}/${p.id}`)
      .then(response => response.json())
      .then(product => {
        let totalPriceProduct = parseInt(p.quantity) * product.price
        totalQuantity += parseInt(p.quantity)
        totalPrice += totalPriceProduct
        document.getElementById("totalPrice").textContent = totalPrice
        document.getElementById("totalQuantity").textContent = totalQuantity
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
let lastNameState = false
let lastNameInput = document.getElementById("lastName")
const addressErrorMsg = document.getElementById("addressErrorMsg");
let addressState = false
let addressInput = document.getElementById("address");

const cityErrorMsg = document.getElementById("cityErrorMsg");
let cityState = false
let cityInput = document.getElementById("city");
const emailErrorMsg = document.getElementById("emailErrorMsg");
let emailState = false
let emailInput = document.getElementById("email");





// Vérification des champs du formulaire

firstNameInput.addEventListener("input", (test) => {
  test = firstNameField.test(firstNameInput.value)
  firstNameErrorMsg.innerHTML = test ? "" : "Veuillez renseignez un prénom valide" // condition ternaire
  firstNameState = test ? true : false
})

lastNameInput.addEventListener("input", (test) => {
  test = lastNameField.test(lastNameInput.value)
  lastNameErrorMsg.innerHTML = test ? "" : "Veuillez renseignez un nom valide"
  lastNameState = test ? true : false
})

addressInput.addEventListener("input", (test) => {
  test = addressField.test(addressInput.value)
  addressErrorMsg.innerHTML = test ? "" : "Veuillez renseignez une adresse valide"
  addressState = test ? true : false
})

cityInput.addEventListener("input", (test) => {
  test = cityField.test(cityInput.value)
  cityErrorMsg.innerHTML = test ? "" : "Veuillez renseignez une ville valide"
  cityState = test ? true : false
})

emailInput.addEventListener("input", (test) => {
  test = emailField.test(emailInput.value)
  emailErrorMsg.innerHTML = test ? "" : "Veuillez renseignez un email valide"
  emailState = test ? true : false
})



// Ajout d'un event listener pour écouter le formulaire
const submitForm = document.querySelector(".cart__order__form")
submitForm.addEventListener("submit", (e) => {
  e.preventDefault()


  if (firstNameState && lastNameState && addressState && cityState && emailState) {




    let contact = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      city: cityInput.value,
      address: addressInput.value,
      email: emailInput.value,
    }

    let products = []
    for (let product of addItemToCart) {
      products.push(product.id)
    }

    let sendData = {

      contact, products

    }

    let order = JSON.stringify(sendData)



    //FETCH METHODE POST POUR ENVOYER LES DONNÉES AU BACKEND

    async function orderForm() {

      const body = order
      let response = await fetch("https://behalalaline-5-kanap.onrender.com/api/products/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      })
      if (response.ok) {
        //Réponse du serveur
        const result = await response.json()

        //Envoie du formmulaire 
        window.location.href = `./confirmation.html?orderId=${result.orderId}`;

      } else {
        alert("Erreur")
      }
    }

    //Appel de la fonction
    orderForm()

  } else {

    alert("Merci de remplir tous les champs correctement")
  }

})
}
















