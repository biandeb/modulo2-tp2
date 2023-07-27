'use strict'
/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let numero;
let suma = 0;

while(true){
    numero = prompt(parseint("Ingrese un número"));
    if (numero === null){
        break;
    }
    
    if (isNaN(numero)){
        alert("Lo siento, no ha ingresado un número");
        continue;
    }

    suma = suma + numero;
}
console.log(suma);