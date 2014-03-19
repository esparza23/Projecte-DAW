/* Libreria que controla el reproductor de videos */

var videos;
var indexVids;

jQuery(document).ready(function($) {

	var abiertoVideo = true;
	var reproduciendoVideo = true;

	$("#closeVid").click(function(event) {
		$('#modalVideo').modal('hide')
	});

	$('#modalVideo').on('hidden.bs.modal', function (e) {
		$("#video")[0].pause();
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

	//Funciones que controlan los botones de anterios/siguiente
	$("#butBackVid").unbind('click').click(function(event) {
		prevVid();
	});
	$("#butForVid").unbind('click').click(function(event) {
		nextVid();
	});
});