var spanMayusc=document.querySelector(".invisible");
//-------------------------------------------------------------------------------------

var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var textoRecibido = document.querySelector("#txt-received");

//-------------------------------------------------------------------------------------
btnEncriptar.addEventListener("click", function(){
	var texto = document.getElementById("text-input").value;

	if(!verificar(texto)){
		textoRecibido.value = encriptar(texto);
		spanMayusc.classList.add("invisible");
	}else{
		spanMayusc.classList.remove("invisible");
	}
	
});

btnDesencriptar.addEventListener("click", function(){
	var texto = document.getElementById("text-input").value;

	if(!verificar(texto)){
		textoRecibido.value = desencriptar(texto);
		spanMayusc.classList.add("invisible");
		console.log(spanMayusc);
	}else{
		spanMayusc.classList.remove("invisible");
	}
});
//-------------------------------------------------------------------------------------

function encriptar(texto){
	var e = texto.replace(/e/gi, 'enter');
	var i = e.replace(/i/gi, 'imes');
	var a = i.replace(/a/gi, 'ai');
	var o = a.replace(/o/gi, 'ober');
	var u = o.replace(/u/gi, 'ufat');

	return u;
}

function desencriptar(texto){
	var e = texto.replace(/enter/gi, 'e');
	var i = e.replace(/imes/gi, 'i');
	var a = i.replace(/ai/gi, 'a');
	var o = a.replace(/ober/gi, 'o');
	var u = o.replace(/ufat/gi, 'u');

	return u;
}


//------------------------------------------------------------------------


function verificar(text) {
  let bool = false;
  const acentos = ['á','é','í','ó','ú','Á','É','Í','Ó','Ú'];
  for(let letra of text){
  	for(let caracter of acentos){
  	if(letra !== " "){
     if( letra.valueOf().toUpperCase() === letra.valueOf() || letra.valueOf() === caracter.valueOf()){
          bool = true;
          break;
      }
    }
  }
  }
  return bool;
}

//-------------------------------------------------------------------------------------
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/