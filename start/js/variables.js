'use-strict';

var imie = 'Magda';
var wzrost = 181;
var wiek = 28;
var wiekMagdy = 28;

console.log(imie);
console.log(wzrost);
console.log(wiek);
console.log(wiekMagdy);

function wyswietlZmienna() {
    var imie = 'Karolina';
    console.log(imie);   
}

var wyswietlWiek = function() {
    console.log(wiek);
    
}

wyswietlZmienna();
wyswietlWiek();

function mnozenie(parametr1, parametr2) {
    var wynik = parametr1 * parametr2;
    console.log('Wynik: '+ wynik);
    
    return wynik;
}

mnozenie(5, 6);
mnozenie(4, 10);

var wynikMnozenia = mnozenie(3, 5);
console.log
