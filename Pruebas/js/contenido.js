alert("Hola mundo");

function sumar() {  	 	
	
	let num1 = document.getElementById("num1").value,
		num2 = document.getElementById("num2").value;

	let suma = parseInt(num1)+parseInt(num2);

	alert(`la suma es ${suma}`);
}

const $boton = document.querySelector("input[name='boton']");

$boton.addEventListener("click",sumar);


