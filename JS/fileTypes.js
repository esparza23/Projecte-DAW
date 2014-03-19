var types = new Array("ai","aspx","bmp","c","cpp","css","dmg","doc","docx","exe","gif","h","html","iso","java","jpg","mp3","mp4","odp","pdf",
	"php","png","ppt","psd","rar","sql","tgz","txt","xls","xlsx","xml","zip","js","odt","jpeg");

//Funcion que devuelve la extension de un archivo.Del punto al final de la cadena de un string
function extension(file)
{
	var ext="";
	var acabado = false;
	for(i=file.length-1;!acabado && i>=0;i--)
	{
		if(file[i]!='.')
			ext+=file[i];
		else
			acabado = !acabado;
	}
	return ext.split("").reverse().join("");
}

function creaArchivos(data)
{
	var carp = $.parseJSON(data);
	//alert(data);
	//var div = $("#fitx"); 
	var div = $("#llistaFitx"); 
	div.empty();
	//var carp = $.parseJSON(data);
	var ruta = carp[carp.length-1]+carp[carp.length-2];
	//alert("ruta : "+ruta);
	//alert(ruta);
	//var tot = carp[0].length;
	//console.log(tot);
	//alert(tot);
	var i =0;
	//alert(carp[0]);
	songs =  new Array();
	videos = new Array();
	pictures = new Array();
	for(val in carp[0])
	{
		//Recorremos todo el array 
		//div.append($(document.createElement("br")));
		//Si no es carpeta, miraremos los archivos para ver que podemos hacer con ellos(reproducir,ver foto,etc...)
		if(carp[0][val].indexOf("/")==-1)
		{
			var type = types.indexOf(extension(carp[0][val].toLowerCase()));
			//Miramos le tipo de archivo que es
			switch(type)
			{
				case 0:
					res(div,ruta,carp[0][val],"ai",carp[1][val]);
					break;
				case 1:
					text(div,ruta,carp[0][val],"asp",carp[1][val]);
					break;
				case 2:
					imagen(div,ruta,carp[0][val],"bmp",carp[1][val]);
					break;
				case 3:
					text(div,ruta,carp[0][val],"c",carp[1][val]);
					break;
				case 4:
					text(div,ruta,carp[0][val],"cpp",carp[1][val]);
					break;
				case 5:
					text(div,ruta,carp[0][val],"css",carp[1][val]);
					break;
				case 6:
					res(div,ruta,carp[0][val],"dmg",carp[1][val]);
					break;
				case 7:
					res(div,ruta,carp[0][val],"doc",carp[1][val]);
					break;
				case 8:
					res(div,ruta,carp[0][val],"docx",carp[1][val]);
					break;
				case 9:
					res(div,ruta,carp[0][val],"exe",carp[1][val]);
					break;
				case 10:
					imagen(div,ruta,carp[0][val],"gif",carp[1][val]);
					break;
				case 11:
					text(div,ruta,carp[0][val],"h",carp[1][val]);
					break;
				case 12:
					text(div,ruta,carp[0][val],"html",carp[1][val]);
					break;
				case 13:
					res(div,ruta,carp[0][val],"iso",carp[1][val]);
					break;
				case 14:
					text(div,ruta,carp[0][val],"java",carp[1][val]);
					break;
				case 15:
					imagen(div,ruta,carp[0][val],"jpg",carp[1][val]);
					break;
				case 16:
					audio(div,ruta,carp[0][val],"mp3",carp[1][val]);
					break;
				case 17:
					video(div,ruta,carp[0][val],"mp4",carp[1][val]);
					break;
				case 18:
					res(div,ruta,carp[0][val],"odp",carp[1][val]);
					break;
				case 19:
					pdf(div,ruta,carp[0][val],"pdf",carp[1][val]);
					break;
				case 20:
					text(div,ruta,carp[0][val],"php",carp[1][val]);
					break;
				case 21:
					imagen(div,ruta,carp[0][val],"png",carp[1][val]);
					break;
				case 22:
					res(div,ruta,carp[0][val],"ppt",carp[1][val]);
					break;
				case 23:
					res(div,ruta,carp[0][val],"psd",carp[1][val]);
					break;
				case 24:
					res(div,ruta,carp[0][val],"rar",carp[1][val]);
					break;
				case 25:
					text(div,ruta,carp[0][val],"sql",carp[1][val]);
					break;
				case 26:
					res(div,ruta,carp[0][val],"tgz",carp[1][val]);
					break;
				case 27:
					text(div,ruta,carp[0][val],"txt",carp[1][val]);
					break;
				case 28:
					res(div,ruta,carp[0][val],"xls",carp[1][val]);
					break;
				case 29:
					res(div,ruta,carp[0][val],"xlsx",carp[1][val]);
					break;
				case 30:
					text(div,ruta,carp[0][val],"unk",carp[1][val]);
					break;
				case 31:
					text(div,ruta,carp[0][val],"xml",carp[1][val]);
					break;
				case 32:
					text(div,ruta,carp[0][val],"unk",carp[1][val]);
					break;
				case 33:
					res(div,ruta,carp[0][val],"odt",carp[1][val]);
					break;
				case 34:
					imagen(div,ruta,carp[0][val],"jpg",carp[1][val]);
					break;
				default:
					break;
			}
		}
		//Si es carpeta, navegaremos por ella al clickar
		else
		{
			//alert("soy carpeta: "+carp[0][val]);
			div.append
			(
				$(document.createElement("li"))
				.droppable({
					hoverClass:"hover",
					activeClass:"active",
					tolerance: "pointer",
					drop: function( event, ui ) {
						alert(ruta+event.target.id.replace("span-","").replace("img-",""));
					}
				})
				.attr("id",carp[0][val])
				.addClass("ui-widget-content noDrag")
				.append
				(
					$(document.createElement("img"))
						.attr("id","img-"+carp[0][val])
						.attr("src","images/iconFiles/folder.png")
						.addClass("imgNav")
				)
				.append
				(
					$(document.createElement("span"))
						.addClass("spanNomNav cancel drag")
						.attr("id","span-"+carp[0][val])
						.text(carp[0][val].replace("/",""))
	       				.click(function(event) {
	       					//alert(event.target.id.replace("span-","").replace("img-","").replace("/","")+"/");
	       					archivos(1,event.target.id.replace("span-","").replace("img-","").replace("/","")+"/");
	       				})
	       				.draggable({ 
								opacity: 1, 
								helper: "clone" , 
								cursor: "move",
								cursorAt: { top: -12, left: -20 },
						    helper: function( event ) {
						    	if(selected.length > 1)
						    		return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />Mover "+selected.length +" elementos</div>");
						    	else
						        	return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />"+event.target.id.replace("drag-","")+"</div>" );
						    }
							})
				)
			)
		}
		i++;
	}		
	alert(songs+videos+pictures);

	$("#llistaFitx").selectable({
		cancel: "span,.cancel,.glyphicon",
		stop: function() {
			selected = new Array();
	        $( ".ui-selected.noDrag", this ).each(function() {
	        	selected.push($( this ).attr("id"));
	         	//alert($( this ).attr("id"));
	        });
	        console.log(selected);
	        $( ".drag", this ).each(function() {
        	var n = $( this ).attr("id").replace("span-","");
        	$(this).draggable({ 
				opacity: 1, 
				helper: "clone" , 
				cursor: "move",
				cursorAt: { top: -12, left: -20 },
		    	helper: function( event ) {
		    	if(selected.length > 1)
		    		return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />Mover "+selected.length +" elementos</div>");
		    	else
		        	return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />"+event.target.id.replace("drag-","")+"</div>" );
		    }
							})
        	if(selected.indexOf(n)==-1)
        	{
        		console.log("q"+n);
        		$( this ).draggable('destroy');
        	}
         	//alert($( this ).attr("id"));
        });
        alert(selected);
  		}
	});
}

