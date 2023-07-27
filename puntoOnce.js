'use strict'
/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let input = number(2);
let esDivisible = false;

if (input % 2 === 0){
    esDivisible = true;
    console.log(`El número ${input} es divisible en 2`)
}
if (input % 3 === 0){
    esDivisible = true;
    console.log(`El número ${input} es divisible en 3`)
}
if (input % 5 === 0){
    esDivisible = true;
    console.log(`El número ${input} es divisible en 5`)
}
if (input % 7 === 0){
    esDivisible = true;
    console.log(`El número ${input} es divisible en 7`)
}
if (!esDivisible){
    alert(`El número ${input} no es divisible en 2, 3, 5 y 7`)
}