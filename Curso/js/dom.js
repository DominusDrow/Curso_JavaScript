

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



//DOM traversing : recorriendo elementos del DOM

const $cards = document.querySelector(".cards");
console.log($cards);

//para acceder a todos sus hijos Elementos
console.log($cards.children);               //childNodes devuelve todos los nodos

//accedemos a un hijo en especifico con notacion de arreglo
console.log($cards.children[3]);

//podemos acceder al primero y al ultimo automaticamente
console.log("Primero",$cards.firstElementChild);      //con firstChild accedemos al primer nodo
console.log("Ultimo",$cards.lastElementChild);

//podemos acceder a los elementos hermanos
console.log("hermano arriba",$cards.previousElementSibling);   
console.log("hermano abajo",$cards.nextElementSibling);

console.log($cards.children[3].nextElementSibling);

//tambien podemos saber el padre 
console.log("padre",$cards.lastChild.parentElement);

//metodo nuevo que nos devuelve cual es la etiqueta mas cercana 
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log("\n");


//CREAR ELEMENTOS Y FRACMENTOS HTML

//se pueden crear nuevos elementos (nodos) con createElement
const $figure = document.createElement("figure"),      
    $image = document.createElement("img"),          // cualquier etiqueta valida de HTML o XML
    $figCap = document.createElement("figcaption"),
    $figCapTex = document.createTextNode("Animals");    //se pasa el texto no una etiqueta

//se tienen que agrupar los elementos antes de insertarlos
$figCap.appendChild($figCapTex);    
$image.setAttribute("src","http://placeimg.com/200/200/animals");
$image.setAttribute("alt","Animals");
$figure.appendChild($image);  
$figure.appendChild($figCap);
$cards.appendChild($figure);    //el metodo appendChild sirve para añadir un nuvo hijo como nodo

//a nuestra nueva figura se le tienen que agregar los estilos como las demas
$figure.classList.add("card");
 
//Otra manera de crear elementos dinamicamente (pero no se toman como nodos)
const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
    <img src="http://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);


//Si se quiere crear mas de UNA figura dinamicamente 
const estaciones = ["Primaver","Verano","Otoño","Inverno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");  //!!!!!No Es Buena Practica
document.body.appendChild($ul);

estaciones.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent=el;
    $ul.appendChild($li);
});

//crear varios elementos tambien se puede hacer con innerHTML
const continentes = ["America","Asia","Europa","Oceania","Africa"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");  //!!!!!No Es Buena Practica
document.body.appendChild($ul2);

continentes.forEach(el => $ul2.innerHTML+=`<li>${el}</li>`);


//Fracmentos (para hacer SOLO UNA insercion al DOM), ahorra recursos
const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Vieres"],
    $ul3 = document.createElement("ul"),
    $fracmento = document.createDocumentFragment();

document.write("<h3>Dias de la semana</h3>");  //!!!!!No Es Buena Practica
document.body.appendChild($ul3);

diasSemana.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fracmento.appendChild($li);
});

$ul3.appendChild($fracmento);   //una unica insercion en el DOM



//TEMPLATE
const $template = document.getElementById("templete-card").content,
    $fracmento2 = document.createDocumentFragment(),
    cardContend = [{
        title:"Tecnologia",
        img:"http://placeimg.com/200/200/tech"
    },
    {
        title:"Animales",
        img:"http://placeimg.com/200/200/animals"
    },
    {
        title:"Arquitectura",
        img:"http://placeimg.com/200/200/arch"
    },
    {
        title:"Gente",
        img:"http://placeimg.com/200/200/people"
    },
    {
        title:"Naturaleza",
        img:"http://placeimg.com/200/200/nature"
    }];

cardContend.forEach(el =>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent=el.title;

    let $clone = document.importNode($template,true);   //el true signigica copiar toda la estructura
    $fracmento2.appendChild($clone);    //si no lo clonas causa error AAAA
});

$cards.appendChild($fracmento2);



//MODIFICANDO ELEMENTOD (old style)
const $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);   //true indica copiar toda la estructura

