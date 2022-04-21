/* PALIDROMA
-Chiedere all’utente di inserire una parola
-Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input */


document.getElementById('btn_verify').addEventListener('click', initVerifica);

function initVerifica(){
 const insertWord = document.getElementById('parola-inserita').value;
 const turnInsertWord = turnWord(insertWord);
//  console.log (turnWord(insertWord));

 let outputResult;
  if( insertWord === turnInsertWord){
    outputResult = `La parola <em> ${insertWord} </em> è <strong>palindroma</strong>`;
  }else{
    outputResult = `La parola <em> ${insertWord} </em> non è <strong>palindroma</strong>`;
  }

  document.getElementById('output-palindroma').innerHTML = outputResult;
}

function turnWord(str){
  let turnedWord ='';

  for(let i = str.length -1; i >= 0; i--){
    turnedWord += str[i];
  }
  
  return turnedWord;
}