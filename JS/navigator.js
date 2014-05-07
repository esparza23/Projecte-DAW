barraLateral = 
{
	cogeInfo : function()
	{
		$.ajax({
	    	type: "POST",
	       	url: "PHP/listarDirectorios.php",
	       	data: "",
	       	dataType: "html",
	       	error: function()
	       	{
	        	alert("error petición ajax");
	       	},
	       success: function(data)
	       	{ 
	       		barraLateral.crear(data);
	       		//$("#jQ-menu").children().children().children().click();
	       	}
	    });
	},
	crear : function(data)
	{
		//añadimos el contenido a la barra lateral
		var div = $("#unidad");
		div.next().empty();
		div.after(data);
		$("span.toggle").next().hide();

		barraLateral.afegirEfecteHover();
		//Añadimos la imagen de carpeta delante de cada nombre
		$(".toggle").each(function() {
			$(this).prev().attr("src","../images/foldClose.png").addClass('folder');
		});

		
		// si clickamos en el nombre es para acceder a la carpeta
		$("span.toggle").unbind('click').click(barraLateral.clickEntrar);
		$("span.toggle").css("cursor", "pointer");

		//si clickamos en la imagen es para abrir la carpeta(si tiene subcarpetas)
		$(".folder").unbind('click').click(barraLateral.clickAbrir);

		$("#jQ-menu span").droppable(utilidades.droppableBarraLateral);
	},
	afegirEfecteHover : function()		//Añadimos la animacion a los textos de las carpetas y que el cursor sea pointer
	{		
		
	    $("#jQ-menu a, #jQ-menu span.toggle").hover(function() {
	        $(this).stop().animate( {
				fontSize:"18px",
				paddingLeft:"5px",
				color:"#1D18F5"
	        }, 300);
	    }, function() {
	        $(this).stop().animate( {
				fontSize:"14px",
				paddingLeft:"0",
				color:"black"
	        }, 300);
	    });		
		$(".folder").css("cursor", "pointer");
	},
	clickEntrar : function()
	{
		if($(this).attr("id") != "unidad")
		{
			var ruta = "";
			div = $(this);
			do
			{
				ruta+="/"+div.attr("id");
				div = div.parent().parent().prev();
				//alert(div.attr("id"));
			}
			while(div.attr("id") != "unidad");
			ruta = ruta.split("/").reverse().join("/");
			ruta.substring(0,ruta.length-2);
			gestionArchivos.archivos(3,"/"+ruta);
		}
		else 
			gestionArchivos.archivos(3,"/");

		if($(window).width()<992)
		{
			$("#jQ-menu").animate({
				"width": "0%",
				"opacity":0
			}, 500);
		};
	},
	clickAbrir : function() 
	{
		$(this).next().next().toggle(400);
		
		// switch the plus to a minus sign or vice-versa
		var v = $(this).html().substring( 0, 1 );
		//alert($(this).next().children().length);
		if ($(this).attr("src") == "../images/foldClose.png" && $(this).next().next().children().length > 0)
			$(this).attr("src","../images/foldOpen.png");
		else if ( $(this).attr("src") == "../images/foldOpen.png" )
			$(this).attr("src","../images/foldClose.png");

		
	}
}
