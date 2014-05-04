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
		title:"Nueva Carptea"
	});
	$("#upload").tooltip({
		placement:"bottom",
		title:"Subir Archivos"
	});

	$("#logout").tooltip({
	placement:"bottom",
	title:"Logout"
	});

	/* Eventos de click par subir archivo, y detectar los archivos subidos */

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
				xhrFields: {
					onprogress: function (progress) {
			        // calculate upload progress
			        var percentage = Math.floor((progress.total / progress.totalSize) * 100);
			        // log upload progress to console
			        console.log('progress', percentage);
			        if (percentage === 100) {
			          console.log('DONE!');
			        }
			      }
				},
		       	error: function()
		       	{
		        	alert("error petición ajax");
		       	},
		       success: function(data)
		       	{ 
		       		console.log(data);
		       		gestionArchivos.archivos("same");
		       	}
		    });
		}
	});

	//Controlamos el click en el boton atras del menu.
	$("#atras").unbind('click').click(function(event) {
		//alert(gestionArchivos.historial);
		//alert(gestionArchivos.usRuta);
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

});