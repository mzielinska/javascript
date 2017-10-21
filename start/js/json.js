'use strict';

var jsonOsoby = {
    'osoby': [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania: [
                {nazwa: 'podroze'},
                {nazwa: 'gotowanie'}
            ]
        },
        {
            imie: 'Magda',
            nazwisko: 'Zielinska',
            wzrost: 168,
            zainteresowania: [
                {nazwa: 'pytanie'},
                {nazwa: 'sport'}
            ]
        },
        {
            imie: 'Pao',
            nazwisko: 'Gradkowska',
            wzrost: 185,
            zainteresowania: [
                {nazwa: 'fotografia'},
                {nazwa: 'sztuki wizualne'}
            ]
        }
        
    ]
}

console.log(jsonOsoby);

console.log(jsonOsoby.osoby[1].imie);

jsonOsoby.osoby.forEach(function(element, index){
    console.log(element.imie);
})