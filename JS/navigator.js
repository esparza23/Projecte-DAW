
function navigator(data)
{
	var div = $("#unidad");
	div.next().empty();
	div.after(data);
	$("span.toggle").next().hide();
	
	// add a link nudging animation effect to each link
    $("#jQ-menu a, #jQ-menu span.toggle").hover(function() {
        $(this).stop().animate( {
			fontSize:"20px",
			paddingLeft:"5px",
			color:"#1b3c80"
        }, 300);
    }, function() {
        $(this).stop().animate( {
			fontSize:"14px",
			paddingLeft:"0",
			color:"black"
        }, 300);
    });
	
	
	// prepend a plus sign to signify that the sub-menus aren't expanded

	$(".toggle").each(function() {
		//console.log($(this).attr("id"));
		$(this).prev().attr("src","../images/foldClose.png").addClass('folder');
	});
	// set the cursor of the toggling span elements
	$(".folder").css("cursor", "pointer");
	
	//ir a la carpeta
	$("span.toggle").unbind('click').click(function() {
		if($(this).attr("id") != "unidad")
		{
			ruta = "";
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
			archivos(3,"/"+ruta);
		}
		else 
			archivos(3,"/");
	});
	$("span.toggle").css("cursor", "pointer");

	//abrir pestañita si corresponde
	$(".folder").unbind('click').click(function() {
		$(this).next().next().toggle(400);
		
		// switch the plus to a minus sign or vice-versa
		var v = $(this).html().substring( 0, 1 );
		//alert($(this).next().children().length);
		if ($(this).attr("src") == "../images/foldClose.png" && $(this).next().next().children().length > 0)
			$(this).attr("src","../images/foldOpen.png");
		else if ( $(this).attr("src") == "../images/foldOpen.png" )
			$(this).attr("src","../images/foldClose.png");
	});

	$("#jQ-menu span").droppable({
		hoverClass:"hover",
		activeClass:"active",
		tolerance: "pointer",
		drop: function( event, ui ) {
			
			var ruta = "";
			div = $("#"+event.target.id);
			if(div.attr("id") != "unidad")
			{
				console.log(div);
				do
				{
					ruta+="/"+div.attr("id");
					div = div.parent().parent().prev();
					//alert(div.attr("id"));
				}
				while(div.attr("id") != "unidad");
			}
			
			ruta = usRuta+"/"+ruta.split("/").reverse().join("/");
			//alert(ruta);
			var mov = true;
			//alert(rutaEnt);
			$.each(selected, function(index, val) {
				var tot = usRuta+rutaEnt+val;
				//alert(ruta+" - "+tot);
				if(ruta.indexOf(tot)!=-1 )
					mov = false;
			});
			if(!mov)
				mensaje("No puedes mover una carpeta dentro de si misma");
			else
			{
				$.ajax({
	            	type: "POST",
	            	url: "PHP/moverArchivos.php",
					data: "ficheros="+JSON.stringify(selected)+"&destino="+ruta,
					dataType: "html",
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
		}
	})
}