import hamburgerMenu from "./dom/menu_Hamburguesa.js"; 
import {relojDijital,alarmaDijital} from "./dom/relog.js";
import {moveBall, shortCuts} from "./dom/teclas.js";
import countdown from "./dom/countdown.js";
import {scrollTop} from "./dom/scrollBottom.js";
import darkMode from "./dom/darkMode.js";
import resposiveJs from "./dom/responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn",".panel",".menu a");

    relojDijital(".clock","#btn-clock","#btn-clock-off","clock-on");
    alarmaDijital("/Curso/src/sonido-de-alarma.mp3","#btn-alarm","#btn-alarm-off");

    countdown(new Date(2021,11,25,0),"Countdown","JO, JO, JO, JO, JO");

    scrollTop(".btn-scroll");

    darkMode(".btn-dark-mode","dark-mode");

    resposiveJs(
        "youtube",
        "(min-with: 1024px)",
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<a href="https://youtu.be/6IwUl-4pAzc">Ver video</a>`
    )
})

//los eventos de teclado deben desencadenarse directamente del archivo padre
d.addEventListener("keydown", (e) => {
    shortCuts(e);
    moveBall(e,".ball",".event-keys");
    
})



