// console.log('Test');


const celleLato = 10;

const celleTotali = celleLato ** 2; // celleLato alla seconda che è uguale a scrivere celleLato x celleLato

console.log(celleLato, celleTotali)

const playButtonElement = document.getElementById('game__button');
console.log(playButtonElement)

const grigliaElement = document.querySelector('.griglia');
console.log(grigliaElement);

playButtonElement.addEventListener ('click' , function() {

    for (let i = 0; i < celleTotali; i++ ) {

        let numeroIncremento = i + 1; //per far partire da 1 e arrivare a 100, senza questo passaggio partirebbe da 0 e si fermerebbe a 99

        // console.log(numeroIncremento);
        let creazioneDiv = `<div class="cella" > ${numeroIncremento} </div>`;
        console.log(creazioneDiv)

        grigliaElement.innerHTML += creazioneDiv;
        

    }

})