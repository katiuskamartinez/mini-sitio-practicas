import hamburgerMenu from "./menu_hamburger.js";
import carritoCompras from "./seccion_uno.js";
import personaje from "./seccion_dos.js"
import contactFormValidations from "./seccion_tres.js";

document.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".hamburger",".panel",".menu a");
    personaje();
    carritoCompras();
    contactFormValidations();
});