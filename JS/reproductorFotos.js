/* Libreria que controla el reproductor de fotos */

var pictures;
var indexPic;
var abiertoPictures;

function solicitarTamanoImagen(nombreImagen)
{
	$("#imagen").attr("width","192").attr("height","192").attr("src","../images/cargando.gif");
	$.ajax({
    	type: "POST",
       	url: "PHP/tamanoImagen.php",
       	data: "fichero="+nombreImagen,
       	dataType: "html",
       	error: function()
       	{
        	alert("error petición ajax");
       	},
       success: function(data)
       	{ 
       		//Treure el timeout x comprobar en entorns reals la carrega
       		setTimeout(function(){
	       		//alert(data);
	       		var dimensions = data.split("/");
	       		var w = parseInt(dimensions[0]);
	       		var h = parseInt(dimensions[1]);
	       		//alert(h+" - "+w);
	       		do
	       		{
	       			h/=1.5;
	       			w/=1.5;
	       		}while(h>600 || w>600);
	       		//alert(ruta);
				$("#imagen").attr("src",nombreImagen);
				$("#imagen").on('load', function () {
				    $(this).attr("width",w)
							.attr("height",h);
					$(this).unbind('load');
				});
       		},1000);
       	}
	});
}

jQuery(document).ready(function($) {

	abiertoPictures =false;

	$("#closeIMG").click(function(event) {
		$('#modalIMG').modal('hide');
		abiertoPictures = false;
	});


	//cuando se abre y cierra el modal, controlamos el booleano que nos indica si esta abierto para el tema de reproducir.
	$('#modalIMG').on('show.bs.modal', function (e) {
		abiertoPictures = true;
	});
	$('#modalIMG').on('hidden.bs.modal', function (e) {
		abiertoPictures = false;
	});

	//funcion que repdroduce la siguiente cancion(si hay)
	function nextPic()
	{
		indexPic++;
		if(indexPic == pictures.length)
			indexPic = 0;
		solicitarTamanoImagen(pictures[indexPic]);
	}

	//funcion que repdroduce la anterior cancion(si hay)
	function prevPic()
	{
		indexPic--;
		if(indexPic==-1)
			indexPic = pictures.length-1;
		solicitarTamanoImagen(pictures[indexPic]);
	}

	//Funciones que controlan los botones de anterios/siguiente
	$("#butBackPic").unbind('click').click(function(event) {
		prevPic();
	});
	$("#butForPic").unbind('click').click(function(event) {
		nextPic();
	});

	$(document).keydown(function(event) {
		//console.log(event.keyCode);
		if(abiertoPictures)
		{
			switch(event.keyCode)
			{
				case 37:
					prevPic();
					break;
				case 39:
					nextPic();
					break;
			}
		}
	});

});