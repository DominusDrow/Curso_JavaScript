import hamburgerMenu from "./dom/menu_Hamburguesa.js"; 
import {relojDijital,alarmaDijital} from "./dom/relog.js";
import {moveBall, shortCuts} from "./dom/teclas.js";
import countdown from "./dom/countdown.js";
import {scrollTop} from "./dom/scrollBottom.js";
import darkMode from "./dom/darkMode.js";
import resposiveJs from "./dom/responsive.js";
import responsiveTester from "./dom/responsiveTester.js";
import detectDivices from "./dom/userAgent.js";
import connection from "./dom/detectConnection.js";
import webCam from "./dom/cam.js";
import geolocation from "./dom/geolocation.js";
import searchFilter from "./dom/wordfilter.js";
import giveaway from "./dom/digitalLottery.js";
import slider from "./dom/responsiveSlider.js";
import newMenu  from "./dom/scrollspy.js";
import smartVideo from "./dom/SmartVideo.js"

const d = document;

d.addEventListener("DOMContentLoaded", () => {
    hamburgerMenu(".panel-btn",".panel",".menu a");

    relojDijital(".clock","#btn-clock","#btn-clock-off","clock-on");
    alarmaDijital("/Curso/src/sonido-de-alarma.mp3","#btn-alarm","#btn-alarm-off");

    countdown(new Date(2021,11,25,0),"Countdown","JO, JO, JO, JO, JO");

    scrollTop(".btn-scroll");

    darkMode(".btn-dark-mode","dark-mode");

    resposiveJs(
        "youtube",
        "(min-width: 1024px)",
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allowfullscreen></iframe>`,
        `<a href="https://youtu.be/6IwUl-4pAzc">Ver video</a>`
    )
    resposiveJs(
        "gmaps",
        "(min-width: 1024px)",
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2056.307505136797!2d-98.17600658149075!3d19.05122439987323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc055a9e73013%3A0x1656bb12d5450d7d!2sPuebla%2C%2072270%20Puebla%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1630709384326!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" loading="lazy"></iframe>`,
        `<a href="https://goo.gl/maps/9W1hyBu7hatqU2bG6">Ver mapa</a>`
    )

    responsiveTester("resposive-tester");

    detectDivices("userAgent");

    webCam("cam","video");

    geolocation("location");

    searchFilter("searchVar",".card");

    giveaway(".list","#lottery");

    slider(".slide", "#prev", "#next");

    newMenu(".panel", ".menu", "(min-width: 1024px)");

    smartVideo(".video");
})

//los eventos de teclado deben desencadenarse directamente del archivo padre
d.addEventListener("keydown", (e) => {
    shortCuts(e);
    moveBall(e,".ball",".event-keys");
    
})

//los eventos de conecion no se cargan junto con el documento
connection();


