<?php
	session_start();
	$ficheros =  $_POST['ficheros'];
	$destino =  $_POST['destino'];
	$ficheros = json_decode($ficheros);

	$carpetaActual = $_SESSION['carpetaActual'];
	$correo =  $_SESSION['nom'];
	$ruta = "../Usuarios/".str_replace(".","_",$correo)."/".$carpetaActual."/";
	
	$destino = str_replace("Usuarios/".str_replace(".","_",$correo), "", $destino);
	foreach ($ficheros as $valor) {
		echo $ruta.$valor."-"."../Usuarios/".str_replace(".","_",$correo)."/".$destino."/".$valor;
	    
	    if(rename($ruta.$valor ,"../Usuarios/".str_replace(".","_",$correo)."/".$destino."/".$valor))
	    	echo "si-";
	    else echo "NO-";
	    
	}
?>