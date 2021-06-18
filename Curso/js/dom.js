

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
console.log(document.doctype);      //para obtener el tipo de decomento (version)
console.log(document.charset);      //obtener la etiqueta del lenguaje
console.log(document.title);
console.log(document.links);    
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);  //obtener las hojas de estilo
console.log(document.scripts);      //obtener los archivos javascript
//document.write("<h2>Hola soy dinamico xd</h2>");    //escribe dinamicamente en el document (mala)
console.log("\n");




//NODOS 

//los mas importantes son los nodos de tipo elemento y  los de tipo texto 
//Node.ELEMENT_NODE Y Node.ELEMENT_TEXT

//metodos obsoletos 
console.log(document.getElementsByTagName("li")); //resive cualquier etiqueta (li, head, figure...)
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));  //la propiedad name

//metodos por los que han sido remplazados
console.log(document.querySelector("input[name='nombre']"));    //# para id y . para clases
console.log(document.querySelectorAll("a"));    //para seleccionar todos, el anterior solo uno

// sigue teniendo mejor rendimiento que querySelector
console.log(document.getElementById("menu"));

//los NodeList y HTMLCollection comparten algunos elementos con los arreglos
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(e => console.log(e));
console.log(document.querySelectorAll(".card")[2]); //se puede usar la notacion de arreglos

console.log(document.querySelectorAll("#menu li")); //trae solo las li dentro de menu



//ATRIBUTOS

//los atributos son los id, class, href, lang , etc....

//se puede acceder atravez de la notacion del punto
console.log(document.documentElement.lang);
console.log(document.querySelector(".link-dom").href);      //devuelve toda la direccion

//lo correcto es utilizar los metodos que devuelven el atributo absoluto
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").getAttribute("href"));  //devuelve direccion absoluta

//tambien se pueden cambiar los atrubutos dinamicamente

//notacion del punto
document.documentElement.lang="es";
console.log(document.documentElement.lang);

//con metodo setAtribute
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.getAttribute("lang"));     

//tambien podemos crear Data-Attributes
document.getElementById("texto").setAttribute("Data-ej","hola xd");
console.log(document.querySelector("#texto"));

//pra consultar Data-Attributes con la notacion del punto
console.log(document.getElementById("texto").dataset);      //devuelve un map con todos
console.log(document.getElementById("texto").dataset.ej);   //acceder a uno en particular

//podemos guardar elementos del DOM en variables
//pueden ser const ya que son similares a objetos (nodos)
//es buena practica declararlos con $
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM);

//se pueden hacer operaciones basicas y mayor legibilidad
console.log($linkDOM.hasAttribute("class"));

console.log(document.querySelector("#texto").hasAttribute("Data-ej"));
document.querySelector("#texto").removeAttribute("data-ej");
console.log(document.querySelector("#texto").hasAttribute("Data-ej"));

//podemos hacer que el enlace se abra en otra pestaña
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");    //buena practica por seguridad

//cambiar el enlace 
$linkDOM.setAttribute("href","http://youtube.com");
console.log("\n");



//Estilos y variables CSS

//se puede acceder con los metodos
console.log($linkDOM.getAttribute("style"));

//pero en el caso de propiedades CSS es mejor acceder con el punto
console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);    //lo marca en rgb
console.log($linkDOM.style.color);

//tambien se puede acceder a sus propiedades CSS desde window
console.log(getComputedStyle($linkDOM));    //las devuelve en forma de map
console.log(getComputedStyle($linkDOM).color);  //una en especifico

//podemos establecer propiedeades CSS dinamicamente 

//con metodos 
$linkDOM.style.setProperty("text-decoration","none");   //quita el remarcado
$linkDOM.style.setProperty("display","block");  //lo pone en una linea independiente

//con notacion de punto
$linkDOM.style.width = "50%";     //que ancho abarca
$linkDOM.style.textAlign = "center";  
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "1rem";

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
 $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);   

$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor;
console.log("\n");



//Clases CSS

const $card = document.querySelector(".card");
console.log($card);

//para acceder a una clases hay dos metodos
console.log($card.className);       //devuelve unicamente los nombres de las clases
console.log($card.classList);       //devuelve una lista con todas las clases de la etiqueta

//podemos añadir, remover y comprobar clases en la lista
console.log("card",$card.classList.contains("card"));   //devuelve si/no si esta la clase
console.log("rotate-45",$card.classList.contains("rotate-45"));  

$card.classList.add("rotate-45");       //añadimos una clase previamente creada
console.log("rotate-45",$card.classList.contains("rotate-45"));  

$card.classList.remove("rotate-45");       //removemos la clase
console.log("rotate-45",$card.classList.contains("rotate-45"));  

//el metodo si tiene la clase la quita, si no , la pone
console.log("opacity-80",$card.classList.contains("opacity-80"));  
$card.classList.toggle("opacity-80")
console.log("opacity-80",$card.classList.contains("opacity-80"));  

//repalce remplaza una clase por otra
$card.classList.replace("opacity-80","rotate-45");  //primero el que se remplazara
console.log("rotate-45",$card.classList.contains("rotate-45"));  
console.log("opacity-80",$card.classList.contains("opacity-80"));  

//todos estos metodos pueden recibir mas de un parametro (menos el replace)
$card.classList.remove("card","rotate-45");
console.log($card.className); 
$card.classList.add("sepia","card")
console.log($card.className); 
$card.classList.toggle("sepia");
console.log($card.className); 
console.log("\n");


//TEXTO Y HTML

const $texthtml = document.getElementById("texto");

let text = `
    <p>
    El modelo de Objetos del Documento (<b><i>DOM </i></b>) es una API para
    documentos HTML y XML.
    </p>
    <p>
    Este proveé una representación estructural del documento, permitiendo
    modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
    <mark> El DOM no es parte de la especificacion de JavaScript, es una API 
    para los navegadores </mark>
    </p>
`;

//innerText nos permite ingresar solo texto aunque esta obsoleto
$texthtml.innerText=text;

//este es el oficial para insertar texto
$texthtml.textContent=text;                 //no respeta identacion ni saltos de linea

//innerHTML resive directamente codigo de etiquetas y remplaza el CONTENIDO del elemento
$texthtml.innerHTML=text;

//outerHTML remplaza directamente el elemento por lo que le pasemos
$texthtml.outerHTML=text;





