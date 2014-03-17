<?php session_start();
    include "funciones.php";
    $correo =  $_SESSION['nom'];
    $carpetaActual = $_SESSION['carpetaActual'];
    $nombreFich = $_POST['nombreFich'];

    if(unlink('../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreFich))
        echo 'SI - ../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreFich;
    else echo 'NO - ../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreFich;

?>