/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 3
Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (i = pets.length - 1; i >= 0; i--) {
  console.log(pets[i]);
}

/* ESERCIZIO 4
Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let singlePet = pets.shift();

pets.push(singlePet);

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

function getRandomPlate() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let randomPlate = "";
  for (let i = 0; i < 7; i++) {
    if (i <= 1 || i > 4) {
      randomPlate += chars.charAt(Math.floor(Math.random() * chars.length));
    } else randomPlate += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return randomPlate;
}
for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = getRandomPlate();
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let myOutput;
const newCar = {
  brand: "Fiat",
  model: "Nonconoscoimodelli",
  color: "purple",
  trims: ["style", "allure", "r-line"],
};

cars.push(newCar);

for (i = 0; i < cars.length; i++) {
  myOutput = cars[i].trims.pop();
  console.log("Elemento eliminato: " + myOutput);
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
let firstLetter;
for (i = 0; i < cars.length; i++) {
  firstLetter = cars[i].color.charAt(0);
  if (firstLetter.toUpperCase === "B") {
    console.log("Fizz");
  } else console.log("Buzz");
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
i = 0; //Lo azzero poichè l'ho usato in precedenza
while (i < numericArray.length) {
  if (numericArray[i] === 32) {
    console.log(numericArray[i]);
    break;
  } else console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
let myIndex;
const charactersIndex = [];

for (i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i].toUpperCase()) {
    case "A":
      charactersIndex.push(1);
      break;
    case "B":
      charactersIndex.push(2);
      break;
    case "C":
      charactersIndex.push(3);
      break;
    case "D":
      charactersIndex.push(4);
      break;
    case "E":
      charactersIndex.push(5);
      break;
    case "F":
      charactersIndex.push(6);
      break;
    case "G":
      charactersIndex.push(7);
      break;
    case "H":
      charactersIndex.push(8);
      break;
    case "I":
      charactersIndex.push(9);
      break;
    case "L":
      charactersIndex.push(10);
      break;
    case "M":
      charactersIndex.push(11);
      break;
    case "N":
      charactersIndex.push(12);
      break;
    case "O":
      charactersIndex.push(13);
      break;
    case "P":
      charactersIndex.push(14);
      break;
    case "Q":
      charactersIndex.push(15);
      break;
    case "R":
      charactersIndex.push(16);
      break;
    case "S":
      charactersIndex.push(17);
      break;
    case "T":
      charactersIndex.push(18);
      break;
    case "U":
      charactersIndex.push(19);
      break;
    case "V":
      charactersIndex.push(20);
      break;
    case "Z":
      charactersIndex.push(21);
      break;
    default:
      charactersIndex.push("LETTERA NON DELL'ALFABETO ITALIANO!");
  }
}
console.log(charactersIndex);
