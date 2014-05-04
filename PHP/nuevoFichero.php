<?php session_start();
    $ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
        include "funciones.php";
        $correo =  $_SESSION['nom'];
        $carpetaActual = $_SESSION['carpetaActual'];
        $nombre = $_POST['nombre'];
        $ext = $_POST['ext'];


        $ruta = '../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombre;
        if(!file_exists($ruta.".".$ext))
        {
        	fopen($ruta.".".$ext, "w");
            file_put_contents($ruta.".".$ext, "#Fichero Vacio ");
            //echo "no existe - ".$ruta;
        }
        else
        {
            //echo "ya existe";
        	$number = 1;
    	    do
    	    {
    	    	$number++;
    	    }while(file_exists($ruta." ".$number.".".$ext));
            fopen($ruta." ".$number.".".$ext, "w");
            file_put_contents($ruta." ".$number.".".$ext, "#Fichero Vacio ");
            echo $ruta." ".$number.".".$ext;
        }
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>