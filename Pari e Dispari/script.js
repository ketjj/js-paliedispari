
/* PARI E DISPARI
-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
-Sommiamo i due numeri
-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input */



// -L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let pariDispari = prompt( 'Pari o Dispari?');

while ((pariDispari != 'pari') && (pariDispari != 'dispari')) {
   alert('Inserire solo pari o dispari')
   pariDispari = prompt( 'Pari o Dispari?');  
}
  
 console.log(pariDispari);

let userInsertNumber = prompt('Inserire un numero da 1 a 5');
 while (userInsertNumber > 5 && isNaN(userInsertNumber)){
   alert ('Inserire un numero da 1 a 5');
 }
 console.log(userInsertNumber);



//  -Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione ).

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min + 1) - min);
}

let computerNumber; 

function randomNumberWithLimit(){

  let getRdNumber;
  const limitNumbers = [1,2,3,4,5];
  
  getRdNumber = limitNumbers[getRandomNumber(0, limitNumbers.legth -1)];
  
  return getRdNumber;
  
}

 
// -Sommiamo i due numeri

