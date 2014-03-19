/* Libreria que controla el reproductor de musica */

var songs;
var indexSong;

jQuery(document).ready(function($) {

	var abiertoMusica = true;
	var reproduciendoMusica = true;

	//funcion que repdroduce la siguiente cancion(si hay)
	function nextSong()
	{
		indexSong++;
		if(indexSong == songs.length)
			indexSong = 0;
		$("#audio").attr("src",songs[indexSong]);
		$("#music").load();
		$("#audio")[0].play();
	}

	//funcion que repdroduce la anterior cancion(si hay)
	function prevSong()
	{
		indexSong--;
		if(indexSong==-1)
			indexSong = songs.length-1;
		$("#audio").attr("src",songs[indexSong]);
		$("#music").load();
		$("#audio")[0].play();
	}

	//Funciones que controlan los botones de anterios/siguiente
	$("#butBack").unbind('click').click(function(event) {
		prevSong();
	});
	$("#butFor").unbind('click').click(function(event) {
		nextSong();
	});

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
		if(abiertoMusica)
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