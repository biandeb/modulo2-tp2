'use strict'
/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

*/

let numero = 2;

if (isNaN(numero)){
    console.error("Lo siento, no ha ingresado un número válido")
} else if (!(numero >= 0 && numero <=10)){
    alert("Por favor, ingrese un número que esté dentro del rango establecido");
} else{
    if (numero >= 0 && numero <=2){
        console.log("Muy deficiente");
    } else if (numero <= 4){
        console.log("Insuficiente");
    } else if (numero <= 6){
        console.log("Suficiente");
    } else if (numero === 7){
        console.log("Bien");
    } else if (numero <= 9){
        console.log("Notable");
    } else{
        alert("Sobresaliente")
    }
}