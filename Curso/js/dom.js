

//ejemplo de una API
let texto = "hi I´m your friend  Alfredo";

const hablar = texto => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//hablar(texto);


//INTRODUCION

console.log("************Elementos del documento************");
console.log(window);    //nuestro objeto global del cual cuelgan document alet promt etc...
console.log(document);  //el arbol del DOM en el cual estan todos los elementos de la pagina
console.log(document.body);
console.log(document.head);
console.log(document.documentElement);  //para obtener la etiqueta html
console.log(document.doctype);      //para obtener el tipo de elemento
console.log(document.charset);      //obtener la etiqueta del lenguaje
console.log(document.title);
console.log(document.links);    
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);  //obtener las hojas de estilo
console.log(document.scripts);      //obtener los archivos javascript
document.write("<h2>Hola soy dinamico xd</h2>");    //escribe dinamicamente en el document


