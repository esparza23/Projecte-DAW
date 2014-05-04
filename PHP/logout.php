<?php
	session_start();

	$correo =  $_SESSION['nom'];
	
	$ruta = '../Usuarios/tmp/'.$correo."/";
	echo $ruta;
	if ($handle = opendir($ruta)) {

	    /* This is the correct way to loop over the directory. */
	    while (false !== ($entry = readdir($handle))) {
	        echo "$entry\n";
	        unlink($ruta.$entry);
	    }
	}

	$_SESSION = array();
 	session_destroy();
?>