function init() {
	var random=Math.floor(Math.random() * (3));
	switch (random) {
		case 0:
			window.location.replace("H.html");
			break;
		case 1:
			window.location.replace("G.html");
			break;
		case 2:
			window.location.replace("J.html");
			break;
		case 3:
			window.location.replace("L.html");
			break;
		default:
			break;

	}
	
}

function avanzar(ids) {
	document.getElementById(ids).removeAttribute("hidden");
	document.getElementById(ids-1).setAttribute("hidden","");
	
}

function comprobar(resultado,ids) {
	
	if (resultado=='correcto') {
		
		document.getElementById("incorrecto"+(ids-2)).setAttribute("hidden","");
		document.getElementById("correcto_"+(ids-1)).style="border-color:green;border-width: 0.5rem;";
		document.getElementById("responder"+(ids-2)).removeAttribute("hidden");
	}
	if (resultado=='incorrecto') {
	document.getElementById("incorrecto"+(ids-1)).removeAttribute("hidden");
		document.getElementById("responder"+(ids-2)).setAttribute("hidden","");
		document.getElementById("correcto_"+(ids-1)).style="";
	}
}


