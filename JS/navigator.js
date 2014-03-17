
function navigator(data)
{
	var div = $("#unidad");
	div.after(data);
	$("span.toggle").next().hide();
	
	// add a link nudging animation effect to each link
    $("#jQ-menu a, #jQ-menu span.toggle").hover(function() {
        $(this).stop().animate( {
			fontSize:"17px",
			paddingLeft:"10px",
			color:"black"
        }, 300);
    }, function() {
        $(this).stop().animate( {
			fontSize:"14px",
			paddingLeft:"0",
			color:"#808080"
        }, 300);
    });
	
	
	// prepend a plus sign to signify that the sub-menus aren't expanded

	$(".toggle").each(function() {
		console.log($(this).attr("id"));
		$(this).prev().attr("src","../images/foldClose.png").addClass('folder');
	});
	// set the cursor of the toggling span elements
	$(".folder").css("cursor", "pointer");
	
	//ir a la carpeta
	$("span.toggle").click(function() {
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
			//alert("ir a " +ruta.split("/").reverse().join("/"));
			
			//alert(ruta);
			archivos(3,"/"+ruta);
			//if($(this).attr("id") != "unidad")
				//alert("Hay que ir a "+ $(this).parent().parent().prev().attr("id"));
		}
		else alert("raiz");
	});
	$("span.toggle").css("cursor", "pointer");

	//abrir pestañita si corresponde
	$(".folder").click(function() {
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
			alert("hola");
		}
	})
}