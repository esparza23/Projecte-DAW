/* Libreria que controla el reproductor de videos */

var reproductorVideo = 
{
	videos : null,
	indexVids : null,
	abierto : null,
	reproduciendo : null,

	activaSlidervolumen : function()	//funcion que activa el slider par controlar el volumen
	{	
		$( "#sliderVolVid" ).slider({
	      value:1,
	      min: 0,
	      max: 1,
	      step: 0.01,
	      range: "min", 
	      slide: function( event, ui ) {
	       	$("#video")[0].volume = ui.value;
	      }
	    });
	},
	abrir : function(rutaVideo,nom)		//funcion que abre el reproductor de video
	{
		$("#nameVid").children().text(nom);
		reproductorVideo.indexVids = reproductorVideo.videos.indexOf(rutaVideo+nom);
		$("#vid").attr("src",rutaVideo+event.target.id.replace("span-","").replace("img-","")).attr("type","video/mp4");
		$("#video").load();
		setTimeout(function(){
			$("#video")[0].play();
		},1000);
		if(reproductorMusica.reproduciendo)
			$("#audio")[0].pause();
		reproductorVideo.abierto = true;
		reproductorVideo.reproduciendo = true;
	},
	cerrar : function()		//funcion que cierra el reproductor de video
	{
		$('#modalVideo').modal('hide');
		$("#video")[0].pause();
		if(reproductorVideo.abierto)
			$("#audio")[0].play();
		reproductorVideo.abierto = false;
		reproductorVideo.reproduciendo = false;
	},
	nextVid : function()	//funcion que repdroduce la siguiente video(si hay)
	{
		reproductorVideo.indexVids++;
		if(reproductorVideo.indexVids == reproductorVideo.videos.length)
			reproductorVideo.indexVids = 0;
		$("#vid").attr("src",reproductorVideo.videos[reproductorVideo.indexVids]);
		$("#video").load();
		setTimeout(function(){
			$("#video")[0].play();
		},1000);
	},
	prevVid : function()	//funcion que repdroduce la anterior video(si hay)
	{
		reproductorVideo.indexVids--;
		if(reproductorVideo.indexVids==-1)
			reproductorVideo.indexVids = reproductorVideo.videos.length-1;
		$("#vid").attr("src",reproductorVideo.videos[reproductorVideo.indexVids]);
		$("#video").load();
		setTimeout(function(){
			$("#video")[0].play();
		},1000);
	},
	pausePlay : function()	//funcion que para y reproduce el video, cambiando el icono de pause/play
	{
		var but = $("#butPauseVid").children();
		if(but.hasClass('glyphicon-pause'))
		{
			but.removeClass('glyphicon-pause');
			but.addClass('glyphicon-play');
			$("#video")[0].pause();
		}
		else
		{
			but.removeClass('glyphicon-play');
			but.addClass('glyphicon-pause');
			$("#video")[0].play();
		}
	},
	ponerIconoPausa : function()	//Funcion que cambia el icono de play a pausa
	{
		$("#butPauseVid").children().removeClass('glyphicon-play');
		$("#butPauseVid").children().addClass('glyphicon-pause');
	},
	ponerIconoPlay : function()		//Funcion que cambia el icono de pausa a play
	{
	   	$("#butPauseVid").children().removeClass('glyphicon-pause');
		$("#butPauseVid").children().addClass('glyphicon-play');
	},
	ajustarVolumen : function()		//Funcion que ajusta el volumen si cambia en la pantalla completa
	{
	   	$( "#sliderVolVid" ).slider("value",$("#video")[0].volume);
	},
	pantallaCompleta : function()	//Funcion que pone el video a pantalla completa
	{
		var elem = document.getElementById("video");
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
	},
	controlaTeclado : function()	//funcion que controla el reproductor en funcion de las entradas por teclado
	{
		//console.log(event.keyCode);
		if(reproductorVideo.abierto)
		{
			switch(event.keyCode)
			{
				case 37:
					reproductorVideo.prevVid();
					break;
				case 39:
					reproductorVideo.nextVid();
					break;
				case 32:
					if(reproductorVideo.reproduciendo)
						$("#video")[0].pause();
					else
						$("#video")[0].play();
						reproductorVideo.reproduciendo = !reproductorVideo.reproduciendo;
					break;
			}
		}
	}
}

//Acciones que haremos cuando se cargue el documento
jQuery(document).ready(function($) {

	//activaremos el slider del volumen
	reproductorVideo.activaSlidervolumen();

	//evento que controla el boton cerrar del reproductor de video
	$("#closeVid").click(reproductorVideo.cerrar);

	//evento que controla cuando se acaba de reproducir la cancion, para pasar a la siguiente
	document.getElementById('video').addEventListener('ended', reproductorVideo.nextVid, false);
	document.getElementById("video").addEventListener('play', reproductorVideo.ponerIconoPausa, true);
	document.getElementById("video").addEventListener('pause', reproductorVideo.ponerIconoPlay, true);
	document.getElementById("video").addEventListener("volumechange",reproductorVideo.ajustarVolumen, true);

	//Funciones que controlan los botones de anterios/siguiente/pausa/pantalla completa
	$("#butBackVid").unbind('click').click(reproductorVideo.prevVid);
	$("#butForVid").unbind('click').click(reproductorVideo.nextVid);
	$("#butPauseVid").unbind('click').click(reproductorVideo.pausePlay);
	$("#butResizeVid").unbind('click').click(reproductorVideo.pantallaCompleta);

	//funcion que controla el reproductor mediante el teclado
	$(document).keydown(reproductorVideo.controlaTeclado);
});