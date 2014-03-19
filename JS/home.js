/*
var home = 
{
	primer : true,
	segon : function(){}
};*/
var primer = true;
var id;
var selected  = new Array();
var copiados = new Array();

jQuery(document).ready(function($) {

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


	/*Menu contextual*/
	/*
   	document.oncontextmenu = function() {
    	return false
   	}
   	function menuCont(e){
   		//alert("HOLA");
   		//console.log(e);
		if (navigator.appName == 'Netscape' && e.which == 3) {
			$("#menuCont").animate({
   			"opacity": 1},100);
   			return false;
		}
		else if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2) {
			$("#menuCont").animate({
   			"opacity": 1},100);
   			return false;
		return false;
		}
   	}
   	jQuery(document).unbind('click').click(function(event) {
		$("#menuCont").animate({
			"opacity": 0},100);
   	});

	jQuery(document).mousedown(function(event) {
		if(event.which == 3)
		{
			id = event.target.id.replace("span-","").replace("img-","");	
			$("#menuCont").css("left",event.clientX);
			$("#menuCont").css("top",event.clientY);
			$("#menuCont").animate({
				"opacity": 1},100);
			return false;
		}
	});

	$("#butCopiar").unbind('click').click(function(event) {
		copiados = selected;
		//alert(copiados);
	});

	$("#butPegar").unbind('click').click(function(event) {
		$.each(copiados, function(index, val) {
			alert(val);
		});
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
	});*/
});