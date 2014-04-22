/* Libreria que controla el reproductor de videos */

var videos;
var indexVids;
var abiertoVideo;
var reproduciendoVideo;

jQuery(document).ready(function($) {

	abiertoVideo = false;
	reproduciendoVideo = false;

	$("#closeVid").click(function(event) {
		$('#modalVideo').modal('hide')
	});

	$('#modalVideo').on('show.bs.modal', function (e) {
		if(reproduciendoMusica)
			$("#audio")[0].pause();
	});

	$('#modalVideo').on('hidden.bs.modal', function (e) {
		$("#video")[0].pause();
	});

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

	//funcion que repdroduce la siguiente cancion(si hay)
	function nextVid()
	{
		indexVids++;
		if(indexVids == videos.length)
			indexVids = 0;
		$("#vid").attr("src",videos[indexVids]);
		$("#video").load();
		setTimeout(function(){
			$("#video")[0].play();
		},1000);
	}

	//funcion que repdroduce la anterior cancion(si hay)
	function prevVid()
	{
		indexVids--;
		if(indexVids==-1)
			indexVids = videos.length-1;
		$("#vid").attr("src",videos[indexVids]);
		$("#video").load();
		setTimeout(function(){
			$("#video")[0].play();
		},1000);
	}

	document.getElementById("video").addEventListener('play', function(e) {
		$("#butPauseVid").children().removeClass('glyphicon-play');
		$("#butPauseVid").children().addClass('glyphicon-pause');
	}, true);
	document.getElementById("video").addEventListener('pause', function(e) {
	   	$("#butPauseVid").children().removeClass('glyphicon-pause');
		$("#butPauseVid").children().addClass('glyphicon-play');	
	}, true);
	document.getElementById("video").addEventListener("volumechange",function(e) {
	   	$( "#sliderVolVid" ).slider("value",	$("#video")[0].volume);	
	}, true);

	//Funciones que controlan los botones de anterios/siguiente/pausa
	$("#butBackVid").unbind('click').click(function(event) {
		prevVid();
	});
	$("#butForVid").unbind('click').click(function(event) {
		nextVid();
	});
	$("#butPauseVid").unbind('click').click(function(event) {
		var but = $(this).children();
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
	});

	$("#butResizeVid").unbind('click').click(function(event) {
		var elem = document.getElementById("video");
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
	});
});