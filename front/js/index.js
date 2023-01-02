//FETCH: RECUPERATION DES DONNEES DE L'API//
const apiUrl = "http://localhost:3000/api/products";

fetch(apiUrl)
    .then(response => response.json())
    .then(products => displayProducts(products))
    .catch(err => console.error(err));

//AFFICHAGE DES PRODUITS VIA L'API//
    function displayProducts(products) {
        const productList = document.getElementById ("items")
        for(let product of products) {
            productList.innerHTML +=
            `<a href="./product.html?id=${product._id}">          
            <article>
            <img src="${product.imageUrl}"" alt="${product.altTxt}">
            <h3 class="productName">${product.name}</h3>
            <p class="productDescription">${product.description}</p>
            </article>
            </a>`;
            console.log(products)
        
    }
}