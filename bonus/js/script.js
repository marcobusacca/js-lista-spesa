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

    // DICHIARAZIONE VARIABILE CONTENENTE TAG HTML "BUTTON"
    let shoppingListCheckbox = `
        <!--Checkbox Item-->
        <div>
            <input type="checkbox" id="checkbox_${shoppingListCounter+1}">
        </div>
    `

    // INSERIMENTO CONTENUTO VARIABILE SHOPPING_LIST_ELEMENT ALL'INTERNO DELLA VARIABILE SHOPPING_LIST_ITEM
    shoppingListItem.innerHTML = shoppingListElement;

    // INSERIMENTO CLASSE ALLA VARIABILE SHOPPING_LIST_ITEM
    shoppingListItem.classList.add(`list_item_${shoppingListCounter+1}`);
    
    // INSERIMENTO CONTENUTO VARIABILE SHOPPING_LIST_ITEM ALL'INTERNO DELLA CONSTANTE SHOPPING_LIST_CONTAINER
    shoppingListContainer.append(shoppingListItem);
    
    // INSERIMENTO CONTENUTO VARIABILE SHOPPING_LIST_CHECKBOX ALL'INTERNO DELLA CONSTANTE SHOPPING_LIST_CONTAINER
    shoppingListContainer.innerHTML += (shoppingListCheckbox);

    
    // INCREMENTO VARIABILE CONTATORE INDICI
    shoppingListCounter++;
}



// DICHIARAZIONE CONSTANTI CHECKBOX BUTTON
const shoppingListButton1 = document.getElementById(`checkbox_1`);

const shoppingListButton2 = document.getElementById(`checkbox_2`);

const shoppingListButton3 = document.getElementById(`checkbox_3`);

const shoppingListButton4 = document.getElementById(`checkbox_4`);

const shoppingListButton5 = document.getElementById(`checkbox_5`);

const shoppingListButton6 = document.getElementById(`checkbox_6`);

const shoppingListButton7 = document.getElementById(`checkbox_7`);

const shoppingListButton8 = document.getElementById(`checkbox_8`);

const shoppingListButton9 = document.getElementById(`checkbox_9`);

const shoppingListButton10 = document.getElementById(`checkbox_10`);


let clickCounter1 = 0;

// CHECKBOX BUTTON 1
shoppingListButton1.addEventListener("click", function(){

    clickCounter1++;

    let shoppingListItem = document.querySelector('.list_item_1');

    if (clickCounter1 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter1 = 0;
    }
})


let clickCounter2 = 0;

// CHECKBOX BUTTON 2
shoppingListButton2.addEventListener("click", function(){

    clickCounter2++;

    let shoppingListItem = document.querySelector('.list_item_2');

    if (clickCounter2 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter2 = 0;
    }
})


let clickCounter3 = 0;

// CHECKBOX BUTTON 3
shoppingListButton3.addEventListener("click", function(){

    clickCounter3++;

    let shoppingListItem = document.querySelector('.list_item_3');

    if (clickCounter3 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter3 = 0;
    }
})


let clickCounter4 = 0;

// CHECKBOX BUTTON 4
shoppingListButton4.addEventListener("click", function(){

    clickCounter4++;

    let shoppingListItem = document.querySelector('.list_item_4');

    if (clickCounter4 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter4 = 0;
    }
})


let clickCounter5 = 0;

// CHECKBOX BUTTON 5
shoppingListButton5.addEventListener("click", function(){

    clickCounter5++;

    let shoppingListItem = document.querySelector('.list_item_5');

    if (clickCounter5 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter5 = 0;
    }
})


let clickCounter6 = 0;

// CHECKBOX BUTTON 6
shoppingListButton6.addEventListener("click", function(){

    clickCounter6++;

    let shoppingListItem = document.querySelector('.list_item_6');

    if (clickCounter6 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter6 = 0;
    }
})


let clickCounter7 = 0;

// CHECKBOX BUTTON 7
shoppingListButton7.addEventListener("click", function(){

    clickCounter7++;

    let shoppingListItem = document.querySelector('.list_item_7');

    if (clickCounter7 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter7 = 0;
    }
})


let clickCounter8 = 0;

// CHECKBOX BUTTON 8
shoppingListButton8.addEventListener("click", function(){

    clickCounter8++;

    let shoppingListItem = document.querySelector('.list_item_8');

    if (clickCounter8 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter8 = 0;
    }
})


let clickCounter9 = 0;

// CHECKBOX BUTTON 9
shoppingListButton9.addEventListener("click", function(){

    clickCounter9++;

    let shoppingListItem = document.querySelector('.list_item_9');

    if (clickCounter9 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter9 = 0;
    }
})


let clickCounter10 = 0;

// CHECKBOX BUTTON 10
shoppingListButton10.addEventListener("click", function(){

    clickCounter10++;

    let shoppingListItem = document.querySelector('.list_item_10');

    if (clickCounter10 < 2){

        shoppingListItem.classList.add('selected');

    } else{

        shoppingListItem.classList.remove('selected');

        clickCounter10 = 0;
    }
})
