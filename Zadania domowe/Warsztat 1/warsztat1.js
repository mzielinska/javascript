'use strict';


//function ustawTlo() {
//    
//    document.getElementById('pierwszy').style.backgroundColor = "red";
//    document.getElementById('drugi').style.backgroundColor = "yellow";
//}
//
//    var input = document.getElementsByTagName('input')[0];
//
//console.log(input);
//
//    input.onclick = ustawTlo;



function ustawTlo() {
//    document.getElementsByTagName('p')[0].style.background = 'red';
//    document.getElementsByTagName('p')[1].style.background = 'yellow';
    
    for (var i=0; i <document.getElementsByTagName('p').length; i++) {
        if( i % 2 ==0) {
            document.getElementsByTagName('p')[i].style.background = 'red';
            
        } else {
            document.getElementsByTagName('p')[i].style.background = 'yellow';
        }
    }
}

document.getElementById('przycisk').addEventListener('click', ustawTlo)

function usunTlo () {
    for (var i=0; i < document.getElementsByTagName('p').length; i++) {
           document.getElementsByTagName('p')[i].style.background = "white"; 
    }
}

document.getElementById('przycisk2').addEventListener('click', usunTlo)