//Funci que llama al servidor y dibuja los ficheros del directorio pasado como parametro
function archivos(op,dir)
{
	selected = new Array();
	$.ajax({
    	type: "POST",
       	url: "PHP/muestraDirectorio.php",
       	data: "op="+op+"&carpeta="+dir,
       	dataType: "html",
       	error: function()
       	{
        	alert("error petición ajax");
       	},
       success: function(data)
       	{ 
       		//alert(data);
       		creaArchivos(data);
       		
       	}
	});
}

function res(div,ruta,nom,tipo,tamany)
{
	div.append
	(
		
		$(document.createElement("li"))
			.attr("id",nom)
			.addClass("ui-widget-content noDrag")
			.attr("data-toggle","modal")
			.attr("data-target","#modalRes")
			.append
			(
				$(document.createElement("img"))
					.attr("id","img-"+nom)
					.attr("src","images/iconFiles/"+tipo+".png")
					.addClass("imgNav")
					.text(nom)
			)
			.append
			(
				$(document.createElement("span"))
					.addClass("spanNomNav  drag")
					.attr("id","span-"+nom)
					.text(nom+"-"+tamany)

       				.draggable({ 
							opacity: 1, 
							helper: "clone" , 
							cursor: "move",
							cursorAt: { top: -12, left: -20 },
					    helper: function( event ) {
					    	if(selected.length > 1)
					    		return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />Mover "+selected.length +" elementos</div>");
					    	else
					        	return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />"+event.target.id.replace("drag-","")+"</div>" );
					    }
						})
			)
	)
}

