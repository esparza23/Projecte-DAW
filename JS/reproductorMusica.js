/* Libreria que controla el reproductor de musica */

var songs;
var indexSong;
var abiertoMusica;
var reproduciendoMusica;

jQuery(document).ready(function($) {

	abiertoMusica = true;
	reproduciendoMusica = true;

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


	/* Parar y accionar el marquee amb mouse
	$("#nomSong").mouseover(function(event) {
		document.getElementById('nomSong').start();
	});
	$("#nomSong").mouseout(function(event) {
		document.getElementById('nomSong').stop();
	});
	*/
    document.getElementById("audio").addEventListener('play', function(e) {
		$("#butPauseMus").children().removeClass('glyphicon-play');
		$("#butPauseMus").children().addClass('glyphicon-pause');
	}, true);
	document.getElementById("audio").addEventListener('pause', function(e) {
	   	$("#butPauseMus").children().removeClass('glyphicon-pause');
		$("#butPauseMus").children().addClass('glyphicon-play');	
	}, true);

	//funcion que repdroduce la siguiente cancion(si hay)
	function nextSong()
	{
		indexSong++;
		if(indexSong == songsPlaying.length)
			indexSong = 0;
		$("#audio").attr("src",songsPlaying[indexSong]);
		$("#music").load();
		$("#audio")[0].play();
		var ult = songsPlaying[indexSong].lastIndexOf("/");
		$("#nomSong").text(songsPlaying[indexSong].substring(ult+1,songsPlaying[indexSong].length));
	}

	//funcion que repdroduce la anterior cancion(si hay)
	function prevSong()
	{
		indexSong--;
		if(indexSong==-1)
			indexSong = songsPlaying.length-1;
		$("#audio").attr("src",songsPlaying[indexSong]);
		$("#music").load();
		$("#audio")[0].play();
		var ult = songsPlaying[indexSong].lastIndexOf("/");
		$("#nomSong").text(songsPlaying[indexSong].substring(ult+1,songsPlaying[indexSong].length));
	}

	//Funciones que controlan los botones de anterios/siguiente/pausa
	$("#butBackMus").unbind('click').click(function(event) {
		prevSong();
	});
	$("#butForMus").unbind('click').click(function(event) {
		nextSong();
	});

	$("#butPauseMus").unbind('click').click(function(event) {
		var but = $(this).children();
		if(but.hasClass('glyphicon-pause'))
		{
			but.removeClass('glyphicon-pause');
			but.addClass('glyphicon-play');
			$("#audio")[0].pause();
		}
		else
		{
			but.removeClass('glyphicon-play');
			but.addClass('glyphicon-pause');
			$("#audio")[0].play();
		}
	});

	document.getElementById('audio').addEventListener('ended', function()
	{
		nextSong();
	}, false);

	//funcion que controla el boton cerrar el reproductor de musica
	$("#closeMus").click(function(event) {
			$("#repMusica").animate({
				"height": "0px",
				"opacity": 0},
				500);
			$("#audio").css("display","none")
			$(this).css("display","none")
			$("#audio")[0].pause();
	});

	//funcion que controla el reproductor mediante el teclado
	$(document).keydown(function(event) {
		//console.log(event.keyCode);
		if(abiertoMusica && ! abiertoPictures && !abiertoVideo)
		{
			switch(event.keyCode)
			{
				case 37:
					prevSong();
					break;
				case 39:
					nextSong();
					break;
				case 32:
					if(reproduciendoMusica)
						$("#audio")[0].pause();
					else
						$("#audio")[0].play();
					reproduciendoMusica = !reproduciendoMusica;
					break;
			}
		}
	});
});