'use strict';

//petla for

for (var i = 10; i > 0; i--) {
    console.log(i);
}


//petla for each

//var imiona = ['Wojtek', 'Magda', 'Zenek' ];
//
//imiona.forEach(function (element, index) {
//               console.log("Element z Indexem" + index + " ma wartość " + element);
//               }

//petla while

var it = 0
while(it < 10) {
    console.log("It: " + it);
    it++
}

//petla do while

var j = 20;

do {
    console.log('Petla do...while ' + j);
    j++;
} while (j <10);


//przewanie break

var a = 0;

while (a<10) {
    console.log('break: ' + a);
    a++;
    if (a == 5) {
        break;
    }
}

// przerwanie - continue

for (var i = 0; i < 10; i++) {
    if(i == 5) {
        continue;
    }
    console.log('Continue: ' + i );
}


for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
        if(j==2) {
            break;
        }
        console.log('i ='+ i + ' , j =' + j );
    }
}