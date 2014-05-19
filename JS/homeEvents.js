/* Libreria donde capturaremos todos los eventos,tooltips de home.php*/

jQuery(document).ready(function($) {


	/* Tooltips de los botones de navegacion superiores*/
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
		title:"Nueva Carpeta"
	});
	$("#cCarpeta").tooltip({
		placement:"bottom",
		title:"Compartir Carpeta Pública"
	});
	$("#upload").tooltip({
		placement:"bottom",
		title:"Subir Archivos"
	});
	$("#admin").tooltip({
		placement:"bottom",
		title:"Administración de usuarios"
	});
	$("#logout").tooltip({
	placement:"bottom",
	title:"Logout"
	});

	/* Eventos de click par subir archivo, y detectar los archivos subidos */

	$('#modalCarga').on('hidden.bs.modal', function (e) {
		
	})


	$("#fileUpload").change(function(event) {

		var porcen;
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
				beforeSend: function()
				{
					console.log("antes de enviar");
					$("#modalCarga").modal("show");
				},
				xhr: function(){
					var xhr = new window.XMLHttpRequest();
					//Upload progress
					xhr.upload.addEventListener("progress", function(evt){
						if (evt.lengthComputable ) {
							var percentComplete = evt.loaded / evt.total;
							//Do something with upload progress
							porcen = percentComplete;
							$("#cargaTotal").css("width",percentComplete*100+"%");
						}
					}, false);
					//Download progress
					/*
					xhr.addEventListener("progress", function(evt){
						if (evt.lengthComputable) {
							var percentComplete = evt.loaded / evt.total;
							//Do something with download progress
							console.log(percentComplete);
						}
					}, false);
					*/
					return xhr;
				},
		       	error: function()
		       	{
		        	console.log("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		//$("#cargaParcial").css("width","0%");
		       		console.log("acabo - "+porcen);
		       		console.log(data);
		       		gestionArchivos.archivos("same");
		       	}
		    });
		}
	});

	//Controlamos el click en el boton atras del menu.
	$("#atras").unbind('click').click(function(event) {
		//console.log(gestionArchivos.historial);
		//console.log(gestionArchivos.usRuta);
		if(gestionArchivos.historial[gestionArchivos.historial.length-2].indexOf('@')==-1)
			gestionArchivos.archivos(2,"");
		else 
			gestionArchivos.archivos(5,gestionArchivos.historial[gestionArchivos.historial.length-2]);
	});

	//Controlamos el click en el boton logout del menu
	$("#logout").click(function(event) {
		$.ajax({
	    	type: "POST",
	       	url: "PHP/logout.php",
	       	data: "",
	       	dataType: "html",
	       	error: function()
	       	{
	        	console.log("error petición ajax");
	       	},
	       success: function(data)
	       	{ 
	       		console.log("logout");
   				//redireccionar.
   				location.href="/";
	       	}
	    });
	});

});