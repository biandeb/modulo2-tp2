'use strict'
/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:
Input: Hola mundo

Output: la vocal ‘o’ está en la posición 
*/

let texto = prompt("Ingrese un texto");
for (let i = 0; i < texto.length; i++) {
  let letra = texto.at(i).toLowerCase();
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    console.log(`La vocal ${letra} está en la posición ${i}`);
    break;
  }
}