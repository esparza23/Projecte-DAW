/* Libreria que controla el editor de textos*/

//Funcion que controla el tabulador en el textarea
$(document).delegate('#text', 'keydown', function(e) {
  var keyCode = e.keyCode || e.which;

  if (keyCode == 9) {
    e.preventDefault();
    var start = $(this).get(0).selectionStart;
    var end = $(this).get(0).selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    $(this).val($(this).val().substring(0, start)
                + "\t"
                + $(this).val().substring(end));

    // put caret at right position again
    $(this).get(0).selectionStart =
    $(this).get(0).selectionEnd = start + 1;
  }
});

jQuery(document).ready(function($) {

	$("#closeText").click(function(event) {
		$('#modalText').modal('hide')
	});

	//Cuando clickamos al boton guardar, enviaremos el texto al server para guardarlo en el archivo
	$("#save").click(function(event) {
		alert($("#text").val());
	});


});