/* Libreria que controla el reproductor de fotos */

var pictures;
var indexPic;

function solicitarTamanoImagen(nombreImagen)
{
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
			$("#imagen").attr("src",nombreImagen)
						.attr("width",w)
						.attr("height",h);
       	}
	});
}

jQuery(document).ready(function($) {

	var abiertoPictures = true;

	$("#closeIMG").click(function(event) {
		$('#modalIMG').modal('hide')
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