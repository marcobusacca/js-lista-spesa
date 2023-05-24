"use strict";

// ARRAY LISTA DELLA SPESA
let shoppingList = [
    "Olio extravergine d'oliva",
    "Farina",
    "Lievito",
    "Sale",
    "Zucchero",
    "Caffè",
    "Uova",
    "Carne",
    "Pesce",
    "Pasta",
]

// DICHIARAZIONE CONSTANTE HTML SHOPPING ORDERED LIST
const shoppingListContainer = document.getElementById('shopping_list');

// DICHIARAZIONE VARIABILE CONTATORE INDICI ELEMENTI DELL'ARRAY SHOPPING_LIST
let shoppingListCounter = 0;


// CICLO WHILE CHE SCORRE TUTTI GLI ELEMENTI DELL'ARRAY SHOPPING_LIST
while(shoppingListCounter < shoppingList.length){

    // DICHIARAZIONE VARIABILE CONTENENTE ELEMENTI ARRAY DI OGNI ITERAZIONE
    let shoppingListElement = shoppingList[shoppingListCounter];

    // DICHIARAZIONE VARIABILE CONTENENTE TAG HTML "LI"
    let shoppingListItem = document.createElement('li');

    // INSERIMENTO CONTENUTO VARIABILE SHOPPING_LIST_ELEMENT ALL'INTERNO DELLA VARIABILE SHOPPING_LIST_ITEM
    shoppingListItem.innerHTML = shoppingListElement;

    // INSERIMENTO CONTENUTO VARIABILE SHOPPING_LIST_ITEM ALL'INTERNO DELLA CONSTANTE SHOPPING_LIST_CONTAINER
    shoppingListContainer.append(shoppingListItem);
    
    // INCREMENTO VARIABILE CONTATORE INDICI
    shoppingListCounter++;
}