function pdf(div,ruta,nom,tipo,tamany)
{
	div.append
	(
		$(document.createElement("li"))
			.attr("id",nom)
			.addClass("ui-widget-content noDrag")
			.attr("data-toggle","modal")
			.attr("data-target","#modalPDF")
		.append
		(
			$(document.createElement("img"))
				.attr("id","img-"+nom)
				.attr("src","images/iconFiles/pdf.png")
				.addClass("imgNav")
				.attr("alt",nom)
		)
		.append
		(
			$(document.createElement("span"))
				.addClass("spanNomNav  drag")
				.attr("id","span-"+nom)
				.text(nom+"-"+tamany)
				.click(function(event) {
					$("#PDFviewer").attr("data",ruta+event.target.id.replace("span-","").replace("img-",""));
				})

   				.draggable({ 
						opacity: 1, 
						helper: "clone" , 
						cursor: "move",
						cursorAt: { top: -12, left: -20 },
				    helper: function( event ) {
				    	if(selected.length > 1)
				    		return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />Mover "+selected.length +" elementos</div>");
				    	else
				        	return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />"+event.target.id.replace("drag-","")+"</div>" );
				    }
				})
		)		
	)
}

function video(div,ruta,nom,tipo,tamany)
{
	videos.push(ruta+nom);
	div.append
	(
		$(document.createElement("li"))
			.attr("id",nom)
			.addClass("ui-widget-content noDrag")
			.attr("data-toggle","modal")
			.attr("data-target","#modalVideo")
			.append
			(
				$(document.createElement("img"))
					.attr("id","img-"+nom)
					.attr("src","images/iconFiles/"+tipo+".png")
					.addClass("imgNav")
					.attr("alt",nom)
			)
			.append
			(
				$(document.createElement("span"))
					.addClass("spanNomNav  drag")
					.attr("id","span-"+nom)
					.text(nom+"-"+tamany)
					.click(function(event) {
						indexVids = videos.indexOf(ruta+nom);
						$("#vid").attr("src",ruta+event.target.id.replace("span-","").replace("img-","")).attr("type","video/mp4");
						$("#video").load();
						setTimeout(function(){
							$("#video")[0].play();
						},1000);

						document.getElementById('video').addEventListener('ended', function()
						{
							alert("hola");
							//quitar reproductor...
						}, false);
					})

       				.draggable({ 
							opacity: 1, 
							helper: "clone" , 
							cursor: "move",
							cursorAt: { top: -12, left: -20 },
					    helper: function( event ) {
					    	if(selected.length > 1)
					    		return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />Mover "+selected.length +" elementos</div>");
					    	else
					        	return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />"+event.target.id.replace("drag-","")+"</div>" );
					    }
					})
			)
	)
}

