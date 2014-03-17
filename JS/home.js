var primer = true;
var id;
var selected  = new Array();
var copiados = new Array();

jQuery(document).ready(function($) {


	$("#atras").tooltip({
		placement:"bottom",
		title:"Atrás"
	});
	$("#nFichero").tooltip({
		placement:"bottom",
		title:"Nuevo Fichero"
	});
	$("#nCarpeta").tooltip({
		placement:"bottom",
		title:"Nueva Carptea"
	});
	$("#upload").tooltip({
		placement:"bottom",
		title:"Subir Archivos"
	});
	$("#upload").unbind('click').click(function(event) {
		$("#fileUpload").click();
	});

	$("#fileUpload").change(function(event) {
		var xhr = new XMLHttpRequest();
		// Add any event handlers here...
		var fileInput = document.getElementById('fileUpload');
		var file = fileInput.files;
		for(i=0;i<fileInput.files.length;i++)
		{
			var formData = new FormData();
			formData.append('file', fileInput.files[i]);
			$.ajax({

		       	url: "../PHP/subirArchivos.php",
				data:formData,
				processData:false,
				contentType:false,
				type:'POST',

		       	error: function()
		       	{
		        	alert("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		//alert(data);
		       		archivos("same");
		       	}
		    });
		}
	});

	$("#logout").tooltip({
		placement:"bottom",
		title:"Logout"
	});

	$("#closeMus").click(function(event) {
			$("#repMusica").animate({
				"height": "0px",
				"opacity": 0},
				500);
			$("#audio").css("display","none")
			$(this).css("display","none")
		//$("#audio").attr("src",ruta+event.target.id).attr("type","audio/mpeg");
			$("#audio")[0].pause();
	});

	$("#closePDF").click(function(event) {
		$('#modalPDF').modal('hide')
	})

	$("#closeRes").click(function(event) {
		$('#modalRes').modal('hide')
	})

	$("#closeVid").click(function(event) {
		$('#modalVideo').modal('hide')
	})

	$('#modalVideo').on('hidden.bs.modal', function (e) {
		$("#video")[0].pause();
	})

	$("#closeIMG").click(function(event) {
		$('#modalIMG').modal('hide')
	})

	$("#closeText").click(function(event) {
		$('#modalText').modal('hide')
	})

	$("#acCarp").click(function(event) {
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
		//alert(nombreCarp);
		/*
		*/
	});
	$("#acFichsdad.sads").click(function(event) {
		var nombreFich = $("#nombreFich").val().trim();
		alert(nombreFich);
	});
	$("#atras").unbind('click').click(function(event) {
		archivos(2,"");
	});
	$("#logout").click(function(event) {
		$.ajax({
	    	type: "POST",
	       	url: "PHP/logout.php",
	       	data: "",
	       	dataType: "html",
	       	error: function()
	       	{
	        	alert("error petición ajax");
	       	},
	       success: function(data)
	       	{ 
	       		alert("logout");
   				//redireccionar.
   				location.href="/";
	       	}
	    });
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