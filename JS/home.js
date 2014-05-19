var application = 
{
	caracteresProhibidos : new Array(".","#","(",")","/","@"),
	extensionesFichero : new Array("txt","js","c","cpp","css","h","html","java","php","sql","xml"),

	clickCierraPDF : function()
	{
		$('#modalPDF').modal('hide')
	},
	clickCierraRes : function()
	{
		$('#modalRes').modal('hide')
	},
	clickCierraCarga : function()
	{
		$('#modalCarga').modal('hide')
	},
	crearCarpeta : function()
	{
		var nombreCarp = $("#nombreCarp").val().trim();
		if(nombreCarp=="")
			nombreCarp="Nueva Carpeta";
		else if(nombreCarp.indexOf(".")!=-1 || nombreCarp.indexOf("#")!=-1 || nombreCarp.indexOf("(")!=-1 ||
		nombreCarp.indexOf(")")!=-1 || nombreCarp.indexOf("/")!=-1 || nombreCarp.indexOf("@")!=-1)
			utilidades.mensaje("#mensajesCarpeta","El nombre no puede tener ninguno de los siguientes carácteres: . # ( ) / @.");
		else
		{
			$.ajax({
		    	type: "POST",
		       	url: "PHP/nuevaCarpeta.php",
		       	data: "nombreCarp="+nombreCarp+"&ajax=ajax",
		       	dataType: "html",
		       	error: function()
		       	{
		        	console.log("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		console.log(data);
					//console.log("Crear Carpeta");
					gestionArchivos.archivos("same");
					$('#modalNuevaCarpeta').modal('hide');
					barraLateral.cogeInfo();
		       	}
		    });
		}
	},
	crearFichero : function()
	{
		var nombreFich = $("#nombreFich").val().trim();
		if(nombreFich=="")
			nombreFich="Nueva fichero";
		if(nombreFich.indexOf("#")!=-1 || nombreFich.indexOf("(")!=-1 ||
		nombreFich.indexOf(")")!=-1 || nombreFich.indexOf("/")!=-1 || nombreFich.indexOf("@")!=-1)
			utilidades.mensaje("#mensajesFichero","El nombre no puede tener ninguno de los siguientes carácteres: # ( ) / @.");
		else if(nombreFich.indexOf(".")!=nombreFich.lastIndexOf("."))
			utilidades.mensaje("#mensajesFichero","El nombre solo puede contener un punto.");
		else
		{
			var ext = nombreFich.slice(nombreFich.indexOf(".")+1,nombreFich.length);
			var nombre = nombreFich.slice(0,nombreFich.indexOf("."));
			if(application.extensionesFichero.indexOf(ext)==-1)
				utilidades.mensaje("#mensajesFichero","No puedes crear un archivo con esta extension.");
			else
			{
				$.ajax({
			    	type: "POST",
			       	url: "PHP/nuevoFichero.php",
			       	data: "nombre="+nombre+"&ext="+ext+"&ajax=ajax",
			       	dataType: "html",
			       	error: function()
			       	{
			        	console.log("error petición ajax");
			       	},
			       success: function(data)
			       	{ 
			       		console.log(data);
						gestionArchivos.archivos("same");
						$('#modalNuevoFichero').modal('hide');
						barraLateral.cogeInfo();
			       	}
			    });
			}
		}
	},
	compartirCarpeta : function()
	{
		var nombreUs = $("#nombreUs").val().trim();
		if(nombreUs=="")
			utilidades.mensaje("#mensajesCompartir","Debes introducir un nombre de usuario.");
		else
		{
			//console.log(nombreUs);
			$.ajax({
		    	type: "POST",
		       	url: "PHP/compCarpeta.php",
		       	data: "nombre="+nombreUs+"&ajax=ajax",
		       	dataType: "html",
		       	error: function( jqXHR,textStatus, errorThrown)
		       	{
		        	console.log("error petición ajax "+ errorThrown+ " - "+textStatus);
		       	},
		       success: function(data)
		       	{ 
		       		switch(data)
		       		{
		       			case "1":
		       				utilidades.mensaje("#mensajesCompartir","No puedes compartir una carpeta contigo.");
		       				break;
		       			case "2":
		       				utilidades.mensaje("#mensajesCompartir","El usuario introducido no tiene cuenta de SaveCloud.");
		       				break;
		       			case "3":
		       				utilidades.mensaje("#mensajesCompartir","Ya compartes la carpeta con este usuario.");
		       				break;
		       			default:
		       				console.log(data);
		       				break;
		       		}
		       	}
		    });
		}
	}
}
var primer = true;
jQuery(document).ready(function($) {




	$(function(){
	    $('#fitx').slimScroll({
			height:"450px",
			width:"95%",
		    color: '#000',
		    size: '10px',
		    railVisible: true,
		    railColor: '#beb6be',
		    railOpacity: 1
	    });
	});

	$("#closePDF").click(application.clickCierraPDF);

	$("#closeRes").click(application.clickCierraRes);

	$("#closeCarga").click(application.clickCierraCarga);

	$("#acCarp").unbind('click').click(application.crearCarpeta);

	$("#acFich").unbind('click').click(application.crearFichero);

	$("#acComp").unbind('click').click(application.compartirCarpeta);

	/* menu izq slider */
	$("#menu-tab").click(function(event) {
		if($("#jQ-menu").css("opacity")==0)
		{
			$("#jQ-menu").animate({
				"width": "300px",
				"opacity":1
			}, 1000);
		}
		else
		{
			$("#jQ-menu").animate({
				"width": "0%",
				"opacity":0
			}, 1000);
		}
	});

	$(window).resize(function() {
	 	if($(window).width()>=992)
	 	{
	 		$("#jQ-menu").css("width","20%").css("opacity","1");
	 	}
	 	else
	 	{
	 		$("#jQ-menu").css("width","0").css("opacity","0");
	 	}

	 	if($(window).width()>=1121)
	 	{
	 		$(function(){
	 			$('#fitx').slimScroll({destroy: true});
			    $('#fitx').slimScroll({
					height:"450px",
					width:"95%",
				    color: '#000',
				    size: '10px',
				    railVisible: true,
				    railColor: '#beb6be',
				    railOpacity: 1
			    });
			});
	 	}
	 	else if($(window).width()<1121 &&  $(window).width()>=678)
	 	{
	 		$(function(){
	 			$('#fitx').slimScroll({destroy: true});
			    $('#fitx').slimScroll({
					height:"360px",
					width:"95%",
				    color: '#000',
				    size: '10px',
				    railVisible: true,
				    railColor: '#beb6be',
				    railOpacity: 1
			    });
			});
	 	}
	 	else if($(window).width()<678  )
	 	{
	 		$(function(){
	 			$('#fitx').slimScroll({destroy: true});
			    $('#fitx').slimScroll({
					height:"300px",
					width:"95%",
				    color: '#000',
				    size: '10px',
				    railVisible: true,
				    railColor: '#beb6be',
				    railOpacity: 1
			    });
			});
	 	}

	});

});