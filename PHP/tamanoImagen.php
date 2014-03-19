<?php

	session_start();
	$fich =  $_POST['fichero'];
	$carpetaActual = $_SESSION['carpetaActual'];
	$correo =  $_SESSION['nom'];
	$pos = strpos($fich, "Usuarios/");
	//echo $pos;
	
	$ruta = "../".$fich;
	if (file_exists($ruta))
	{
		$valor=getimagesize($ruta);
		echo $valor[0]."/".$valor[1];
	}
	else echo "NO EXISTE - ".$fich ;
?>