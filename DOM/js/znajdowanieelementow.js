'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var link = document.getElementsByClassName('link');
console.log(link);

var linkiPoTagu = document.getElementsByTagName('p');
console.log(linkiPoTagu);

var wszystkielinki = document.querySelectorAll('.link');
console.log(wszystkielinki);


var pierwszylink = document.querySelector('.link');
console.log(pierwszylink);


wszystkielinki.forEach(function(link, index){
    console.log(link.outerHTML)
})

wszystkielinki.forEach(function(link, index){
    console.log(link.innerHTML)
})

console.log('---------------')
var elementParent = document.getElementById("parFirst").parentNode;
console.log(elementParent)


console.log('-----------------------')

console.log( document.getElementById( "parFirst" ).children );
console.log( document.getElementById( "parFirst" ).childNodes );
console.log( document.getElementById( "parFirst" ).childNodes[1] );
console.log( document.getElementById( "parFirst" ).firstChild );
console.log( document.getElementById( "parFirst" ).lastChild );