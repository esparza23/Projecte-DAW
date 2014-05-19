<?php session_start();
	$ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
	    include "funciones.php";
	    $correo =  $_SESSION['nom'];
	    $carpetaActual = $_SESSION['carpetaActual'];
	    $nombreCarp = $_POST['nombreCarp'];

	    borrar_directorio('../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreCarp,true);
	    //var_dump($_SESSION['ultCarpeta']);
	    foreach ($_SESSION['ultCarpeta'] as $valor) {
		    if(str_replace("/","",$valor) == $nombreCarp)
		   		echo "SI"."\n";
		   	else echo "NO"."\n";
		   	//echo str_replace("/","",$valor)."-".$nombreCarp."\n";
		}
	}  
    else
    {
        header( 'Location: Index.php' ) ;
    }

?>