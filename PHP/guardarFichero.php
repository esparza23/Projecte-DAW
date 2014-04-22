<?php
	session_start();
	$ruta = "../".$_POST['ruta'];
	$cont = $_POST['cont'];
	
	
	if (file_exists($ruta))
	{
		echo $ruta;
		file_put_contents($ruta, $cont);
	}
	else echo "no valida : ".$ruta;;
?>