alert("Hola mundo");

function sumar() {  	 	
	
	var elem1= document.getElementById("num1").value;
	var elem2= document.getElementById("num2").value;
	var suma = parsInt(elem1)+parsInt(elem2);

	alert("la suma es "+suma);

}

let boton = document.querySelector("input[name]");


console.log(boton);
   


parseInt("3");