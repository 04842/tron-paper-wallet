
/* Sistema JS per generare trx paper wallet v1 */
function genera(){
  var pubkey = document.getElementById("IndirizzoPubblico").value;
  var privkey = document.getElementById("ChiavePrivata").value;
  
  if(pubkey.length<10 || privkey.length<10){
      alert('Please insert a valid public key.');
      return;
  }
  
  //Sostituisci scritte
  document.getElementById("IndirizzoPubblico").innerHTML = pubkey;
  document.getElementById("IndirizzoPubblico_testo").innerHTML = pubkey;
  document.getElementById("ChiavePrivata").innerHTML = privkey;
  document.getElementById("ChiavePrivata_testo").innerHTML = privkey;
}
