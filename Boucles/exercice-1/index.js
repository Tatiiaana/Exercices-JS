var tab = [];

// Ajout de 10 valeurs dans une boucle for
for (i = 0; i < 10; i++) {
  tab.push(i);
}

console.table(tab);

// Ajout de 20 valeurs dans une boucle while
var j = 0;
while (j <= 19) {
  j++;
  tab.push(j);
}
console.table(tab);

// Ajout de 30 valeurs dans une boucle do...while
var j = 0;
do {
  j++;
  tab.push(j);
} while (j <= 59);

console.table(tab);

// Additionner les valeurs à partir du milieu du tableau avec 5
for (j = tab.length / 2; j < tab.length; j++) {
  tab[j] = tab[j] + 5;
}

console.table(tab);
