// je génère un nombre aléatoire
function generateur(min, max) {
  var number = Math.floor(Math.random() * (max - min + 1));
  return number;
}

var random = generateur(0, 1000); // On définit la valeur minimale et la valeur maximale
console.log(random);

// l'utilisateur insère un chiffre
const userFirstName = prompt('Saisissez votre nom');
const userNumber = prompt('Saisissez un nombre entier');

if (number + '' === userNumber) {
  console.log('Vous avez gagné !');
} else if (chiffre < userNumber < 100) {
  console.log('Le nombre est largement plus petit');
} else if (chiffre > userNumber > 100) {
  console.log('Le nombre est largement plus grand');
}

if ('triche' === userNumber) {
  console.log(number);
}
