/* Libreria que controla el reproductor de musica */

//declaramos el espacio de nombres reproductor de musica
var reproductorMusica = 
{
	songs : null,
	indexSong : null,
	abierto : null,
	reproduciendo : null,
	songsPlaying : null,

	activaSlidervolumen : function()	//funcion que activa el slider par controlar el volumen
	{
		$( "#sliderVolMus" ).slider({
			value:1,
			min: 0,
			max: 1,
			step: 0.01,
			range: "min", 
			slide: function( event, ui ) {
				$("#audio")[0].volume = ui.value;
			}
		});
	},
	abrir : function(rutaAudio,nom)		//funcion que abre el reproductor de musica con la cancion que recibe
	{
		//console.log(reproductorMusica.songs.indexOf(rutaAudio+nom));
		reproductorMusica.songsPlaying = reproductorMusica.songs;
		reproductorMusica.indexSong = reproductorMusica.songsPlaying.indexOf(rutaAudio+nom);
		$("#repMusica").animate({
			"height": "75px",
			"opacity": 1},
			500);
		$("#backMus").css("display","inline-block");
		$("#forMus").css("display","inline-block");
		$("#closeMus").css("display","inline-block");
		$("#audio").css("display","inline-block");
		$("#audio").attr("src",rutaAudio+event.target.id.replace("span-","").replace("img-","")).attr("type","audio/mpeg");
		$("#music").load();
		$("#audio")[0].play();
		$("#nomSong").text(nom);
		reproductorMusica.abierto = true;
		reproductorMusica.reproduciendo = true;
	},
	cerrar : function()		//funcion que cierra el reproductor de musica
	{
		$("#repMusica").animate({
			"height": "0px",
			"opacity": 0},
			500);
		$("#audio").css("display","none")
		$(this).css("display","none")
		$("#audio")[0].pause();
		reproductorMusica.abierto = false;
	},
	pausePlay : function()		//funcion que para y reproduce el audio, cambiando el icono de pause/play
	{
		var but = $("#butPauseMus").children();
		if(but.hasClass('glyphicon-pause'))
		{
			reproductorMusica.ponerIconoPlay();
			$("#audio")[0].pause();
		}
		else
		{
			reproductorMusica.ponerIconoPausa();
			$("#audio")[0].play();
		}
		reproductorMusica.reproduciendo = !reproductorMusica.reproduciendo;
	},
	ponerIconoPausa : function()	//Funcion que cambia el icono de play a pausa
	{
		$("#butPauseMus").children().removeClass('glyphicon-play');
		$("#butPauseMus").children().addClass('glyphicon-pause');
	},
	ponerIconoPlay : function()		//Funcion que cambia el icono de pausa a play
	{
	   	$("#butPauseMus").children().removeClass('glyphicon-pause');
		$("#butPauseMus").children().addClass('glyphicon-play');	
	},
	nextSong : function()	//funcion que repdroduce la siguiente cancion(si hay)
	{
		reproductorMusica.indexSong++;
		if(reproductorMusica.indexSong == reproductorMusica.songsPlaying.length)
			reproductorMusica.indexSong = 0;
		$("#audio").attr("src",reproductorMusica.songsPlaying[reproductorMusica.indexSong]);
		$("#music").load();
		$("#audio")[0].play();
		var ult = reproductorMusica.songsPlaying[reproductorMusica.indexSong].lastIndexOf("/");
		$("#nomSong").text(reproductorMusica.songsPlaying[reproductorMusica.indexSong].substring(ult+1,reproductorMusica.songsPlaying[reproductorMusica.indexSong].length));
	},
	prevSong : function()	//funcion que repdroduce la anterior cancion(si hay)
	{
		reproductorMusica.indexSong--;
		if(reproductorMusica.indexSong==-1)
			reproductorMusica.indexSong = reproductorMusica.songsPlaying.length-1;
		$("#audio").attr("src",reproductorMusica.songsPlaying[reproductorMusica.indexSong]);
		$("#music").load();
		$("#audio")[0].play();
		var ult = reproductorMusica.songsPlaying[reproductorMusica.indexSong].lastIndexOf("/");
		$("#nomSong").text(reproductorMusica.songsPlaying[reproductorMusica.indexSong].substring(ult+1,reproductorMusica.songsPlaying[reproductorMusica.indexSong].length));
	},
	controlaTeclado : function()	//funcion que controla el reproductor en funcion de las entradas por teclado
	{
		//console.log(event.keyCode);
		if(reproductorMusica.abierto  && !reproductorVideo.abierto && !reproductorFotos.abierto)
		{
			//console.log(event.keyCode);
			switch(event.keyCode)
			{
				case 27:
					reproductorMusica.cerrar();
					break;
				case 37:
					reproductorMusica.prevSong();
					break;
				case 39:
					reproductorMusica.nextSong();
					break;
				case 32:
					if(reproductorMusica.reproduciendo)
						$("#audio")[0].pause();
					else
						$("#audio")[0].play();
						reproductorMusica.reproduciendo = !reproductorMusica.reproduciendo;
					break;
			}
		}
	}

};

//Acciones que harmeos cuando se cargue el documento
jQuery(document).ready(function($) {

	//activaremos el slider del volumen
	reproductorMusica.activaSlidervolumen();
	
	//Indicamos los eventos de play/stop para cambiar el icono
    document.getElementById("audio").addEventListener('play', reproductorMusica.ponerIconoPausa, true);
	document.getElementById("audio").addEventListener('pause', reproductorMusica.ponerIconoPlay, true);

	//evento que controla el boton cerrar del reproductor de musica
	$("#closeMus").click(reproductorMusica.cerrar);	

	//eventos que controlan los botones de anterios/siguiente/pausa
	$("#butBackMus").unbind('click').click(reproductorMusica.prevSong);
	$("#butForMus").unbind('click').click(reproductorMusica.nextSong);
	$("#butPauseMus").unbind('click').click(reproductorMusica.pausePlay);

	//evento que controla cuando se acaba de reproducir la cancion, para pasar a la siguiente
	document.getElementById('audio').addEventListener('ended',reproductorMusica.nextSong, false);

	//funcion que controla el reproductor mediante el teclado
	$(document).keydown(reproductorMusica.controlaTeclado);
});