
import {numCaracteres,subCadena,cad_arreglo,repiteCadena} from "./operaciones.js";

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