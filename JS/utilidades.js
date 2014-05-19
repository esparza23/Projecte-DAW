var utilidades = 
{
	draggable : 	//objeto para pasar a todos los ficheros draggables
	{
		opacity: 1, 
		cursor: "move",
		revert:'invalid',
		cursorAt: { top: -12, left: -20 },
	    helper: function( event ) {
	    	var name = event.target.id.replace("span-","");
	    	if(utilidadesMenu.selected.indexOf(name)==-1)
	    	{
		    	$(' .ui-selected').removeClass('ui-selected');
		    	utilidadesMenu.selected = new Array();
		    	utilidadesMenu.selected.push(name);
		    	console.log("longitud: "+utilidadesMenu.selected.length);
		    	$('li[id="'+name+'"]').addClass('ui-widget-content noDrag ui-selected');
	    	}
	    	if(utilidadesMenu.selected.length > 1)
	    		return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />Mover "+utilidadesMenu.selected.length +" elementos</div>");
	    	else
	        	return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />"+event.target.id.replace("drag-","").replace("span-","")+"</div>" );
	    }
	},
	selectable : 		//objeto para pasar a todos los ficheros selectables
	{
		cancel: "span,.cancel,.glyphicon",
		start:function()
		{
        	$("#menuCont").css("display","none");
			$("#menuCont").animate({
				"opacity": 0},100);
		},
		stop: function() {
			utilidadesMenu.selected = new Array();
	        $( ".ui-selected.noDrag", this ).each(function() {
	        	utilidadesMenu.selected.push($( this ).attr("id"));
	        });
	        $( ".drag", this ).each(function() {
        		var n = $( this ).attr("id").replace("span-","");
        	});
        	console.log("selected: "+utilidadesMenu.selected);
        	//console.log(selected);
  		}
	},
	droppableArchivos : 	//objeto para pasar a las carpetas droppable de gestionArchivos
	{
		hoverClass:"hover",
		activeClass:"active",
		tolerance: "pointer",
		drop: function( event, ui ) {
			console.log("movere:");
			console.log(JSON.stringify(utilidadesMenu.selected));
			console.log("al siguiente directorio");
			console.log(gestionArchivos.ruta+event.target.id.replace("span-","").replace("img-",""));

			/* Comprobar que no movamos una carpeta dentro de si mismo */
			var mov = true;
			$.each(utilidadesMenu.selected, function(index, val) {
				//console.log("/"+val+" - "+event.target.id.replace("span-","").replace("img-",""));
				if(event.target.id.replace("span-","").replace("img-","").indexOf(val)!=-1)
					mov = false;
			});

			if(!mov)
				utilidades.mensaje("#mensajes","<strong>ERROR!</strong> No puedes copiar una carpeta dentro de si misma");
			else
			{
				$.ajax({
	            type: "POST",
	            	url: "../PHP/moverArchivos.php",
					data: "ficheros="+JSON.stringify(utilidadesMenu.selected)+"&destino="+gestionArchivos.ruta+event.target.id.replace("span-","").replace("img-","")+"&ajax=ajax",
					dataType: "html",
					error: function()
					{
						console.log("error petición ajax");
					},
					success: function(data)
					{ 
						console.log(data);
						gestionArchivos.archivos("same");
						barraLateral.cogeInfo();
					}
	          	});
			}
		}
	},
	droppableBarraLateral : 		//objeto para pasar a las carpetas droppable de barraLAteral
	{
		hoverClass:"hoverBar",
		activeClass:"activeBar",
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
					//console.log(div.attr("id"));
				}
				while(div.attr("id") != "unidad");
			}
			
			ruta = gestionArchivos.usRuta+"/"+ruta.split("/").reverse().join("/");
			//console.log(ruta);
			var mov = true;
			//console.log(gestionArchivos.rutaEnt);
			$.each(utilidadesMenu.selected, function(index, val) {
				var tot = gestionArchivos.usRuta+gestionArchivos.rutaEnt+val;
				//console.log(ruta+" - "+tot);
				if(ruta.indexOf(tot)!=-1 )
					mov = false;
			});
			if(!mov)
				utilidades.mensaje("#mensajes","<strong>ERROR!</strong> No puedes copiar una carpeta dentro de si misma");
			else
			{
				$.ajax({
	            	type: "POST",
	            	url: "../PHP/moverArchivos.php",
					data: "ficheros="+JSON.stringify(utilidadesMenu.selected)+"&destino="+ruta+"&ajax=ajax",
					dataType: "html",
					error: function()
					{
						console.log("error petición ajax");
					},
					success: function(data)
					{ 
						//console.log(data);
						gestionArchivos.archivos("same");					
						barraLateral.cogeInfo();
					}
	          	});
			}
		}
	},
	mensaje : function(div,text)
	{
		$(div).html(text)
		$(div).removeClass('hidden');
		$(div).animate({
			"opacity": 1
			},1000, 
			function() {
	       	setTimeout(function(){
	       		$(div).animate({
					"opacity": 0
	   			},1000, 
	   			function() {
						$(div).addClass('hidden');
				});
	       	},5000);
		});
	}
}