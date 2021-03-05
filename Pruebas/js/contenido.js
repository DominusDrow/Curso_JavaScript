alert("Hola mundo");

function sumar() {
	
	var elem1= document.getElemntById("num1").value;
	var elem2= document.getElemntById("num2").value;
	var suma = parsInt(elem1)+parsInt(elem2);

	alert("la suma es "+suma);

}