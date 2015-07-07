function butOnClick(target){
	iteNumeros = document.getElementById('iteNumeros');
	numeroAnterior = iteNumeros.value;
	if (target.id == "but0"){
		if (numeroAnterior != "0"){
			iteNumeros.value = numeroAnterior + "0";
		}
	}else if (target.id == "but1"){
		iteNumeros.value = numeroAnterior + "1";
	}else if (target.id == "but2"){
		iteNumeros.value = numeroAnterior + "2";
	}else if (target.id == "but3"){
		iteNumeros.value = numeroAnterior + "3";
	}else if (target.id == "but4"){
		iteNumeros.value = numeroAnterior + "4";
	}else if (target.id == "but5"){
		iteNumeros.value = numeroAnterior + "5";
	}else if (target.id == "but6"){
		iteNumeros.value = numeroAnterior + "6";
	}else if (target.id == "but7"){
		iteNumeros.value = numeroAnterior + "7";
	}else if (target.id == "but8"){
		iteNumeros.value = numeroAnterior + "8";
	}else if (target.id == "but9"){
		iteNumeros.value = numeroAnterior + "9";
	}
}