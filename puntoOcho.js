'use strict'
/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/

let repenum = parseInt(prompt("Ingrese el número de repeticiones entre 1 y 50"));

if (!isNaN(repenum)) {
    if (repenum >= 1 && repenum <= 50) {
        for (let i = 0; i <= repenum; i++) {
            for (let rep = 1; rep <= i; rep++) {
                console.log(rep);
            }
            console.log("<br>");
        }
    } else {
        alert("El número ingresado no es válido");
    }
} else {
    alert("El valor es erróneo");
}