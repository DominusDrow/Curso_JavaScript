

export const Pi= Math.PI;


export function saludo(nombre){
    console.log(`Hola ${nombre}`);
}


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

//solo se puede tener una funcion por default
export default function aaaa(){
    console.log("aaaaa");   
}
//solo las funciones y clases se pueden exportar
//por default directamente 