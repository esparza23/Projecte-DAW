var gestionArchivos = 
{
	types : Array("ai","aspx","bmp","c","cpp","css","dmg","doc","docx","exe","gif","h","html","iso","java","jpg","mp3","mp4","odp","pdf",
	"php","png","ppt","psd","rar","sql","tgz","txt","xls","xlsx","xml","zip","js","odt","jpeg"),
	rutaEnt : null,
	usRuta : null,
	ruta : null,
	historial : null,
	carpPublic : null,

	extension : function(file)		//Funcion que devuelve la extension de un archivo.Del punto al final de la cadena de un string
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
	},
	seleccionaFitx : function()		//funcion para seleccionar el fitxero que se esta utilizando
	{
		var name = event.target.id.replace("span-","").replace("/","");
		if(selected.indexOf(name)==-1)
		{
	    	$(' .ui-selected').removeClass('ui-selected');
	    	selected = new Array();
	    	selected.push(name);
	    	console.log("longitud: "+selected.length);
	    	$('li[id="'+name+'"]').addClass('ui-widget-content noDrag ui-selected');
		}
	},
	actualitzaProgressBar : function(porcen,ocupado,total)		//funcion para actualiza la progress bar de estado
	{
		$("#infoEstado").html(ocupado + " de " + total);
		$(".progress-bar").css("width",porcen.toFixed(2)+"%");
		$(".progress-bar").html(porcen.toFixed(2)+"%");

		if(porcen<=50)
			$(".progress-bar").removeClass(' progress-bar-danger').removeClass(' progress-bar-warning').addClass(' progress-bar-success');
		else if(porcen<=80)
			$(".progress-bar").removeClass(' progress-bar-danger').removeClass(' progress-bar-success').addClass(' progress-bar-warning');
		else
			$(".progress-bar").removeClass(' progress-bar-success').removeClass(' progress-bar-warning').addClass(' progress-bar-danger');
	},
	archivos : function(op,dir)		//Funcion que llama al servidor y muestra los ficheros del directorio pasado como parametro
	{
		selected = new Array();
		$.ajax({
	    	type: "POST",
	       	url: "PHP/muestraDirectorio.php",
	       	data: "op="+op+"&carpeta="+dir+"&ajax=ajax",
	       	dataType: "html",
	       	error: function()
	       	{
	        	alert("error petición ajax");
	       	},
	       success: function(data)
	       	{ 
	       		
	       		//alert(data);
	       		gestionArchivos.creaArchivos(data,op);
	       	}
		});
	},
	res : function(div,ruta,nom,tipo,tamany)		//funcion que muestra los archivos que no se pueden abrir
	{
		div.append
		(
			
			$(document.createElement("li"))
				.attr("id",nom)
				.addClass("ui-widget-content noDrag")
				.attr("data-toggle","modal")
				.attr("data-target","#modalRes")
				.click(function(event) {
					gestionArchivos.seleccionaFitx();
				})
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
				)
		)
		if(gestionArchivos.carpPublic == false)
			$('span[id="span-'+nom+'"]').draggable(utilidades.draggable);
	},
	pdf : function(div,ruta,nom,tipo,tamany)		//funcion que muestra los archivos pdf
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
							$("#nameFitxPDF").text(event.target.id.replace("span-","").replace("img-",""));
							$("#PDFviewer").attr("data",ruta+event.target.id.replace("span-","").replace("img-",""));
							gestionArchivos.seleccionaFitx();
						})

		   				//.draggable(utilidades.draggable)
				)		
		)
		if(gestionArchivos.carpPublic == false)
			$('span[id="span-'+nom+'"]').draggable(utilidades.draggable);
	},
	audio : function(div,ruta,nom,tipo,tamany)		//funcion que muestra los archivos de musica
	{
		reproductorMusica.songs.push(ruta+nom);
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
							reproductorMusica.abrir(ruta,nom);
							gestionArchivos.seleccionaFitx();
						})
				)
		)
		if(gestionArchivos.carpPublic == false)
			$('span[id="span-'+nom+'"]').draggable(utilidades.draggable);
	},
	video : function(div,ruta,nom,tipo,tamany)		//funcion que muestra los archivos de video
	{
		reproductorVideo.videos.push(ruta+nom);
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
							reproductorVideo.abrir(ruta,nom);
							gestionArchivos.seleccionaFitx();
						})
				)
		)
		if(gestionArchivos.carpPublic == false)
			$('span[id="span-'+nom+'"]').draggable(utilidades.draggable);
	},
	text : function(div,ruta,nom,tipo,tamany)		//funcion que muestra los archivos de texto
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
							editorTextos.cargaTexto(event,ruta);
							gestionArchivos.seleccionaFitx();
						})
				)
		)
		if(gestionArchivos.carpPublic == false)
			$('span[id="span-'+nom+'"]').draggable(utilidades.draggable);
	},
	imagen : function(div,ruta,nom,tipo,tamany)		//funcion que muestra los archivos que son imagenes
	{
		reproductorFotos.pictures.push(ruta+nom);
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
							reproductorFotos.abrir(ruta.replace("../",""),nom)
							gestionArchivos.seleccionaFitx();
						})
				)
		)
		if(gestionArchivos.carpPublic == false)
			$('span[id="span-'+nom+'"]').draggable(utilidades.draggable);
	},
	carpeta : function(div,nom)		//funcion que muestra los archivos que son carpeta
	{
		//alert("soy carpeta: "+carp[0][val]);
		div.append
		(
			$(document.createElement("li"))
			.droppable(utilidades.droppableArchivos)
			.attr("id",nom)
			.addClass("ui-widget-content noDrag")
			.append
			(
				$(document.createElement("img"))
					.attr("id","img-"+nom)
					
					.addClass("imgNav")
			)
			.append
			(
				$(document.createElement("span"))
					.addClass("spanNomNav cancel drag")
					.attr("id","span-"+nom)
					.text(nom.replace("/",""))
       				.click(function(event) {
       					//alert(event.target.id.replace("span-","").replace("img-","").replace("/","")+"/");
       					gestionArchivos.archivos(1,event.target.id.replace("span-","").replace("img-","").replace("/","")+"/");
       				})
			)
		)
		if(gestionArchivos.carpPublic == false)
			$('span[id="span-'+nom+'"]').draggable(utilidades.draggable);
		if(nom.replace("/","")=="Public")
			$('img[id="img-'+nom+'"]').attr("src","images/iconFiles/publicFolder.png");
		else if(nom.replace("/","")=="Fotos")
			$('img[id="img-'+nom+'"]').attr("src","images/iconFiles/fotosFolder.png");
		else if(nom.replace("/","")=="Musica")
			$('img[id="img-'+nom+'"]').attr("src","images/iconFiles/musicaFolder.png");
		else
			$('img[id="img-'+nom+'"]').attr("src","images/iconFiles/folder.png")
	},
	carpetaCompartida : function(div,nom)		//funcion que muestra los archivos que son carpeta
	{
		//alert("soy carpeta: "+nom);
		div.append
		(
			$(document.createElement("li"))
			//.droppable(utilidades.droppableArchivos)
			.attr("id",nom)
			.addClass("ui-widget-content noDrag")
			.append
			(
				$(document.createElement("img"))
					.attr("id","img-"+nom)
					.attr("src","images/iconFiles/shareFolder.png")
					.addClass("imgNav")
			)
			.append
			(
				$(document.createElement("span"))
					.addClass("spanNomNav cancel drag")
					.attr("id","span-"+nom)
					.text(nom.replace("/",""))
       				.click(function(event) {
       					//alert(event.target.id.replace("span-","").replace("img-","").replace("/","")+"/");
       					gestionArchivos.archivos(4,event.target.id.replace("span-","").replace("img-","").replace("/","")+"/");
       				})
			)
		)
	},
	creaArchivos : function(data,op)		//funcion que mira que tipo de archivo hay que mostrar
	{
		var carp = $.parseJSON(data);
		//console.log(carp);
		//var div = $("#fitx"); 
		var div = $("#llistaFitx"); 
		div.empty();
		//var carp =
		 $.parseJSON(data);
		if(op!=4 && op!=5 && op!=6)
		{
			gestionArchivos.ruta = carp[carp.length-5]+carp[carp.length-6];
			gestionArchivos.carpPublic = false;
		}
		else
		{

			gestionArchivos.carpPublic = true;
			gestionArchivos.ruta = carp[carp.length-6];
		}

		//alert(gestionArchivos.ruta);
		gestionArchivos.usRuta = carp[carp.length-5];
		gestionArchivos.rutaEnt = carp[carp.length-6];
		gestionArchivos.historial = carp[carp.length-7];
		//alert(carp);
		gestionArchivos.actualitzaProgressBar(carp[carp.length-2],carp[carp.length-3],carp[carp.length-4]);
		//alert(gestionArchivos.rutaEnt);
		//salert("gestionArchivos.ruta : "+gestionArchivos.ruta);
		//alert(gestionArchivos.ruta);
		//var tot = carp[0].length;
		//console.log(tot);
		//alert(tot);
		var i =0;
		//alert(carp[0]);
		reproductorMusica.songs =  new Array();
		reproductorVideo.videos = new Array();
		reproductorFotos.pictures = new Array();
		for(val in carp[0])
		{
			//Recorremos todo el array 
			//div.append($(document.createElement("br")));
			//Si no es carpeta, miraremos los archivos para ver que podemos hacer con ellos(reproducir,ver foto,etc...)
			if(carp[0][val].indexOf("/")==-1)
			{
				var type = gestionArchivos.types.indexOf(gestionArchivos.extension(carp[0][val].toLowerCase()));
				//Miramos le tipo de archivo que es
				switch(type)
				{
					case 0:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"ai",carp[1][val]);
						break;
					case 1:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"asp",carp[1][val]);
						break;
					case 2:
						gestionArchivos.imagen(div,gestionArchivos.ruta,carp[0][val],"bmp",carp[1][val]);
						break;
					case 3:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"c",carp[1][val]);
						break;
					case 4:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"cpp",carp[1][val]);
						break;
					case 5:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"css",carp[1][val]);
						break;
					case 6:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"dmg",carp[1][val]);
						break;
					case 7:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"doc",carp[1][val]);
						break;
					case 8:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"docx",carp[1][val]);
						break;
					case 9:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"exe",carp[1][val]);
						break;
					case 10:
						gestionArchivos.imagen(div,gestionArchivos.ruta,carp[0][val],"gif",carp[1][val]);
						break;
					case 11:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"h",carp[1][val]);
						break;
					case 12:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"html",carp[1][val]);
						break;
					case 13:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"iso",carp[1][val]);
						break;
					case 14:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"java",carp[1][val]);
						break;
					case 15:
						gestionArchivos.imagen(div,gestionArchivos.ruta,carp[0][val],"jpg",carp[1][val]);
						break;
					case 16:
						gestionArchivos.audio(div,gestionArchivos.ruta,carp[0][val],"mp3",carp[1][val]);
						break;
					case 17:
						gestionArchivos.video(div,gestionArchivos.ruta,carp[0][val],"mp4",carp[1][val]);
						break;
					case 18:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"odp",carp[1][val]);
						break;
					case 19:
						gestionArchivos.pdf(div,gestionArchivos.ruta,carp[0][val],"pdf",carp[1][val]);
						break;
					case 20:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"php",carp[1][val]);
						break;
					case 21:
						gestionArchivos.imagen(div,gestionArchivos.ruta,carp[0][val],"png",carp[1][val]);
						break;
					case 22:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"ppt",carp[1][val]);
						break;
					case 23:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"psd",carp[1][val]);
						break;
					case 24:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"rar",carp[1][val]);
						break;
					case 25:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"sql",carp[1][val]);
						break;
					case 26:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"tgz",carp[1][val]);
						break;
					case 27:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"txt",carp[1][val]);
						break;
					case 28:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"xls",carp[1][val]);
						break;
					case 29:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"xlsx",carp[1][val]);
						break;
					case 30:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"xml",carp[1][val]);
						break;
					case 31:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"zip",carp[1][val]);
						break;
					case 32:
						gestionArchivos.text(div,gestionArchivos.ruta,carp[0][val],"unk",carp[1][val]);
						break;
					case 33:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"odt",carp[1][val]);
						break;
					case 34:
						gestionArchivos.imagen(div,gestionArchivos.ruta,carp[0][val],"jpg",carp[1][val]);
						break;
					case -1:
						break;
					default:
						gestionArchivos.res(div,gestionArchivos.ruta,carp[0][val],"unk",carp[1][val]);
						break;
				}
			}
			//Si es carpeta, navegaremos por ella al clickar
			else
				gestionArchivos.carpeta(div,carp[0][val]);
			i++;
		}
		if(gestionArchivos.rutaEnt=="/")
		{	
			//alert(carp);
			/*
			if(true)
			{
				for(j=0;j<carp[carp.length-1].length;j++)
				{
					gestionArchivos.carpetaCompartida(div,carp[carp.length-1][j][2]);	
				}
				//alert(carp[carp.length-1][0]);
			}*/
		}
		//alert(reproductorMusica.songs+reproductorVideo.videos+reproductorFotos.pictures);
		if(gestionArchivos.carpPublic == false)
			$("#llistaFitx").selectable(utilidades.selectable);
	}
};