function audio(div,ruta,nom,tipo,tamany)
{
	songs.push(ruta+nom);
	div.append
	(
		$(document.createElement("li"))
			.attr("id",nom)
			.addClass("ui-widget-content noDrag")
			.append
			(
				$(document.createElement("img"))
					.attr("id","img-"+nom)
					.attr("src","images/iconFiles/"+tipo+".png")
					.addClass("imgNav")
					.attr("alt",nom)
			)
			.append
			(
				$(document.createElement("span"))
					.addClass("spanNomNav  drag")
					.attr("id","span-"+nom)
					.text(nom+"-"+tamany)
					.click(function(event) {
						//alert(songs.indexOf(ruta+nom));
						indexSong = songs.indexOf(ruta+nom);
						$("#repMusica").animate({
							"height": "50px",
							"opacity": 1},
							500);
						$("#backMus").css("display","inline-block");
						$("#forMus").css("display","inline-block");
						$("#closeMus").css("display","inline-block");
						$("#audio").css("display","inline-block");
						$("#audio").attr("src",ruta+event.target.id.replace("span-","").replace("img-","")).attr("type","audio/mpeg");
						$("#music").load();
						$("#audio")[0].play();

						document.getElementById('audio').addEventListener('ended', function()
						{
							alert("hola");
							//quitar reproductor...
						}, false);
					})

       				.draggable({ 
							opacity: 1, 
							helper: "clone" , 
							cursor: "move",
							cursorAt: { top: -12, left: -20 },
					    helper: function( event ) {
					    	if(selected.length > 1)
					    		return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />Mover "+selected.length +" elementos</div>");
					    	else
					        	return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />"+event.target.id.replace("drag-","")+"</div>" );
					    }
					})
			)
	)
}

function text(div,ruta,nom,tipo,tamany)
{
	div.append
	(
		$(document.createElement("li"))
			.attr("id",nom)
			.addClass("ui-widget-content noDrag")
			.attr("data-toggle","modal")
			.attr("data-target","#modalText")
			.append
			(
				$(document.createElement("img"))
					.attr("id","img-"+nom)
					.attr("src","images/iconFiles/"+tipo+".png")
					.addClass("imgNav")
					.text(nom)
			)
			.append
			(
				$(document.createElement("span"))
					.addClass("spanNomNav  drag")
					.attr("id","span-"+nom)
					.text(nom+"-"+tamany)
					.click(function(event) {
						//archivos(event.target.id);
						$.ajax({
					    	type: "POST",
					       	url: "PHP/leerFichero.php",
					       	data: "fichero="+event.target.id.replace("span-","").replace("img-",""),
					       	dataType: "html",
					       	error: function()
					       	{
					        	alert("error petición ajax");
					       	},
					       success: function(data)
					       	{ 
					       		$("#text").val(data);
					       	}
				    	});
					})

       				.draggable({ 
							opacity: 1, 
							helper: "clone" , 
							cursor: "move",
							cursorAt: { top: -12, left: -20 },
					    helper: function( event ) {
					    	if(selected.length > 1)
					    		return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />Mover "+selected.length +" elementos</div>");
					    	else
					        	return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />"+event.target.id.replace("drag-","")+"</div>" );
					    }
					})
			)
	)
}

function imagen(div,ruta,nom,tipo,tamany)
{
	pictures.push(ruta+nom);
	div.append
	(
		$(document.createElement("li"))
		.attr("id",nom)
		.attr("data-toggle","modal")
		.attr("data-target","#modalIMG")
		.addClass("ui-widget-content noDrag")
		.append
			(
				$(document.createElement("img"))
					.attr("id","img-"+nom)
					.attr("src","images/iconFiles/"+tipo+".png")
					.addClass("imgNav")
					.attr("alt",nom)
			)
			.append
			(
				$(document.createElement("span"))
					.addClass("spanNomNav drag")
					.attr("id","span-"+nom)
					.text(nom+"-"+tamany)
					.click(function(event) {
						indexPic = pictures.indexOf(ruta+nom);
						//archivos(event.target.id);
						solicitarTamanoImagen(ruta+nom);
					})

       				.draggable({ 
							opacity: 1, 
							helper: "clone" , 
							cursor: "move",
							cursorAt: { top: -12, left: -20 },
					    helper: function( event ) {
					    	if(selected.length > 1)
					    		return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />Mover "+selected.length +" elementos</div>");
					    	else
					        	return $( "<div class='ui-widget-header'><img src='../images/moveLit.png' />"+event.target.id.replace("drag-","")+"</div>" );
					    }
					})
			)
	)
}