'use strict';

var imiona = ['Wojtek', 'Krystian', 'Magda']

console.log(imiona);
imiona[3] = 'Piotrek';

console.log(imiona);

var ileElementow =imiona.push('Geralt');

console.log(ileElementow);    

console.log(imiona)

var ostatniElement = imiona.pop();
console.log(imiona);
console.log(ostatniElement);

console.log('Ile elementow w tablicy ' + imiona.length);

console.log(imiona.join(' '));
console.log(imiona.reverse());
console.log(imiona.sort());