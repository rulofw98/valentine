"use strict";

const tittleElement = document.querySelector('.tittle');
const buttonsContainer = document.querySelector('.buttons');
const yesButton = document.querySelector('.si');
const noButton = document.querySelector('.btn-no');
const catImg = document.querySelector('.cat-img');

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener('click',handleYesClick);
noButton.addEventListener('click',function(){
    if(play){
        noCount++;
        const imageIndex = Math.min(noCount,MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES){
            play = false;
        }
    }
});

function handleYesClick() {
    tittleElement.innerHTML = "Te amo mucho mucho";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
  }
  

function resizeYesButton(){
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = computedStyle.getPropertyValue('font-size');
    const newFontSize = parseInt(fontSize) * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(){
    const messages = [
        'No',
        'Estas segura?',
        'Amorcito, por favor',
        'No me hagas esto :(',
        'Estás rompiendo mi corazón',
        'Voy a llorar :('
    ];

    const messageIndex = Math.min(noCount,messages.length-1);
    return messages[messageIndex];
}

function changeImage(imageIndex){
    if (imageIndex === "yes") {
        catImg.src = './dist/img/cat-yes.jpg'; // Cambia la imagen según el caso "yes"
    } else {
        catImg.src = `./dist/img/cat-${imageIndex}.jpg`; // Cambia la imagen según el índice
    }
}

function updateNoButtonText(){
    noButton.innerHTML = generateMessage(noCount);
}