// RÉCUPURATION DE L'ID DE LA COMMANDE

const params = new URL(window.location.href);
const orderIdNumber =  params.searchParams.get("orderId");

// AFFICHAGE DU L'ID DE LA COMMANDE DANS LE DOM
const confirmation = document.querySelector("#orderId")
confirmation.textContent = orderIdNumber