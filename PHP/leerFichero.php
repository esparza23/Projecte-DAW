<?php
	$ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
		session_start();
		$fich =  $_POST['fichero'];
		$carpetaActual = $_SESSION['carpetaActual'];
		$correo =  $_SESSION['nom'];
		if(stripos($carpetaActual, '@')===false)
			$ruta = "../Usuarios/".str_replace(".","_",$correo)."/".$carpetaActual."/".$fich;
		else
			$ruta = "../Usuarios/".$carpetaActual.$fich;

		//echo($carpetaActual);
		if (file_exists($ruta))
		{
			if($valor = file_get_contents($ruta))
				echo $valor;
			else
				echo "NO LEO";
		}
		else 
		{
			echo "NO EXISTE";
		}
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>