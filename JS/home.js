/*
var home = 
{
	primer : true,
	segon : function(){}
};*/
var primer = true;
var id;
var selected  = new Array();
var rutaCopy;
var copiados = new Array();
var editor;
var songsPlaying = new Array();
var ruta;

jQuery(document).ready(function($) {

	/*
	$("#back3").css("background-position","200% 0%");
	$("#back2").css("background-position","200% 0%");
	$("#back1").css("background-position","200% 0%");
	*/
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

	$("#closePDF").click(function(event) {
		$('#modalPDF').modal('hide')
	})

	$("#closeRes").click(function(event) {
		$('#modalRes').modal('hide')
	})

	$("#acCarp").unbind('click').click(function(event) {
		var nombreCarp = $("#nombreCarp").val().trim();
		if(nombreCarp=="")
			nombreCarp="Nueva Carpeta";
		if(nombreCarp.indexOf(".")!=-1 || nombreCarp.indexOf("#")!=-1 || nombreCarp.indexOf("(")!=-1 ||
		nombreCarp.indexOf(")")!=-1 || nombreCarp.indexOf("/")!=-1)
			alert("NO");//mostrar error(where?)
		else
		{
			$.ajax({
		    	type: "POST",
		       	url: "PHP/nuevaCarpeta.php",
		       	data: "nombreCarp="+nombreCarp,
		       	dataType: "html",
		       	error: function()
		       	{
		        	alert("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		alert(data);
					//alert("Crear Carpeta");
					archivos("same");
		       	}
		    });
		}
	});
	$("#acFich").unbind('click').click(function(event) {
		var nombreFich = $("#nombreFich").val().trim();
		alert(nombreFich);
	});

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


	/*Menu contextual*/


   	document.oncontextmenu = function() {
    	return false
   	}

   	jQuery(document).click(function(event) {
   		$("#menuCont").css("display","none");
		$("#menuCont").animate({
			"opacity": 0},100);
   	});

	jQuery(document).mousedown(function(event) {
		if(event.which == 3)
		{
			var name = event.target.id.replace("span-","");
			//alert(name);
	    	if(selected.indexOf(name)==-1)
	    	{
		    	$(' .ui-selected').removeClass('ui-selected');
		    	selected = new Array();
		    	selected.push(name);
		    	console.log("longitud: "+selected.length);
		    	$('li[id="'+name+'"]').addClass('ui-widget-content noDrag ui-selected');
	    	}
			
			id = event.target.id.replace("span-","").replace("img-","");	
			$("#menuCont").css("left",event.clientX);
			$("#menuCont").css("top",event.clientY);
			$("#menuCont").css("display","block");
			$("#menuCont").animate({
				"opacity": 1},100);

			if(selected.length > 1)
				$("#butCambiarNom").children().addClass("disabled");
			else
				$("#butCambiarNom").children().removeClass("disabled");

			if(copiados.length == 0)
				$("#butPegar").children().addClass("disabled");
			else
				$("#butPegar").children().removeClass("disabled");
			
			return false;
		}
	});

	/* Cdescccc...*/
	$("#butDescargar").unbind('click').click(function(event) {
		//Plantear el ajax, y cuando vuelva....descargar
		$("#desc")[0].click();
		//descargaMenu(selected);
	});
 
	/* Copiar en principio es facil...*/
	$("#butCopiar").unbind('click').click(function(event) {
		rutaCopy = ruta;
		copiados = selected;
		//alert(copiados);
	});

	/* Pegar en carpetas */
	$("#butPegar").unbind('click').click(function(event) {
		if(!$("#butPegar").children().hasClass("disabled"))
		{
			
			if(copiados.length==0)
			{
				pasteMenu(id,ruta);
			}
			else
			{
				$.each(copiados, function(index, val) {
					pasteMenu(val,rutaCopy);
				});
			}
		}
	});

	/* Cambiar el nombre al fichero....*/
	$("#butCambiarNom").unbind('click').click(function(event) {
		if(!$("#butCambiarNom").children().hasClass("disabled"))
		{
			//alert("cambiare el nom a #span-"+selected[0]);
			$('span[id="span-'+selected[0]+'"]').empty();
			$('span[id="span-'+selected[0]+'"]').append
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
				$('span[id="span-'+selected[0]+'"]').text("canviooooo");
			});

		}
	});

	$("#butEliminar").unbind('click').click(function(event) {
		//Esto habra que llamarlo cuando clickemos a borrar...
		//alert(id);
		if(selected.length==0)
		{
			deleteMenu(id);
		}
		else
		{
			$.each(selected, function(index, val) {
				deleteMenu(val);
			});
			selected = new Array();
		}
	});
});