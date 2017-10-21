'use strict';
//odwracanie stringa

function reverseString (napis){
    
    return napis.split("").reverse().join("");
    
}

console.log(reverseString("Akademia108"));

//sortowanie stringa

console.log('-------------------------')
function reverseString (napis){
    
    return napis.split("").sort();
    
}

console.log(reverseString("Akademia108"));

//suma i iloczyn

console.log('-----------------------------------')
var tablica = [1,2,3,4,5,6];

function sumaIloczyn(tablica) {
    var suma = 0;
    var iloczyn = 1;
    tablica.forEach(function(element) {
        suma += element;
        iloczyn *= element;
        });
    console.log(suma);
    console.log(iloczyn);
}

sumaIloczyn(tablica);