$newCard.innerHTML = `
<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//para remplazar un nodo 
$cards.replaceChild($newCard,$cards.children[1]);

//para reover un nodo
$cards.removeChild($cards.firstElementChild);

setTimeout(() => {
    //para agregar antes de uno 
    $cards.insertBefore($newCard,$cards.lastElementChild);
}, 5000);

//agregar el nodo clonado
document.body.appendChild($cloneCards);



//MODIFICANDO ELEMENTOD (cool style)

const $newCard2 = document.createElement("figure");
let content = `
<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;
$newCard2.classList.add("card");

//las pasociones dadas para los elementos isnterAtyacent...
//beforebigin (hermano anterior)
//afterbegin (primer hijo)
//afterend (ultimo hijo)
//beforeend (hermano posterior)

//inserta un elemento (nodo)
$cloneCards.insertAdjacentElement("beforebegin",$newCard2);

//inserta contienido html en una posicion dada
$newCard2.insertAdjacentHTML("afterbegin",content);

//inserta contenido de texto
$newCard2.querySelector("figcaption").insertAdjacentText("afterbegin","Any");

//Metodos nativos de JQuery
const $cloneCard = $newCard.cloneNode(true);

//insertar como primer hijo
$cloneCards.prepend($cloneCard);

//como hermano anterior
$cloneCards.before($cloneCard);

//como ultimo hijo
$cloneCards.append($cloneCard);

//como hermano posterior
$cloneCards.after($cloneCard);



//MANEJADORES DE EVENTOS DOM

//las funciones que son manejadores tienen el atributo event
function HolaMundo(){
    alert("hola mundo");
    console.log(event);
} 

//para los eventos semanticos tenemso que guardar el nodo del boton 
const $boton1 = document.getElementById("evento-semantico");

//la desventaja de las eventos semanticos es que solo se puede asignar uno por elemento
//ponenmso directamante el nombre del evento a agregar
//el evento es como un atributo
$boton1.onclick = HolaMundo     //la funcion debe ir sin parentesis

//si despues se asigna otra funcion al mismo evento este cambia como una variable
$boton1.onclick = function(e){
    alert("Hola mundo con evento semantico");
    console.log(e);     //la funcion solo puede recibir un parametro y hacer referencia al propio event
}

//tambien se puede con un  MANEJADOR MULTIPLE
const $boton2 = document.getElementById("evento-multiple");

//resibe dos parametros , la clase de evento y la funcion a ejecutar
$boton2.addEventListener("click",HolaMundo);

//la ventaja que tiene es que se le pueden asignar distintas funcines a un mismo evento
$boton2.addEventListener("click",(e) => {
    alert("Hola mundo con manejador multiple");
    console.log(e);
});



//EVENTOS CON PARAMETROS Y REMOVER EVENTOS

//las funciones manejadoras de eventos SOLO pueden recibir UN parametro (evento en si)
//pero si nesesitamos pasar parametros solo envolvemos la funcion dentro de una arrow funtion

function saludarN(nombre = "Desconocido") {
    alert(`hola ${nombre}`);
    console.log(event);
}

$boton2.addEventListener("click", (e) => saludarN("Alfredo"));

//declaramos un boton dinamicamente
const $boton3 = document.createElement("button");
$boton3.textContent= "Evento con manejador multiple con remove";
document.body.insertBefore($boton3,document.body.querySelectorAll("br")[12]);

//para remover eventos las funciones manejadores deben ser declaradas
const saludoM = (nombre = "Desconocido") => {
    saludarN("Ricardo");
    $boton3.removeEventListener("dblclick",saludoM);
    $boton3.disabled = true;
}

$boton3.addEventListener("dblclick",saludoM);


 
//FLUJO DE LOS EVENTOS
const $eventosDiv = document.querySelectorAll(".eventos div");

function EventosFlujo(e) {
    console.log(`Hola desde ${this.className} el evento lo origino ${e.target.className}`);  
    //ek metodo stopPropagation hace que ya no se propague  
    e.stopPropagation();
}

