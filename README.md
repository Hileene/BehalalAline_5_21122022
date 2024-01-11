# Construisez un site e-commerce en JavScript

<p align="center">
  <img src="/front/images/readme-banner.png" alt="Bannière Agence La Panthère">
</p>

*Projet #5 : Formation Développeur Web [OpenClassrooms](https://openclassrooms.com/fr/paths/717-developpeur-web)*

[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
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

- Créer un plan de test pour une application
- Gérer des événements JavaScript
- Interagir avec un web service avec JavaScript
- Valider des données issues de sources externes

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

## Auteur
- [@hileene](https://www.github.com/Hileene) 
- [**Portfolio**](https://portfolio-test.com)

---

## ENGLISH VERSION


### Back end Prerequisites ###

You will need to have Node and `npm` installed locally on your machine.

### Back end Installation ###

Clone this repo. From the "back" folder of the project, run `npm install`. You 
can then run the server with `node server`. 
The server should run on `localhost` with default port `3000`. If the
server runs on another port for any reason, this is printed to the
console when the server starts, e.g. `Listening on port 3001`.