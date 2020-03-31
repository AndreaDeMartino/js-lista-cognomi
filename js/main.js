// Creazione Array pre-esistente
var surnameList = ['Bianchi','Rossi','Duzioni','Balsano','Verdi'];

// Assegnazione flag per ciclo
var checkSurname = true;

// Start ciclo
while (checkSurname){
  // Richiesta cognome
  var surname = prompt('Inserisci il tuo cognome');
  // Verifica Coerenza cognome
  if ((isNaN(surname)) && (surname !== '') && (surname !== null)){
    // Trasformo prima lettera in maiuscolo
    surname = (surname[0].toUpperCase()) + (surname.slice(1))
    // Aggiungo cognome all'array
    surnameList.push(surname); 
    // Visualizzo la posizione del cognome nell'array
    alert('Complimenti sig. ' + surname + ', in questo momento è il ' + surnameList.indexOf(surname) + '° della lista.');
    // Ottengo e visualizzo la lista ordinata alfabeticamente in modo crescente
    var orderedlist = surnameList.sort();
    alert('Ecco a lei la lista ordinata: ' + orderedlist + '.');
    console.log(orderedlist);
    
  }
  // Esco dal ciclo se il cognome digitato non è coerente
  else{
    alert('Il cognome digitato non valido, arrivederci.');
    checkSurname = false;
  } 
}
