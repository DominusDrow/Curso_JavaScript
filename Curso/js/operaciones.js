
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
        : "no es una cadena" 
}


//devuelve el texto recortado indicado
