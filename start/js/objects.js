'use strict';

var osoba = {
    imie: "Marcin",
    wzrost: 175,
    przedstawOsobe : function() {
        console.log(this.imie);
    }
    
}

console.log(osoba.imie);
console.log(osoba['wzrost']);

osoba.przedstawOsobe();


osoba.nazwisko = 'Potocki';

console.log(osoba);