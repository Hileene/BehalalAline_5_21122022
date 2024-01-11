# Construisez un site e-commerce en JavaScript

<p align="center">
  <img src="/front/images/readme-banner.png" alt="Bannière Kanap">
</p>

*Projet #5 : Formation Développeur Web [OpenClassrooms](https://openclassrooms.com/fr/paths/717-developpeur-web)*

 [![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
<img src="/front/images/powered-by-candy.svg" alt="For The Badge Candy image" />

[Kanap](https://hileene.github.io/BehalalAline_5_21122022/) - <a href="#version-française">README FR</a> - <a href="#english-version">README EN</a>


---
## VERSION FRANÇAISE

## Sommaire

- [Description du projet](#description-du-projet)
- [Scénario fictif](#scénario-fictif)
- [Compétences évaluées](#compétences-évaluées)
- [Technologies](#technologies)
- [Spécifications fonctionnelles et techniques](#spécifications-fonctionnelles-et-technologies)
- [Installation](#installation)
- [Développé avec](#développé-avec)
- [Auteur](#auteur)

## Description du Projet

Pour ce projet ma mission était d'implémenter un site de e-commerce de manière dynamique.
Mes tâches étaient les suivantes:

- Unifier les travaux déjà réalisés sur front-end en intégrant dynamiquement les éléments de l’API dans les différentes pages web avec JavaScript
- Mettre en place un plan de test d’acceptation

## Scénario Fictif

En poste dans une agence de développement web, notre nouveau client Kanap est une marque de canapés qui vend ses produits depuis sa boutique physique et souhaiterait avoir une plateforme de e-commerce pour les vendre en ligne.
Frank, le développeur front-end, a réalisé les maquettes statiques du site c'est-à-dire toute la structure du HTML et CSS.
Enfin, Bilal, le développeur back-end, a implémenté l'API à laquelle est connecté le front-end.

## Compétences Évaluées

- 🧪 Créer un plan de test pour une application
- 🎮 Gérer des événements JavaScript
- 🌐 Interagir avec un web service avec JavaScript
- 🛡️ Valider des données issues de sources externes

## Technologies

- HTML
- CSS
- JavaScript

## Spécifications fonctionnelles et techniques

L'application est composée de 4 pages:
- **Une page d’accueil:** 
  - Elle montre de manière dynamique tous les articles disponibles à la vente
  - Chaque produit comprend une image, un nom et une description
  - En cliquant sur un produit, l’utilisateur sera redirigé sur la page du produit pour avoir plus de détails

- **Une page produit:**
  - Affiche les détails du produit
  - Contient un menu déroulant permmettant à l'utilisateur de choisir une option de personnalisation
  - L'utilisateur peut sélectionner une couleur, une quantité et l'ajouter au panier

- **Une page panier:**
  - Affiche le résumé des articles sélectionnés par l'utlisateur avec le montant total
  - Possibilité de modifier la quantitté ou de supprimer un article
  - Formulaire permettant de passer commande
  - Les inputs des utilisateurs doivent être analysés et validés pour vérifier le format et le type de données avant l’envoi à l’API
  - Ne pas stocker le prix des articles en local. Les données stockées en local ne sont pas sécurisées et l’utilisateur pourrait alors modifier le prix lui-même

- **Une page confirmation:**
  - Affiche un message de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant l'identifiant de commande envoyé par l’API


## Installation

### Prérequis pour le Back-end ###

Vous devrez avoir Node et `npm` installés localement sur votre machine.

### Installation du Back-end ###

- Clonez le dépôt fourni avec le projet. 
- Depuis le dossier "back" du projet, exécutez `npm install`. Vous pouvez ensuite démarrer le serveur avec `node server`. 
- Le serveur devrait fonctionner sur `localhost` avec le port par défaut `3000`. 


## Développé Avec

- [Visual Studio Code](https://code.visualstudio.com/)
- [Google Font](https://fonts.google.com/) 
- [GitHub](https://github.com/) 
- [GitHub Pages](https://pages.github.com/)
- [Render](https://render.com/)

## Auteur
- [@hileene](https://www.github.com/Hileene) 
- [**Portfolio**](https://portfolio-test.com)

---

## ENGLISH VERSION

# Build an E-commerce Website in JavaScript

*Project #5: Web Developer Training [OpenClassrooms](https://openclassrooms.com/en/paths/717-web-developer)*

## Table of Contents

- [Project Description](#project-description)
- [Fictional Scenario](#fictional-scenario)
- [Evaluated Skills](#evaluated-skills)
- [Technologies](#technologies)
- [Functional and Technical Specifications](#functional-and-technical-specifications)
- [Installation](#installation)
- [Built With](#developed-with)
- [Author](#author)

## Project Description

For this project, my mission was to implement a dynamic e-commerce website.
My tasks included:

- Combine the work that has been done on the front-end by dynamically integrating API elements into various web pages using JavaScript.
- Set up a plan for acceptance testing

## Fictional Scenario

Working in a web development agency, our new client Kanap is a sofa brand that sells its products from its physical store and would like to have an e-commerce platform to sell them online.
Frank, the front-end developer, has created static site. All the HTML and CSS structure is finalized.
Finally, Bilal, the back-end developer, has implemented the API connected to the front-end.

## Evaluated Skills

- 🧪 Creating a test plan for an application
- 🎮 Managing JavaScript events
- 🌐 Interacting with a web service using JavaScript
- 🛡️ Validating data from external sources

## Technologies

- HTML
- CSS
- JavaScript

## Functional and Technical Specifications

The application consists of 4 pages:

- **Home Page:**
  - Dynamically displays all available articles for sale.
  - Each product includes an image, a name, and a description.
  - Clicking on a product redirects the user to the product page for more details.

- **Product Page:**
  - Displays product details.
  - Contains a dropdown menu allowing the user to choose a customization option.
  - The user can select a color, quantity, and add it to the cart.

- **Cart Page:**
  - Displays a summary of the items selected by the user with the total amount.
  - Option to modify the quantity or delete an item.
  - Form for placing an order.
  - User inputs must be analyzed and validated to check the format and type of data before sending it to the API.
  - Do not store the prices of items locally. Locally stored data is not secure, and the user could modify the price themselves.

- **Confirmation Page:**
  - Displays an order confirmation message, thanking the user for their order and indicating the order ID sent by the API.

## Installation

### Back end Prerequisites ###

You will need to have Node and `npm` installed locally on your machine.

### Back end Installation ###

- Clone the repo provided. 
- From the "back" folder of the project, run `npm install`. 
- Then run the server with `node server`. 
- The server should run on `localhost` with default port `3000`. 


## Built With

- [Visual Studio Code](https://code.visualstudio.com/)
- [Google Font](https://fonts.google.com/) 
- [GitHub](https://github.com/) 
- [GitHub Pages](https://pages.github.com/)
- [Render](https://render.com/)

## Author
- [@hileene](https://www.github.com/Hileene) 
- [**Portfolio**](https://portfolio-test.com)


