'use strict'
/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto = "hola"
let textoInvertido = "";
for (let i = texto.lenght -1; i >= 0; i--){
    textoInvertido += texto[i];
  }
  console.log(textoInvertido);
