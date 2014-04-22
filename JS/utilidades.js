function mensaje(texto)
{
	$("#mensajes").html(texto)
	$("#mensajes").removeClass('hidden');
	$("#mensajes").animate({
		"opacity": 1
		},1000, 
		function() {
       	setTimeout(function(){
       		$("#mensajes").animate({
				"opacity": 0
   			},1000, 
   			function() {
					$("#mensajes").addClass('hidden');
			});
       	},5000);
	});
}