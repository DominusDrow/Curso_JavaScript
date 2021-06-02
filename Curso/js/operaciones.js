
//solo se puede tener una funcion por default
export default function aaaa(){
    console.log("aaaaa");   
}
//solo las funciones y clases se pueden exportar
//por default directamente 


function circulo(radio){
    return Pi*Math.pow(radio,2);
}

function cuadrado(lado){
    return lado*lado;
}

export const figuras = {
    circulo,
    cuadrado
}




//EJERCICIOS BASICOS


//ejercicio devuelve el num de caracteres
export function numCaracteres(cadena){

    return (!isNaN(cadena.length))
        ? "numero de caracteres: "+cadena.length
        : "no es una cadena";
}

//devuelve el texto recortado indicado
export function subCadena(cadena,num){

    return (!isNaN(cadena.length))
        ? "subcadena: "+cadena.slice(0,num)
        : "no hay subcadenas"; 
}

//devuelve un arreglo con las palabras
export function cad_arreglo(cadena,separador){

    return (!isNaN(cadena.length))
        ? cadena.split(separador)
        : "no es una cadena";
}

//devuelve la cadena repetida n veces
export function repiteCadena(cadena,n){

    return (!isNaN(cadena.length))
        ? cadena.repeat(n)
        : "no es una cadena";
}

//invierte cadenas de texto
export const inverteCad = (cadena="")=>  
    (!cadena)
     ? "cadena no valida"
     : cadena.split("").reverse().join(""); 


//cuenta las veces que se repite
export const cuentaCad = (cadena="",coincidencia="")=>{
    
    if(!cadena) return "cadena no valida";
    if(!coincidencia) return "coincidencia no valida";

    let contador=0;

    for (const i of cadena.split(" "))
        if(i===coincidencia) contador++;

    return contador;
}

//comprueba que es un palindromo
export const palindromo = (cadena="")=>{
    
    if(!cadena) return "cadena no valida";

    let cad=cadena.toUpperCase();
    return (cad===inverteCad(cad))
     ? true
     : false;
}
 
//elimina cierto patron de caracteres
export const eliminaCad = (cadena="",patron="")=>{
    
    if(!cadena) return "cadena no valida";
    if(!patron) return "patron no valida";

    return cadena.replace(new RegExp(patron,"gi"),"");
}

//9.-numero aleatorio entre 501-600
export const numAleatorio = ()=>
    Math.random()*(601-501)+501

//10.-evaluar si un numero es capicua
export const numCapicua = (num=undefined)=>{

    if(isNaN(num)) return "numero no valido";

    return (num==inverteCad(""+num))
     ? true
     : false;
}   

//11.-factorial de un numero
export const numFactorial = (num=undefined)=>{

    if(isNaN(num)) return "numero no valido";

     let factorial=1;
     for (let i = 1; i <=num; i++) 
        factorial*=i;
    
    return factorial;
}