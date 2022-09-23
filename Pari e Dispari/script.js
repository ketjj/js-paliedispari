
/* PARI E DISPARI
-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
-Sommiamo i due numeri
-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input */


//TODO 
/*1.Select dom Element; + content;
2. pari o dispari ?
3.generate a random comp Number;*/


// let compNumber = Math.trunc((Math.random() * 5)+1);
// console.log('Computer'+compNumber);



function calcolate(){

  let playerSelect = document.getElementById('choice').value;
  console.log('Selected type'+'='+playerSelect);

  compNumber = Math.trunc((Math.random() * 5)+1);
  console.log('Computer'+compNumber);

  let player = document.getElementById('number');
  const playerNumber = player.value;
  console.log(playerNumber);

  const totSum = Number(playerNumber) + compNumber;
  console.log('Total'+totSum);
  let isPari = '';
  if(totSum % 2 === 0){
    isPari = 'pari'
  }else{
    isPari = 'dispari'
  }
  console.log('IsPari=', isPari);

  let msg;
  if(playerSelect == isPari ){
    msg = `Ha vinto IL PLAYER!!! Il player ha selezionato: ${playerSelect} e il numero: ${playerNumber}, sommando con il numero del computer ${compNumber} ci da --> ${totSum}, che è uguale al ${playerSelect} `
  }else{
    msg = 'Ha vinto il computer'
  }
  console.log('Msg' , msg);


  document.getElementById('output-paridispari').textContent = msg;

}

