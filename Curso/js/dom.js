

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
//document.write("<h2>Hola soy dinamico xd</h2>");    //escribe dinamicamente en el document
console.log("\n");

//NODOS 

//los mas importantes son los nodos de tipo elemento y  los de tipo texto 
//Node.ELEMENT_NODE Y Node.ELEMENT_TEXT

//metodos obsoletos 
console.log(document.getElementsByTagName("li")); //resive cualquier etiqueta (li, head, figure...)
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

//metodos por los que han sido remplazados
console.log(document.querySelector("#name"));    //# para id y . para clases
console.log(document.querySelectorAll("a"));    //para seleccionar todos, el anterior solo uno

// sigue teniendo mejor rendimiento que querySelector
console.log(document.getElementById("menu"));

//los NodeList y HTMLCollection comparten algunos elementos con los arreglos
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(e => console.log(e));
console.log(document.querySelectorAll(".card")[2]); //se puede usar la notacion de arreglos

console.log(document.querySelectorAll("#menu li")); //trae solo las li dentro de menu


