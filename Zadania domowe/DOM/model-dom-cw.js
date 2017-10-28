'use strict';

var mainHeader = document.getElementById('main-header'); //przypisujemy naglowek strony do zmiennej

mainHeader.innerHTML = 'Tresc naglowka'; //dodajemy tresc do nagłówka

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej

link.href = 'http://akademia108.pl'; //nadpisuje atrybut href w linku

console.log(link.classList);

//link.className = 'nowa-klasa'; 

link.className += ' nowa klasa'; //dodaje klase w lnku

mainHeader.style.color = '#11aa22'; // dodaje style 