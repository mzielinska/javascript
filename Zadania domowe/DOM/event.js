'use strict';

var secondLink = document.getElementsByTagName('a')[1];

function alarm(event) {
    event.preventDefault();
    alert('Kliknieto w link');
    
}
secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a')[2];

thirdLink.addEventListener('click', alarm);


function klikHeader() {
    console.log('Kliknales w header');
}

document.getElementsByTagName('header')[0].addEventListener('click', klikHeader);

function klikH1(e) {
    console.log('Kliknales w h1');
}

document.getElementsByTagName('h1')[0].addEventListener('click', function(e){
    console.log('Kliknales w h1');  
});