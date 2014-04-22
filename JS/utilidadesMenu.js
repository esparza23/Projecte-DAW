function pasteMenu(id,rutaCopy)
{
	//alert(id);
	$.ajax({
    	type: "POST",
       	url: "PHP/copiarArchivos.php",
       	data: "nombreFich="+id.replace("/","")+"&rutaCopy="+rutaCopy,
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
       			mensaje(" <strong>ERROR!</strong> No puedes copiar una carpeta dentro de si misma.");
		    }
			else
				archivos("same");
       	}
    });
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