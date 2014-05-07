function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}

jQuery(document).ready(function($) {

	$("html, body").animate({ scrollTop: 0 }, "slow");  
	
	$("#masInfoText").click(function(e) { 
	    //alert("HEI");
	    goToByScroll("info");           
	});

	$("#volverArribaText").click(function(e) { 
	    //alert("HEI");
	     $("html, body").animate({ scrollTop: 0 }, "slow");   
	});


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

function login()
{
	$("#succSigRed").addClass('hidden');
    $("#misSuccText").text("");
	$("#errorSigRed").addClass('hidden');
    $("#misErrText").text("");
    
	var emailLog= $("#emailLog").val();
	var passLog = $("#passLog").val();
    passLog = hex_md5(passLog);
	$.ajax({
    	type: "POST",
       	url: "../PHP/login.php",
       	data: "emailLog="+emailLog+"&passLog="+passLog+"&ajax=ajax",
       	dataType: "html",
       	error: function()
       	{
        	alert("error petición ajax");
       	},
       success: function(data)
       	{       
          	//console.log(data);
       		switch(data)
       		{
       			case "si":
       				utilidades.mensaje("#succSigRed","Usuario logueado. Enseguida sera redireccionado a la pagina principal ");
       				$("#succSigRed").append
       				(
       					$(document.createElement("img"))
       						.attr("src","/images/cargando.gif")
       						.css("width","48px")
       						.css("height","48px")
       						.css("margin-left","15px")
       				)
       				setTimeout(function()
   					{
       					location.href="Home.php";
   					},3000);
       				break;
       			case "no":
       				utilidades.mensaje("#errorSigRed","Este usuario y contraseña no existen!");
       				break;
       		}
       	}
    });
}

function registrar()
{
	//$("#succSigRed").addClass('hidden');
	$("#emailReg").parent().removeClass('has-error');
	$("#passReg").parent().removeClass('has-error');
	$("#passRegRep").parent().removeClass('has-error');
    $("#misSuccText").text("");
	$("#errorSigRed").addClass('hidden');
    $("#misErrText").text("");

	var emailReg= $("#emailReg").val();
	var passReg = $("#passReg").val();
	var passRegRep = $("#passRegRep").val();
	//alert(passReg+" "+passRegRep);
	if(emailReg.trim() == "" )
	{
		$("#emailReg").parent().addClass('has-error');
		utilidades.mensaje("#errorSigRed","Debes introducir el correo");
		return false;	
	}
	else if(emailReg.trim().indexOf('@')==-1 || emailReg.trim().indexOf('.')==-1)
	{
		$("#emailReg").parent().addClass('has-error');
		utilidades.mensaje("#errorSigRed","El correo debe contener una @ y un punto");
		return false;	
	}
	else if(passReg.trim() == "" )
	{
		$("#passReg").parent().addClass('has-error');
		utilidades.mensaje("#errorSigRed","Debes introducir una contraseña");
		return false;	
	}
	else if(passReg != passRegRep)
	{
		$("#passRegRep").parent().addClass('has-error');
		utilidades.mensaje("#errorSigRed","Las contraseñas deben coincidir");
		return false;
	}
	else if(!$('#condCheck').prop('checked'))
	{
		utilidades.mensaje("#errorSigRed","Debes acceptar las condiciones de uso y servicio");
		return false;
	}
	else
	{
		//console.log(passReg);
		passReg = hex_md5(passReg);
		//console.log(passReg);
		$.ajax({
	    	type: "POST",
	       	url: "../PHP/registrar.php",
	       	data: "emailReg="+emailReg+"&passReg="+passReg+"&admin=0&ajax=ajax",
	       	dataType: "html",
	       	error: function()
	       	{
	        	alert("error petición ajax");
	       	},
	       success: function(data)
	       	{       
	       		//alert(data);
	       		switch(data)
	       		{
	       			case "si":
	       				utilidades.mensaje("#succSigRed","Usuario registrado! Loguéate para empezar a utilizar SaveCloud ");
	       				break;
	       			case "no":
	       				utilidades.mensaje("#errorSigRed","Este correo ya está registrado!");
	       				break;
	       		}
	       	}
	    });
	}
}