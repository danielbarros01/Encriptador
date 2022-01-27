
var btnCopy = document.querySelector("#btn-copy");
var spanCopy=document.querySelector(".invisibleCopy");

btnCopy.addEventListener("click", function(){
	var textoRecibido = document.querySelector("#txt-received");
	copiar(textoRecibido);
	spanCopy.classList.remove("invisibleCopy");
	setTimeout(function(){
		spanCopy.classList.add("invisibleCopy");
	},1000);
});

function copiar(texto){

	texto.select();
    document.execCommand('copy');

}