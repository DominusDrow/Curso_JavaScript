
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