/* Libreria que controla el editor de textos*/

var editorTextos = 
{
    editor : null,

    cargaTexto : function(event,ruta)   //Funcion que carga el texto del archivo a mostrar en el editorss
    {
        //archivos(event.target.id);
        //Arreglar esta linnea para ficheros compartidos
        //ruta = ruta.replace(gestionArchivos.usRuta,"");
        
        //alert(ruta);
        $("#textDiv").addClass('hidden');
        $("#cargandoText").removeClass('hidden');
        $.ajax({
            type: "POST",
            url: "PHP/leerFichero.php",
            data: "fichero="+event.target.id.replace("span-","").replace("img-","")+"&ajax=ajax",
            dataType: "html",
            error: function()
            {
             alert("error petición ajax");
            },
            success: function(data)
            { 
                $("#nameFitx").text(event.target.id.replace("span-","").replace("img-",""));
                $("#nameFitx").attr("ruta",ruta);
                editorTextos.editor.setValue(data);
                setTimeout(function(){
                    $("#textDiv").removeClass('hidden');
                    $("#cargandoText").addClass('hidden');
                    editorTextos.editor.refresh();
                    editorTextos.editor.clearHistory();
                    editorTextos.editor.setCursor(0,0);
                    var mode="";
                    var ext = $("#nameFitx").text().slice($("#nameFitx").text().indexOf(".")+1,$("#nameFitx").text().length);
                    switch(ext)
                    {
                        case "js":
                            mode = "text/javascript"
                            break;
                        case "css":
                            mode = "text/css";
                            break;
                        case "html":    //no furula be crec
                            mode ="text/html";
                            break;
                        case "xml":     //no furula be crec
                            mode ="application/xml";
                            break;
                        case "c":
                            mode= "text/x-csrc";
                            break;
                        case "h":
                            mode= "text/x-csrc";
                            break;
                        case "cpp":
                            mode= "text/x-c++src";
                            break;
                        case "java":
                            mode= "text/x-java";
                            break;
                        case "php":
                            mode= "text/x-php";
                            break;
                        case "sql":     //no furula be crec
                            mode= "text/x-mysql";
                            break;

                    };
                    editorTextos.editor.setOption("mode",mode);
                    alert(editorTextos.editor.getOption("mode"));
                },1000);
            }
          });
    },
    guardar : function()    //funcion para guardar el fichero
    {
        //console.log($("#text").val());
        //console.log($("#nameFitx").text());
        //console.log($("#nameFitx").attr("ruta"));
        //console.log(editor.getValue());
        alert("HOLA");
        $.ajax({
            type: "POST",
            url: "PHP/guardarFichero.php",
            data: "ruta="+$("#nameFitx").attr("ruta")+$("#nameFitx").text()+"&cont="+editorTextos.editor.getValue()+"&ajax=ajax",
            dataType: "html",
            error: function()
            {
                alert("error petición ajax");
            },
            success: function(data)
            { 
                console.log(data);
            }
        });
    },
    cerrar : function()     //funcion para cerrar el editr de textos
    {
        editorTextos.editor.markClean();
        $('#modalText').modal('hide');
    },
    cambiarNombre : function()      //funcion para cambiar el nombre del archivo
    {
        $(this).empty();
        $(this).append
        (
          $(document.createElement("input"))
            .attr("type","text")
            .attr("placeholder","nombre fichero")
        )
    }
}

//eventos del editor de textos que declaramos al cargarse el documento
jQuery(document).ready(function($) {

    //evento doble click sobre el nombre para cambiarlo
    $("#nameFitx").dblclick(editorTextos.cambiarNombre);

    //evento para cerrar el editor de texto
    $("#closeText").click(editorTextos.cerrar);

    //Cuando clickamos al boton guardar, enviaremos el texto al server para guardarlo en el archivo
    $("#save").click(editorTextos.guardar);
});