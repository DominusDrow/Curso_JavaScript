
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
export const inverteCad = (cadena="")=>{
    
    if(!cadena) return "cadena no valida";

    let cadInv=new String();

    for (let i=cadena.length-1; i>=0; i--)
        cadInv=cadInv+cadena.charAt(i);
    
    return cadInv;
}

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

    return (cadena===inverteCad(cadena))
     ? true
     : false;
}

//elimina cierto patron de caracteres
export const eliminaCad = (cadena="",patron="")=>{
    
    if(!cadena) return "cadena no valida";
    if(!patron) return "patron no valida";

    return cadena.replace(new RegExp(patron,"gi"),"","g");
}