jQuery(document).ready(function($) {
	$(function() {
        $('#colIz').perfectScrollbar({
		  wheelSpeed: 20,
		  wheelPropagation: true,
		  minScrollbarLength: 20,
		  suppressScrollX:true
		})
    });
    $('#logSig').on('hidden.bs.modal', function (e) {
		$("#emailLog").val("");
		$("#passLog").val("");
		$("#emailReg").val("");
		$("#passReg").val("");
		$("#passRegRep").val("");
	})
});

function getXMLHttp()
{
  var xmlHttp

  try
  {
    //Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    //Internet Explorer
    try
    {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e)
      {
        alert("Your browser does not support AJAX!")
        return false;
      }
    }
  }
  return xmlHttp;
}

function login()
{
	$("#succSigRed").addClass('hidden');
    $("#misSuccText").text("");
	$("#errorSigRed").addClass('hidden');
    $("#misErrText").text("");
    
	var emailLog= $("#emailLog").val();
	var passLog = $("#passLog").val();
	$.ajax({
    	type: "POST",
       	url: "PHP/login.php",
       	data: "emailLog="+emailLog+"&passLog="+passLog,
       	dataType: "html",
       	error: function()
       	{
        	alert("error petición ajax");
       	},
       success: function(data)
       	{       
       		switch(data)
       		{
       			case "si":
       				$("#succSigRed").removeClass('hidden');
       				$("#misSuccText").text("Usuario Logueado");
       				//redireccionar.
       				location.href="Home.php";
       				break;
       			case "no":
       				$("#errorSigRed").removeClass('hidden');
       				$("#misErrText").text("Este usuario y contraseña no existen!");
       				break;
       		}
       	}
    });
}

function registrar()
{
	$("#succSigRed").addClass('hidden');
    $("#misSuccText").text("");
	$("#errorSigRed").addClass('hidden');
    $("#misErrText").text("");

	var emailReg= $("#emailReg").val();
	var passReg = $("#passReg").val();
	var passRegRep = $("#passRegRep").val();
	//alert(passReg+" "+passRegRep);
	if(passReg != passRegRep)
	{

		$("#errorSigRed").removeClass('hidden');
		$("#misErrText").text("Las contraseñas no coinciden.");
		return false;
	}
	else
	{
		$.ajax({
	    	type: "POST",
	       	url: "PHP/registrar.php",
	       	data: "emailReg="+emailReg+"&passReg="+passReg,
	       	dataType: "html",
	       	error: function()
	       	{
	        	alert("error petición ajax");
	       	},
	       success: function(data)
	       	{       
	       		switch(data)
	       		{
	       			case "si":
	       				$("#succSigRed").removeClass('hidden');
	       				$("#misSuccText").text("Usuario registrado!");
	       				break;
	       			case "no":
	       				$("#errorSigRed").removeClass('hidden');
	       				$("#misErrText").text("Este correo ya está registrado!");
	       				break;
	       		}
	       	}
	    });
	}
}