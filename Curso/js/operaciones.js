
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
    Math.round(Math.random()*(601-501)+501)

//10.-evaluar si un numero es capicua
export const numCapicua = (num=undefined)=>{

    if(isNaN(num)) return "numero no valido";
    if(typeof num!="number") return "no es un numero";      //typeof devuelve el tipo de datp que es

    return (num==inverteCad(num.toString()))        //devuelve el numero en cadena de texto
     ? true
     : false;
}   

//11.-factorial de un numero
export const numFactorial = (num=undefined)=>{

    if(isNaN(num)) return "numero no valido";
    if(typeof num!="number") return "no es un numero";  
    if(num<1) return "no se puede sacar factorial de 0 o negativos";

     let factorial=1;
     for (let i = 1; i <=num; i++) 
        factorial*=i;
    
    return factorial;
}

//evalua si un numero es primo 
export const numPrimo = (num=undefined)=>{

    if(isNaN(num)) return "numero no valido";
    if(typeof num!="number") return "no es un numero";
    if(num<1) return "los numeros primos no pueden ser negativos";  

    for (let i = 2; i < 10; i++) 
        if(Number.isInteger(num/i) && i!=num)
            return false;

    return true;
}

//determina si un numero es par o impar
export const numParImpar = (num=undefined)=>{

    if(isNaN(num)) return "numero no valido";
    if(typeof num!="number") return "no es un numero";

    return (num%2==0)
     ? "par"
     : "impar";
}

//de Celsius a Fahrenheit y viceversa
export const celsiusFahrenheit = (grados=undefined,t="")=>{

    if(isNaN(grados) || typeof grados!="number") return "ingrese un NUMERO";
    if(t!='C' && t!='F') return "solo puede ingresar F o C";

    return (t==='C')
     ? `${(grados*9/5)+32}°F`
     : `${(grados-32)*5/9}°C`
}

//15.-convertir números de base binaria a decimal y viceversa
export const binDec = (num=undefined,base=undefined)=>{

    if(isNaN(num) || typeof num!="number") return "ingrese un NUMERO";
    if(base!=2 && base!=10) return "solo puede ingresar 2 o 10";
    if(base===2) num.toString().split("").forEach(e => { console.log(e);
        if(e=="3") return false;
    });

    let resultado=0;
    let cont=0;

    if(base===2)
        for (const i of num.toString().split("").reverse())
            resultado+=Math.pow(2,cont++)*parseInt(i);
            
    else{
        let arreglo="";

        while (num>=1){
            arreglo+=(num%2);
            num=Math.floor(num/2);
        }

        resultado=parseInt(inverteCad(arreglo));
    }

    return resultado;
}