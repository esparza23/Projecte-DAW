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
			var name = event.target.id.replace("span-","");
			//alert(name);
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

			if(utilidadesMenu.selected.length > 1)
				$("#butCambiarNom").children().addClass("disabled");
			else
				$("#butCambiarNom").children().removeClass("disabled");

			if(utilidadesMenu.copiados.length == 0)
				$("#butPegar").children().addClass("disabled");
			else
				$("#butPegar").children().removeClass("disabled");
			
			return false;
		}
	},
	clickDescargar : function()
	{
		//Plantear el ajax, y cuando vuelva....descargar
		utilidadesMenu.descargaMenu(selected);
	},
	clickCopia : function() 
	{
		utilidadesMenu.rutaCopy = gestionArchivos.ruta;
		utilidadesMenu.copiados = utilidadesMenu.selected;
		//alert(copiados);
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
		if(!$("#butCambiarNom").children().hasClass("disabled"))
		{
			//alert("cambiare el nom a #span-"+selected[0]);
			$('span[id="span-'+utilidadesMenu.selected[0]+'"]').empty();
			$('span[id="span-'+utilidadesMenu.selected[0]+'"]').append
			(
				$(document.createElement("input"))
					.attr("id","textNom")
					.attr("type","text")
					.attr("placeholder","Nuevo nombre")
			)
			$('#textNom').focus();
			$('#textNom').focusout(function(event) {
				//alert("cambiare el nom a "+$('#textNom').val());
				$(this).remove();
				$('span[id="span-'+utilidadesMenu.selected[0]+'"]').text("canviooooo");
			});

		}
	},
	clickEliminar : function(event) 
	{
		//Esto habra que llamarlo cuando clickemos a borrar...
		//alert(utilidadesMenu.id);
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
		//alert(archivos);
		$.ajax({
			type: "POST",
		   	url: "PHP/creaDescarga.php",
		   	data: "archivos="+JSON.stringify(archivos)+"&ajax=ajax",
		   	dataType: "html",
		   	error: function()
		   	{
		    	alert("error petición ajax");
		   	},
		   success: function(data)
		   	{ 
		   		console.log(data);
				//alert("Crear Carpeta");
				$("#desc").attr("href",data);
				$("#desc")[0].click();
		   	}
		});
	},
	pasteMenu : function (id,rutaCopy)
	{
		//alert(id);
		$.ajax({
	    	type: "POST",
	       	url: "PHP/copiarArchivos.php",
	       	data: "nombreFich="+id.replace("/","")+"&rutaCopy="+rutaCopy+"&ajax=ajax",
	       	dataType: "html",
	       	error: function()
	       	{
	        	alert("error petición ajax");
	       	},
	       success: function(data)
	       	{ 
	       		//alert(data);
	       		if(data == "NO")
	       		{
	       			utilidades.mensaje("#mensajes","<strong>ERROR!</strong> No puedes copiar una carpeta dentro de si misma.");
			    }
				else
					gestionArchivos.archivos("same");
	       	}
	    });
	},
	deleteMenu : function(id)
	{
		if(id.indexOf("/")!=-1)
		{
			console.log("Es Carpeta");
			$.ajax({
		    	type: "POST",
		       	url: "PHP/borraCarpeta.php",
		       	data: "nombreCarp="+id.replace("/","")+"&ajax=ajax",
		       	dataType: "html",
		       	error: function()
		       	{
		        	alert("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		console.log(data);
					//alert("Crear Carpeta");
					gestionArchivos.archivos("same");
		       	}
		    });
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
		        	alert("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		console.log(data);
					//alert("Crear Carpeta");
					gestionArchivos.archivos("same");
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