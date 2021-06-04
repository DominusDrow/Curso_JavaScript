
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
    if(!Number.isInteger(num) || num<0 ) return "solo numeros enteros positivos";
    if(base===2)
        for (const i of num.toString().split("")) 
            if(i!='0' && i!='1') return "solo se permiten 0s y 1s";

    let resultado=0,
    cont=0;

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

//15.-otra forma de de hacerlo
export const binDec2 = (num=undefined,base=undefined)=>{

    if(isNaN(num) || typeof num!="number") return "ingrese un NUMERO";
    if(base!=2 && base!=10) return "solo puede ingresar 2 o 10";
    if(!Number.isInteger(num) || num<0 ) return "solo numeros enteros positivos";

    return (base===2)
     ? `${num} = ${parseInt(num,2)}`    //convierte a la base que le pasemos
     : `${num} = ${num.toString(2)}`;  //lo expresa en la base especificada
}

//16.-devuelve el descuento aplicado a la canridad dada
export const descuento = (precio=undefined,descuento=undefined)=>{

    if(isNaN(precio) || typeof precio!="number") return "precio no valido";
    if(isNaN(descuento) || typeof descuento!="number") return "descuento no valido";
    if(descuento>100 || descuento<0) return "el decuento puede ser entre 0 y100%";

    return (precio*descuento)/100; 
}

//17.-dada una fecha cuantos años han pasado
export const aniosPasados = (fecha=new Date())=>{
    if(!(fecha instanceof Date)) return "no es una fecha";
    if(fecha.getFullYear()>new Date().getFullYear()) return "aun no a pasado esa fecha";
    
    return new Date().getFullYear()-fecha.getFullYear();
}

//cuenta vocales y consonantes
export const vocales = (cadena="")=>{

    if(!cadena || typeof cadena!="string") return "no ingreso una cadena";

    let vocales=0,
    consonantes=0;

    for (const i of cadena.split("")) 
        if(/a|i|u|e|o/i.test(i)) vocales++;
        else if(/\S/.test(i) && /\D/.test(i) && /\w/i.test(i)) consonantes++; //otra forma es /[bcd...]/
    
    return `vocales=${vocales}  consonantes=${consonantes}`;
}

//valida que un nombre sea valido
export const validaNom = (nombre="")=>{

    if(!nombre || typeof nombre!="string") return "no ingreso una nombre";

    return (/^[a-zñáíúéó\s]+$/ig.test(nombre))
     ? true
     : false; 
}

//validar un correo electronico
export const validarCorreo = (correo="")=>{

    if(!correo || typeof correo!="string") return "no ingreso un correo";

    return (/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo))
     ? true 
     : false;
}

//21.-devuelve un array con los numeros al cuadrado
export const arregloCuadrado = (array=undefined)=>{

    if(!(array instanceof Array) || !array.length) return "no ingreso un arreglo";

    for (let i = 0; i < array.length; i++)
        if(typeof array[i]==="number") array[i]=Math.pow(array[i],2);
        else return "el arreglo solo puede tener numeros";
    
    return array;
}

//21.-otra forma de hacerlo usando map
export const arregloCuadrado2 = (array=undefined)=>{

    if(!(array instanceof Array) || !array.length) return "no ingreso un arreglo";
    for (let i = 0; i < array.length; i++)
        if(typeof array[i]!="number") return "el arreglo solo puede tener numeros";
    
    return array.map(i=>i*i);   //map devuelve un nuevo arreglo con los cambios hechos en la funcion
}

//22.-devuelve el numero mas alto y mas bajo
export const mayorMenor = (array=undefined)=>{

    if(!(array instanceof Array) || !array.length) return "no ingreso un arreglo";

    let mayor=array[0],
     menor=array[0];

    for (const i of array){
        if(typeof i!="number") return "el arreglo solo puede tener numeros";
        if(i>mayor) mayor=i;
        if(i<menor) menor=i;
    }

    return `mayor=${mayor} y menor=${menor}`;
}

//22.-otra forma de hacerlo usnando Math.min() y Math.max()
export const mayorMenor2 = (array=undefined)=>{

    if(!(array instanceof Array) || !array.length) return "no ingreso un arreglo";
    for (const i of array)
        if(typeof i!="number") return "el arreglo solo puede tener numeros";

    return `mayor=${Math.max(...array)} y menor=${Math.min(...array)}`;
}

//23.-devuelve un objeto con los pares y imparres
export const paresImparesObj = (array=undefined)=>{

    if(!(array instanceof Array) || !array.length) return "no ingreso un arreglo";

    let pares=[],
     impares=[];

    for (const i of array) 
        if(typeof i!="number") return "el arreglo solo puede tener numeros";
        else (i%2===0)
             ? pares.push(i)
             : impares.push(i);
    
    return {pares,impares};
}

//23.-otra forma de hacerlo pero con el metodo filter
export const paresImparesObj2 = (array=undefined)=>{

    if(!(array instanceof Array) || !array.length) return "no ingreso un arreglo";
    for (const i of array) 
        if(typeof i!="number") return "el arreglo solo puede tener numeros";
    
    return {
        pares: array.filter(i=>!(i%2)), //filter filtra los elementos segun la funcion pasada
        impares: array.filter(i=>i%2) 
    };
}