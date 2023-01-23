
//PARA HACER UNA SUMA************************************************************
function sumar() {  	 	
	
	let num1 = document.getElementById("num1").value,
		num2 = document.getElementById("num2").value;

	alert(`la suma es ${parseInt(num1)+parseInt(num2)}`);
}

const $botonS = document.querySelector("input[name='boton']");
$botonS.onclick = sumar;


//PARA HACER EL BOTON DE MENU************************************************************

//variables del DOM que se utilizaran
const $btnMenu = document.querySelector(".btn-menu"),
	$articles = document.querySelector(".articulos"),
	$aside = document.querySelector(".aside");

//comprobar el estado de la ventana al recargarse
document.addEventListener("DOMContentLoaded", e =>{
	if(window.innerWidth<700){
		$btnMenu.classList.add("btn-menu-is-active");
		$articles.classList.add("articulos-size");
		$aside.classList.replace("aside","aside-off");
	}
})

//comprobar cada que se redimencione la ventana
window.addEventListener("resize", e => {
	
	if(window.innerWidth<700){
		$btnMenu.classList.add("btn-menu-is-active");
		$articles.classList.add("articulos-size");
		$aside.classList.replace("aside","aside-off");
	}
	else{
		$btnMenu.classList.remove("btn-menu-is-active");
		$articles.classList.remove("articulos-size");
		$aside.classList.replace("aside-off","aside");
	}
})

//desplegar el nuevo menu
document.addEventListener("click", e => {
	if(e.target.matches(".btn-menu")){
		$aside.classList.toggle("aside-on");
	}
})




