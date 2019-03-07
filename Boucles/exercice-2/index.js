// Je crée plusieurs tableaux dont un qui contient plusieurs valeurs
var tab = [6, 5, 1, 4, 5, 6, 7, 97, 9, 75, 11, 12, 13, 14, 15];
var tab1 = [];
var tab2 = [];
var tab3 = [];

// J'ajoute cent valeurs prises au hasard en utilisant la fonction Math.random()
for (let i = 0; i < 100; i++) {
  var randomNum = Math.floor(Math.random() * 50);
  tab.push(randomNum);
}
console.log(tab);

// Je parcours le tableau pour trouver la valeur maximale
var maxi = tab[0];
for (let i = 0; i < tab.length; i++) {
  if (tab[i] > maxi) {
    maxi = tab[i];
  }
}
// Je parcours le tableau pour trouver la valeur minimale
var mini = tab[0];
for (let i = 0; i < tab.length; i++) {
  if (tab[i] < mini) {
    mini = tab[i];
  }
}

// Tri de tab1 dans l'ordre croissant
for (let i = 0; i < tab1.length; i++) {
  for (let j = 0; j < tab1.length; j++) {
    if (tab1[i] < tab1[j]) {
      let temporaire = tab1[i];
      tab1[i] = tab1[j];
      tab1[j] = temporaire;
    }
  }
}

// Tri de tab2 dans l'ordre croissant
for (let i = 0; i < tab2.length; i++) {
  for (let j = 0; j < tab2.length; j++) {
    if (tab2[i] < tab2[j]) {
      let temporaire = tab2[i];
      tab2[i] = tab2[j];
      tab2[j] = temporaire;
    }
  }
}
