import hamburgerMenu from "./dom/menu_Hamburguesa.js"; 
import {relojDijital,alarmaDijital} from "./dom/relog.js";
import teclas from "./dom/teclas.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn",".panel",".menu a");

    relojDijital(".clock","#btn-clock","#btn-clock-off","clock-on");
    alarmaDijital("/Curso/src/sonido-de-alarma.mp3","#btn-alarm","#btn-alarm-off");

    teclas(".ball");

})





