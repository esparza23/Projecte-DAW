function pasteMenu(id)
{
	alert(copiados);
}

function deleteMenu(id)
{
	if(id.indexOf("/")!=-1)
	{
		alert("Es Carpeta");
		$.ajax({
	    	type: "POST",
	       	url: "PHP/borraCarpeta.php",
	       	data: "nombreCarp="+id.replace("/",""),
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
	else
	{
		alert("es Arxiu");
		$.ajax({
	    	type: "POST",
	       	url: "PHP/borraFichero.php",
	       	data: "nombreFich="+id,
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
}