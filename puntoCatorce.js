'use strict'
/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

let texto = "Hola ¿cómo estás?";
let guion = texto[0];

for (let i = 1; i < texto.length; i = i + 1){
    guion += `- ${texto[i]}`;
}