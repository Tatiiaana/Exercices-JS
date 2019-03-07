// 1) Calcul du prix TTC à partir du prix HT
function calculate(prixHT) {
  var ttc = 1.2;
  return ttc * prixHT;
}

console.log(calculate(50));

// 2) Fonction qui calcule 3 puissance 4
function puissance(a, b) {
  var result = a;
  for (var i = 0; i < b - 1; i++) {
    result = result * a;
  }
  return result;
}
console.log(puissance(3, 4));

// 3) Créer une condition qui détermine si une année est bissextile ou non
function bissextile(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    alert('Cette année est bissextile');
  } else {
    alert("Cette année n/'est pas bissextile");
  }
}

bissextile();

// 4) - Créer un tableau avec des valeurs de 1 à 2020
//    - Faire une fonction qui retourne un tableau contenant les années bissextiles
var year = [];

for (let i = 1; i < 2020; i++) {
  year.push(i);
}

var tabLeapYear = [];

function leapYear() {
  for (let i = 0; i < year.length; i++) {
    if ((year[i] % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
      tabLeapYear.push(year[i]);
    }
  }
}

leapYear();

// 5) Factoriel

function factorial(num) {
  for (let i = num - 1; i > 0; i--) {
    num = num * i;
  }
  return num;
}
console.log(factorial(5));

// Calcul de l'is

function impotsSociete(ca) {
  var v;
  if (ca < 38000) {
    v = ca * 0.15;
  } else {
    v = 0.15 * 38000 + 0.25 * (ca - 38000);
  }

  return v;
}

var inputValue = document.getElementById('factorialTxtId').value;
var checkValue = isNaN(inputValue);

if (!checkValue) {
  document.getElementById('inputValueID').innerHTML = inputValue;
  var final = 1;

  while (inputValue >= 1) {
    final = final * inputValue;
    inputValue--;
  }

  document.getElementById('checkValue').innerHTML = final;
}
