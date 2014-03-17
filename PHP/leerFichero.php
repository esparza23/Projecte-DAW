<?php
	session_start();
	$fich =  $_POST['fichero'];
	$carpetaActual = $_SESSION['carpetaActual'];
	$correo =  $_SESSION['nom'];
	$ruta = "../Usuarios/".str_replace(".","_",$correo)."/".$carpetaActual."/".$fich;
	echo $ruta;
	if (file_exists($ruta))
	{
		if($valor = file_get_contents($ruta))
			echo $valor;
		else
			echo "NO LEO";
	}
	else echo "NO EXISTE";
?>