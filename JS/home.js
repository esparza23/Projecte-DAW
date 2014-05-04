var applicaction = 
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
	crearCarpeta : function()
	{
		var nombreCarp = $("#nombreCarp").val().trim();
		if(nombreCarp=="")
			nombreCarp="Nueva Carpeta";
		if(nombreCarp.indexOf(".")!=-1 || nombreCarp.indexOf("#")!=-1 || nombreCarp.indexOf("(")!=-1 ||
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
		        	alert("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		console.log(data);
					//alert("Crear Carpeta");
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
			nombreFich="Nueva Carpeta";
		if(nombreFich.indexOf("#")!=-1 || nombreFich.indexOf("(")!=-1 ||
		nombreFich.indexOf(")")!=-1 || nombreFich.indexOf("/")!=-1 || nombreFich.indexOf("@")!=-1)
			utilidades.mensaje("#mensajesFichero","El nombre no puede tener ninguno de los siguientes carácteres: . # ( ) / @.");
		if(nombreFich.indexOf(".")!=nombreFich.lastIndexOf("."))
			utilidades.mensaje("#mensajesFichero","El nombre solo puede contener un punto.");
		else
		{
			var ext = nombreFich.slice(nombreFich.indexOf(".")+1,nombreFich.length);
			var nombre = nombreFich.slice(0,nombreFich.indexOf("."));
			if(applicaction.extensionesFichero.indexOf(ext)==-1)
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
			        	alert("error petición ajax");
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
	}
}
var primer = true;
jQuery(document).ready(function($) {

	/*
	$("#back3").css("background-position","200% 0%");
	$("#back2").css("background-position","200% 0%");
	$("#back1").css("background-position","200% 0%");
	*/
	/*
	$( "#back3" ).animate({
	  'background-position-x': '105%',
	  'background-position-y': '0%'
		}, 'linear', function() {
			
	});
	$( "#back2" ).animate({
	  'background-position-x': '200%',
	  'background-position-y': '0%'
		}, 'linear', function() {
			
	});
	$( "#back1" ).animate({
	  'background-position-x': '300%',
	  'background-position-y': '0%'
		}, 'linear', function() {
			
	});
	*/

	$("#closePDF").click(applicaction.clickCierraPDF);

	$("#closeRes").click(applicaction.clickCierraRes);

	$("#acCarp").unbind('click').click(applicaction.crearCarpeta);

	$("#acFich").unbind('click').click(applicaction.crearFichero);

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
	});

});