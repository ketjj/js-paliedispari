
/* PARI E DISPARI
-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
-Sommiamo i due numeri
-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input */


//Definisco qui le funzioni che userò in seguito

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min + 1) + min);
}

function isEven(number){
 if ( number % 2 === 0)
  return true; 
 else 
  return false;
}


// -L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let pariDispari = prompt( 'Pari o Dispari?');

while ((pariDispari.toLowerCase() != 'pari') && (pariDispari.toLowerCase() != 'dispari')) {
  alert('Inserire solo pari o dispari')
  pariDispari = prompt( 'Pari o Dispari?');  
}
  

let userInsertNumber = prompt('Inserire un numero da 1 a 5');
 while (userInsertNumber > 5 || isNaN(userInsertNumber)){
   alert ('Inserire un numero da 1 a 5');
   userInsertNumber = prompt('Inserire un numero da 1 a 5');
 }

userInsertNumber = parseInt(userInsertNumber);
console.log('User\'s choice:' + pariDispari);
console.log("User Input " + userInsertNumber);


//  -Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione ).


let computerNumber = getRandomNumber (1,5)

console.log("Computer Input " + computerNumber);

// Sommiamo i due numeri

const totSum = userInsertNumber + computerNumber;
console.log('Somma 2 input: ' + totSum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

const even = isEven(totSum);
console.log("Somma è pari? " + even);


// Dichiariamo chi ha vinto.


let result = document.getElementById('result');

if ((pariDispari.toLowerCase() === 'pari') && (even === true)){
  result.innerHTML = 'Hai vinto!';
} else if((pariDispari.toLowerCase() === 'dispari') && (even === false)){
  result.innerHTML = 'Hai vinto!';
} else{
  result.innerHTML = 'Hai perso!';
}




