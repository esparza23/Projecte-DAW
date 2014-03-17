<?php
	session_start();
	$fich =  $_POST['fichero'];
	$carpetaActual = $_SESSION['carpetaActual'];
	$correo =  $_SESSION['nom'];
	$ruta = "../Usuarios/".str_replace(".","_",$correo).$carpetaActual."/".$fich;
	//echo $ruta;
	if (file_exists($ruta))
	{
		$valor=getimagesize($ruta);
		echo $valor[0]."/".$valor[1];
	}
	else echo "NO EXISTE";
?>