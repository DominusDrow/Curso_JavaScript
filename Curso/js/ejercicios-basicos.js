
import {Pelicula} from "./operaciones.js";
/*
let cad = prompt("ingrese una cadena");
let num = prompt("dijitos de la subcadena:");

let persona ={
    nombre:"alfredo",
    apellido:"vaquez"
}


console.log(numCaracteres(cad));
console.log(subCadena(cad,num));
console.log(cad_arreglo(cad," "));
console.log(repiteCadena(cad,num));
console.log(inverteCad(cad));
console.log(cuentaCad(cad,"hola"));
console.log(palindromo(cad));
console.log(eliminaCad(cad,"hola"));
console.log(numAleatorio());
console.log(numCapicua(2002));
console.log(numFactorial(5));
console.log(numPrimo(89));
console.log(numParImpar(88));
console.log(celsiusFahrenheit(2,"C"));
console.log(binDec(100,2)); 
console.log(descuento(1000,80));
console.log(aniosPasados(new Date(1984,4,23)));
console.log(binDec2(10,10));
console.log(vocales("hola mundo"));
console.log(validaNom("ALfredo Omar vasquez"));
console.log(arregloCuadrado([3,2,6]));
console.log(mayorMenor([2,3,42,-2]));
console.log(paresImparesObj([3,2,4]));
console.log(arregloCuadrado2([2,3,4]));
console.log(mayorMenor2([2,3,42,-2]));
console.log(paresImparesObj2([3,2,4]));
console.log(numOredenados([7,4,10,50,1]));
console.log(eliminaDupli(["x", 10, "x", 2, "10", 10, true, true]));
console.log(promedioNums([9,8,7,6,5,4,3,2,1,0]));
console.log(promedioNums2([9,8,7,6,5,4,3,2,1,0]));*/

const peli1 = {
    id:"as8932223",
    titulo:"chuky",
    director:"tarantino",
    estreno:1999,
    pais:["USA"],
    generos:["Drama","Horror"],
    calificacion:9
},
 peli2 = {
    id:"as8932623",
    titulo:"La monja",
    director:"don nadie",
    estreno:2019,
    pais:["USA","Mexico"],
    generos:["Drama","Horror","History"],
    calificacion:1
 },
 peli3 = {
    id:"Ze8932623",
    titulo:"Rapidos y furisos",
    director:"unitilmeno",
    estreno:2000,
    pais:["USA","Mexico","Japon"],
    generos:["Drama","History"],
    calificacion:6
 }

const peliculas = [peli1,peli2,peli3];

for (let i of peliculas) 
    i = new Pelicula(i);