$eventosDiv.forEach(div => {
    //el flujo por defecto es borbuja (false)
    //div.addEventListener("click",EventosFlujo);

    //para indicar el evento captura ponemos como tercer parametro un true
    //div.addEventListener("click",EventosFlujo,true);

    //tambien le podemos pasar un objeto con mas parametros
    div.addEventListener("click",EventosFlujo,{
        //borbuja o captura
        capture:false,
        //si re repite uno o indifinidad veces 
        once:false
    });

})



//METODOS stopPropagation y preventDefault

const $linkEvent = document.querySelector(".eventos a");

$linkEvent.addEventListener("click", (e) => {
    alert("Vas a otra pagina");
    
    //desactiva la propagacion de los eventos
    e.stopPropagation();

    //desactiva la ejecucion automatica de la accion (en caso de asincronia)
    e.preventDefault();
})



//Delegacion de eventos

//esto es util cuando haces peticiones asincrionas y no puedes
//asignar eventos a elementos que aun no existen

//creamos solo un evento click a todo el documento
document.addEventListener("click", (e) => {
    console.log("estas clickeando en: ",e.target);

    //puedes indentificar si da click en una etiqueta especifica
    if(e.target.matches(".eventosD a")){
        alert("Vas a otra pagina");
        e.preventDefault();
    }

    if(e.target.matches(".eventosD div")){
        console.log("en evento se origino en: ",e.target.className);
        //ya no es nesesario el metodo stopPropagation el evento no se propaga
    }
})


//ELEMENTOS DEL BOM

//el evento se activa cuando la ventana se redimenciona
window.addEventListener("resize", (e) => {
    console.log("===Evento resize===");
    
    //nos trae las dimenciones de la ventana
    console.log("ancho body: ",window.innerWidth);
    console.log("alto body: ",window.innerHeight);

    //nos trae las dimensiones de la pantalla
    console.log("ancho ventana: ",window.outerWidth);    
    console.log("alto ventana ",window.outerHeight);
})

//el evento se activa cuando se desplaza el scroll
window.addEventListener("scroll", (e) => {
    console.log("===Evento scroll===");
    
    //nos trae las dimenciones de la ventana
    console.log("scroll x: ",window.scrollX);
    console.log("scroll y: ",window.scrollY);

})

//el evento se activa cuando se carga el body (es buena practica)
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("===DOMContentLoaded===");
    
    //nos trae las coordenadas de donde empieza la ventana
    console.log(" x: ",window.screenX);
    console.log(" y: ",window.screenY);
})



//BOM METODOS 

let $btnOpen = document.getElementById("open-window"),
    $btnClose = document.getElementById("close-window"),
    $btnPrint = document.getElementById("print-window");

let ventana;

$btnOpen.addEventListener("click", e => {
    //se puede guardar en una variable la referencia de una ventana abierta
    ventana = window.open("http://youtube.com");
})

$btnClose.addEventListener("click", e => {
    //se puede cerrar una ventana teniendo su referencia
    ventana.close();
})

$btnPrint.addEventListener("click", e => {
    //se puede imprimir toda la pagina 
    window.print();
})


//URL, HISTORIAL Y NAVEGADOR

console.log("====Objeto URL (location)====");
console.log(window.location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(localStorage.hostname);
console.log(location.port);
console.log(location.href);     //da el link completo 
console.log(location.hash);     //para detectar parametros en el link
console.log(location.search);   //busca parametros pasados por el link
console.log(location.pathname); //la ruta relativa de la pagina
//location.reload       para recargar la pagina

console.log("====Objeto Historial (history)====");
console.log(window.history);
console.log(history.length);
//history.forward(1)        //adelanta a las siguientes paginas
//hsitory.back(2)           //regresa a las anteriores paginas
//history.go(-2)            //puede adelantar o regresar paginas

console.log("====Objeto Navegador (navigator)====");
console.log(window.navigator);
console.log(navigator.contention);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);    //si hay dispositivos conectados a la pc
console.log(navigator.mimeTypes);
console.log(navigator.onLine);      //si tenemos internet
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.userAgent);   //informacion (navagador,sistema, version, etc)

















