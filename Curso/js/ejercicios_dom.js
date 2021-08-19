import hamburgerMenu from "./dom/menu_Hamburguesa.js"; 
import {relojDijital,alarmaDijital} from "./dom/relog.js";
import {moveBall, shortCuts} from "./dom/teclas.js";
import countdown from "./dom/countdown.js";
import {scrollTop} from "./dom/scrollBottom.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn",".panel",".menu a");

    relojDijital(".clock","#btn-clock","#btn-clock-off","clock-on");
    alarmaDijital("/Curso/src/sonido-de-alarma.mp3","#btn-alarm","#btn-alarm-off");

    countdown(new Date(2021,11,25,0),"Countdown","JO, JO, JO, JO, JO");

    scrollTop(".btn-scroll");
})

//los eventos de teclado deben desencadenarse directamente del archivo padre
d.addEventListener("keydown", (e) => {
    shortCuts(e);
    moveBall(e,".ball",".event-keys");
    
})



