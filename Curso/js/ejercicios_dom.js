import hamburgerMenu from "./dom/menu_Hamburguesa.js"; 
import {relojDijital} from "./dom/relog.js";


const d = document,
    $clock = document.querySelector(".clock");


d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn",".panel",".menu a");

    relojDijital($clock,"#btn-clock","#btn-alarm","clock-on");
})





