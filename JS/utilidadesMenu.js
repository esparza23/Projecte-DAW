var utilidadesMenu = 
{
	copiados : new Array(),
	selected : new Array(),
	rutaCopy : null,
	id : null,

	muestra : function(event) 
	{
		if(event.which == 3)
		{
			//console.log(gestionArchivos.carpPublic);
			var name = event.target.id.replace("span-","");
			//console.log(name);
	    	if(utilidadesMenu.selected.indexOf(name)==-1)
	    	{
		    	$(' .ui-selected').removeClass('ui-selected');
		    	utilidadesMenu.selected = new Array();
		    	utilidadesMenu.selected.push(name);
		    	console.log("longitud: "+utilidadesMenu.selected.length);
		    	$('li[id="'+name+'"]').addClass('ui-widget-content ui-selected');
	    	}
			
			id = event.target.id.replace("span-","").replace("img-","");	
			$("#menuCont").css("left",event.clientX);
			$("#menuCont").css("top",event.clientY);
			$("#menuCont").css("display","block");
			$("#menuCont").animate({
				"opacity": 1},100);

			if(gestionArchivos.carpPublic == false)
			{
				$("#butCambiarNom").children().removeClass("disabled");
				$("#butCopiar").children().removeClass("disabled");
				$("#butPegar").children().removeClass("disabled");
				$("#butEliminar").children().removeClass("disabled");
				$("#butDescargar").children().removeClass("disabled");

				

				if(utilidadesMenu.selected.length > 1 || utilidadesMenu.selected[0][0]=='/')
					$("#butCambiarNom").children().addClass("disabled");
				else
					$("#butCambiarNom").children().removeClass("disabled");

				if(utilidadesMenu.copiados.length == 0)
					$("#butPegar").children().addClass("disabled");
				else
					$("#butPegar").children().removeClass("disabled");
			}
			else
			{
				$("#butCambiarNom").children().addClass("disabled");
				$("#butCopiar").children().addClass("disabled");
				$("#butPegar").children().addClass("disabled");
				$("#butEliminar").children().addClass("disabled");
				$("#butDescargar").children().addClass("disabled");
			}
			return false;
		}
	},
	clickDescargar : function()
	{
		//Plantear el ajax, y cuando vuelva....descargar
		utilidadesMenu.descargaMenu(utilidadesMenu.selected);
	},
	clickCopia : function() 
	{
		utilidadesMenu.rutaCopy = gestionArchivos.ruta;
		utilidadesMenu.copiados = utilidadesMenu.selected;
		//console.log(utilidadesMenu.copiados);
	},
	clickPegar : function(event) 
	{
		if(!$("#butPegar").children().hasClass("disabled"))
		{
			
			if(utilidadesMenu.copiados.length==0)
			{
				utilidadesMenu.pasteMenu(utilidadesMenu.id,ruta);
			}
			else
			{
				$.each(utilidadesMenu.copiados, function(index, val) {
					utilidadesMenu.pasteMenu(val,utilidadesMenu.rutaCopy);
				});
			}
		}
	},
	clickCambiarNombre : function(event) 
	{
		if(!$("#butCambiarNom").children().hasClass("disabled") )
		{
			var fichero = utilidadesMenu.selected[0];
			var nomFitx = $('span[id="span-'+utilidadesMenu.selected[0]+'"]').text();
			var ext = fichero.slice(fichero.lastIndexOf(".")+1,fichero.length);
			$('span[id="span-'+utilidadesMenu.selected[0]+'"]').empty();
			$('span[id="span-'+utilidadesMenu.selected[0]+'"]').append
			(
				$(document.createElement("input"))
					.attr("id","textNom")
					.attr("type","text")
					.css("width","80%")
					.val(fichero.replace("."+ext,""))
			)
			$('#textNom').focus();
			$('#textNom').focusout(function(event) {
				utilidadesMenu.cambiaNombre(fichero,ext,event);
			});
			$('#textNom').keypress(function(event) {
				//console.log(event.keyCode);
				switch(event.keyCode)
				{
					case 13:
						utilidadesMenu.cambiaNombre(fichero,ext,event);
						break;
				}
			});

		}
	},
	clickEliminar : function(event) 
	{
		//Esto habra que llamarlo cuando clickemos a borrar...
		//console.log(utilidadesMenu.id);
		if(utilidadesMenu.selected.length==0)
		{
			utilidadesMenu.deleteMenu(utilidadesMenu.id);
		}
		else
		{
			$.each(utilidadesMenu.selected, function(index, val) {
				utilidadesMenu.deleteMenu(val);
			});
			utilidadesMenu.selected = new Array();
		}
	},
	descargaMenu : function(archivos)
	{
		//console.log(archivos);
		$.ajax({
			type: "POST",
		   	url: "PHP/creaDescarga.php",
		   	data: "archivos="+JSON.stringify(archivos)+"&ajax=ajax",
		   	dataType: "html",
		   	error: function()
		   	{
		    	console.log("error petición ajax");
		   	},
		   success: function(data)
		   	{ 
		   		//console.log(data);
				//console.log("Crear Carpeta");
				$("#desc").attr("href",data);
				$("#desc")[0].click();
		   	}
		});
	},
	pasteMenu : function (id,rutaCopy)
	{
		//console.log(id+" - "+rutaCopy);
		var carp = 0;
		if(id[0]=='/')
			carp = 1;
		$.ajax({
	    	type: "POST",
	       	url: "PHP/copiarArchivos.php",
	       	data: "nombreFich="+id.replace("/","")+"&carp="+carp+"&rutaCopy="+rutaCopy+"&ajax=ajax",
	       	dataType: "html",
	       	error: function()
	       	{
	        	console.log("error petición ajax");
	       	},
	       success: function(data)
	       	{ 
	       		console.log(data);
	       		if(data == "NO")
	       		{
	       			utilidades.mensaje("#mensajes","<strong>ERROR!</strong> No puedes copiar una carpeta dentro de si misma.");
			    }
				else
					gestionArchivos.archivos(0,"same");
	       	}
	    });
	},
	deleteMenu : function(id)
	{
		if(id.indexOf("/")!=-1)
		{
			console.log("Es Carpeta");
			if(id=="/Fotos" || id=="/Public" || id=="/Musica" || id.indexOf('@')!=-1)
				utilidades.mensaje("#mensajes","<strong>ERROR!</strong> No puedes borrar las carpetas por defecto ni carpetas publicas de otros usuarios.");
			else
			{
				$.ajax({
			    	type: "POST",
			       	url: "PHP/borraCarpeta.php",
			       	data: "nombreCarp="+id.replace("/","")+"&ajax=ajax",
			       	dataType: "html",
			       	error: function()
			       	{
			        	console.log("error petición ajax");
			       	},
			       success: function(data)
			       	{ 
			       		console.log(data);
						gestionArchivos.archivos(0,"same");
						barraLateral.cogeInfo();
			       	}
			    });
			}
		}
		else
		{
			console.log("es Arxiu");
			$.ajax({
		    	type: "POST",
		       	url: "PHP/borraFichero.php",
		       	data: "nombreFich="+id+"&ajax=ajax",
		       	dataType: "html",
		       	error: function()
		       	{
		        	console.log("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		console.log(data);
					//console.log("Crear Carpeta");
					gestionArchivos.archivos(0,"same");
		       	}
		    });
		}
	},
	cambiaNombre : function(fichero,ext,event)
	{

		//console.log("cambiare el nom a "+$('#textNom').val());
		var nom = $('#textNom').val();
		if(nom=="")
			nom="Nuevo fichero";
		if(nom.indexOf("#")!=-1 || nom.indexOf("(")!=-1 ||
		nom.indexOf(")")!=-1 || nom.indexOf("/")!=-1 || nom.indexOf("@")!=-1)
		{
			utilidades.mensaje("#mensajes","El nombre no puede tener ninguno de los siguientes carácteres: . # ( ) / @.");
			$(this).remove();
			$('span[id="span-'+utilidadesMenu.selected[0]+'"]').text(nomFitx);

		}
		else if(nom.indexOf(".")!=nom.lastIndexOf("."))
		{
			utilidades.mensaje("#mensajes","El nombre solo puede contener un punto.");
			$(this).remove();
			$('span[id="span-'+utilidadesMenu.selected[0]+'"]').text(nomFitx);

		}
		else
		{
			$(this).remove();
			$.ajax({
		    	type: "POST",
		       	url: "PHP/cambiarNombre.php",
		       	data: "fichero="+fichero+"&nombre="+nom+"&ext="+ext+"&ajax=ajax",
		       	dataType: "html",
		       	error: function()
		       	{
		        	console.log("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		//console.log(data);
					gestionArchivos.archivos(0,"same");
		       	}
		    });
		}
	}
};
jQuery(document).ready(function($) {
	   
	document.oncontextmenu = function() {
    	return false
   	}

   	jQuery(document).click(function(event) {
   		$("#menuCont").css("display","none");
		$("#menuCont").animate({
			"opacity": 0},100);
   	});

   	//Funcion para mostrar el menu en pantalla
	$("#fitx").mousedown(utilidadesMenu.muestra);

	//Funcion para descargar los ficheros seleccionados
	$("#butDescargar").unbind('click').click(utilidadesMenu.clickDescargar);
 
	//Funcion para copiar los ficheros seleccionados
	$("#butCopiar").unbind('click').click(utilidadesMenu.clickCopia);

	//Funcion para pegar los ficheros seleccionados
	$("#butPegar").unbind('click').click(utilidadesMenu.clickPegar);

	//Funcion para  Cambiar el nombre al fichero
	$("#butCambiarNom").unbind('click').click(utilidadesMenu.clickCambiarNombre);

	//Funcion para eliminar los ficheros seleccionados
	$("#butEliminar").unbind('click').click(utilidadesMenu.clickEliminar);	
});