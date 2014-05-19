/*
Libreria para gestionar la pagina de admin.php
*/

var admin = 
{
	usuario : null,

	muestraUs : function()
	{
		$.ajax({
	    	type: "POST",
	       	url: "../PHP/admin.php",
	       	dataType: "html",
	       	error: function()
	       	{
	        	console.log("error petición ajax");
	       	},
	       success: function(data)
	       	{   
	       		$("#users").empty();    
	       		$("#users").append(data);
				$(".borrar").unbind('click').click(admin.confBorrar);
				$("#acDel").unbind('click').click(admin.deleteUs);
				$("#acUser").unbind('click').click(admin.nuevoUs);
	       	}
	    });
	},
	confBorrar  : function(event)
	{
		admin.usuario = $(this).attr("us");
		$("#mens").text("¿ Seguro que quieres borrar a "+admin.usuario+" ?");
	},
	deleteUs : function(event)
	{
		$.ajax({
	    	type: "POST",
	       	url: "../PHP/borraUsuario.php",
	       	data: "usuario="+admin.usuario+"&ajax=ajax",
	       	dataType: "html",
	       	error: function()
	       	{
	        	console.log("error petición ajax");
	       	},
	       success: function(data)
	       	{       
	       		admin.muestraUs();
	       	}
	    });
	},
	nuevoUs : function()
	{
		$("#emailAdmin").parent().removeClass('has-error');
		$("#passAdmin").parent().removeClass('has-error');
		$("#confPassAdmin").parent().removeClass('has-error');
	    $("#misSuccText").text("");
		$("#errorSigRed").addClass('hidden');
	    $("#misErrText").text("");

		var emailAdmin= $("#emailAdmin").val();
		var passAdmin = $("#passAdmin").val();
		var confPassAdmin = $("#confPassAdmin").val();
		if(emailAdmin.trim() == "" )
		{
			$("#emailAdmin").parent().addClass('has-error');
			utilidades.mensaje("#errorAdmin","Debes introducir el correo");
			return false;	
		}
		else if(emailAdmin.trim().indexOf('@')==-1 || emailAdmin.trim().indexOf('.')==-1)
		{
			$("#emailAdmin").parent().addClass('has-error');
			utilidades.mensaje("#errorAdmin","El correo debe contener una @ y un punto");
			return false;	
		}
		else if(passAdmin.trim() == "" )
		{
			$("#passAdmin").parent().addClass('has-error');
			utilidades.mensaje("#errorAdmin","Debes introducir una contraseña");
			return false;	
		}
		else if(passAdmin != confPassAdmin)
		{
			$("#confPassAdmin").parent().addClass('has-error');
			utilidades.mensaje("#errorAdmin","Las contraseñas deben coincidir");
			return false;
		}
		else
		{
			var admin;
			//console.log(passAdmin);
			switch($('input[name=admin]:checked').val())
			{
				case "si":
					admin=1;
					break;
				case "no":
					admin=0;
					break;
			}
			passAdmin = hex_md5(passAdmin);
			//console.log(passAdmin);
			$.ajax({
		    	type: "POST",
		       	url: "../PHP/registrar.php",
		       	data: "emailReg="+emailAdmin+"&passReg="+passAdmin+"&admin="+admin+"&ajax=ajax",
		       	dataType: "html",
		       	error: function()
		       	{
		        	console.log("error petición ajax");
		       	},
		       success: function(data)
		       	{       
		       		//console.log(data);
		       		switch(data)
		       		{
		       			case "si":
		       				utilidades.mensaje("#succAdmin","Usuario registrado! ");
		       				admin.muestraUs();
		       				break;
		       			case "no":
		       				utilidades.mensaje("#errorAdmin","Este correo ya está registrado!");
		       				break;
		       		}
		       	}
		    });
		}
	}

}