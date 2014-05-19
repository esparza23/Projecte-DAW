/* Libreria que controla el reproductor de fotos */

var reproductorFotos = 
{
	pictures : null,
	indexPic : null,
	abierto : null,
	rutaFoto : null,

	abrir  : function(rutaFoto,nom)		//funcion que abre el reproductor de fotos
	{
		reproductorFotos.indexPic = reproductorFotos.pictures.indexOf(rutaFoto+nom);
		reproductorFotos.solicitarTamanoImagen(rutaFoto+nom);
		reproductorFotos.rutaFoto = rutaFoto;
	},
	solicitarTamanoImagen : function(nombreImagen)		//funcion que solicita el tamaño de una imagen
	{
		$("#nameImg").children().text(nombreImagen.replace(reproductorFotos.rutaFoto,""));
		$("#imagen").attr("width","192").attr("height","192").attr("src","../images/cargando.gif");
		$.ajax({
	    	type: "POST",
	       	url: "PHP/tamanoImagen.php",
	       	data: "fichero="+nombreImagen+"&ajax=ajax",
	       	dataType: "html",
	       	error: function()
	       	{
	        	console.log("error petición ajax");
	       	},
	       success: function(data)
	       	{ 
	       		console.log(data);
	       		//Treure el timeout x comprobar en entorns reals la carrega
	       		setTimeout(function(){
		       		//console.log(data);
		       		var dimensions = data.split("/");
		       		var w = parseInt(dimensions[0]);
		       		var h = parseInt(dimensions[1]);
		       		//console.log(h+" - "+w);
		       		do
		       		{
		       			h/=1.5;
		       			w/=1.5;
		       		}while(h>600 || w>600);
		       		//console.log(reproductorFotos.rutaFoto);
		       		$("#nameImg").children().text(nombreImagen.replace(reproductorFotos.rutaFoto,""));
					$("#imagen").attr("src",nombreImagen);
					$("#imagen").on('load', function () {
					    $(this).attr("width",w).attr("height",h);
						$(this).unbind('load');
					});
					reproductorFotos.abierto = true;
	       		},1000);
	       	}
		});
	},
	cerrar : function()		//funcion que cierra el reproductor de fotos
	{
		$('#modalIMG').modal('hide');
		reproductorFotos.abierto = false;
	},
	nextPic : function()	//funcion que abre la siguiente fotos
	{
		reproductorFotos.indexPic++;
		if(reproductorFotos.indexPic == reproductorFotos.pictures.length)
			reproductorFotos.indexPic = 0;
		reproductorFotos.solicitarTamanoImagen(reproductorFotos.pictures[reproductorFotos.indexPic].replace("../",""));
	},
	prevPic : function()	//funcion que abre la foto anterior
	{
		reproductorFotos.indexPic--;
		if(reproductorFotos.indexPic==-1)
			reproductorFotos.indexPic = reproductorFotos.pictures.length-1;
		reproductorFotos.solicitarTamanoImagen(reproductorFotos.pictures[reproductorFotos.indexPic].replace("../",""));
	},
	controlaTeclado  : function()	//funcion que controla el reproductor de fotos con el teclado
	{
		//console.log(event.keyCode);
		if(reproductorFotos.abierto)
		{
			switch(event.keyCode)
			{
				case 37:
					reproductorFotos.prevPic();
					break;
				case 39:
					reproductorFotos.nextPic();
					break;
			}
		}
	}
}


//Acciones que haremos cuando se cargue el documento
jQuery(document).ready(function($) {

	//evento que controla el boton cerrar del reproductor de video
	$("#closeIMG").click(reproductorFotos.cerrar);

	//Funciones que controlan los botones de anterios/siguiente
	$("#butBackPic").unbind('click').click(reproductorFotos.prevPic);
	$("#butForPic").unbind('click').click(reproductorFotos.nextPic);

	//funcion que controla el reproductor mediante el teclado
	$(document).keydown(reproductorFotos.controlaTeclado);

});