/* PALIDROMA
-Chiedere all’utente di inserire una parola
-Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input */



let msg = document.getElementById('output-palindroma');

document.getElementById('btn_verify').addEventListener('click', function(){

  let insertedWord = document.getElementById('parola-inserita').value;
  const reversed = insertedWord.split('').reverse().join('');
  if(insertedWord === reversed){
    return msg.textContent= `la parola "${insertedWord}" è palindroma`
  } else{
    return msg.textContent = `la parola "${insertedWord}" non lo è palindroma`
  }
});


