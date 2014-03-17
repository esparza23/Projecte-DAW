<?php session_start();
    include "funciones.php";
    $correo =  $_SESSION['nom'];
    $carpetaActual = $_SESSION['carpetaActual'];
    $nombreCarp = $_POST['nombreCarp'];



    if(mkdir('../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreCarp))
    	echo '../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreCarp;
    else
    {
    	$number = 1;
	    do
	    {
	    	$number++;
	    }while(!(mkdir('../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreCarp." ".$number)));
	    echo '../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreCarp;
    }
?>