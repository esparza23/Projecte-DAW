<?php
	$ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
		session_start();
		$ruta = "../".$_POST['ruta'];
		$cont = $_POST['cont'];
		
		
		if (file_exists($ruta))
		{
			if($cont=="")
				$cont="#Fichero Vacio ";
			echo $ruta;
			file_put_contents($ruta, $cont);
		}
		else echo "no valida : ".$ruta;
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>