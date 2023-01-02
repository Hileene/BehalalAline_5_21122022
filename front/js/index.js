//Fetch: Récupération des données de l'API//

fetch("http://localhost:3000/api/products")
.then(response => response.json())
.then(data => getProducts(data))

    function getProducts(data) {
    console.log(data)
    let imageUrl = data[0].imageUrl
    //création de l'élément <a></a>
    let productLink = document.createElement("a")
    productLink.href = imageUrl
    productLink.text = "Kanap Sinopé"
    let items = document.getElementById("items")
    items.appendChild(productLink)
    
}

