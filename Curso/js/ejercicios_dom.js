import hamburgerMenu from "./dom/menu_Hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn",".panel",".menu a");
})

