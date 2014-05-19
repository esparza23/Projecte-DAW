<?php
	$ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
		session_start();
		$ficheros =  $_POST['ficheros'];
		$destino =  $_POST['destino'];
		$ficheros = json_decode($ficheros);

		$carpetaActual = $_SESSION['carpetaActual'];
		$correo =  $_SESSION['nom'];
		$ruta = "../Usuarios/".str_replace(".","_",$correo)."/".$carpetaActual."/";

		
		
		$destino = str_replace("Usuarios/".str_replace(".","_",$correo), "", $destino);

		foreach ($ficheros as $valor) {
			$origen = $ruta.$valor;
			$origen = str_replace("///", "/", $origen);
			$origen = str_replace("//", "/", $origen);

			$destino = "../Usuarios/".str_replace(".","_",$correo)."/".$destino."/".$valor;
			$destino = str_replace("///", "/", $destino);
			$destino = str_replace("//", "/", $destino);
			echo $origen."-".$destino."\n";
		    
		    if(rename($origen,$destino))
		    	echo "si-";
		    else echo "NO-";

		    $destino = str_replace( $valor,"", $destino);
		    $destino = str_replace( "../Usuarios/".str_replace(".","_",$correo)."/","", $destino);
		    
		}
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>