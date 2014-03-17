<?php session_start();
    include "funciones.php";
    $correo =  $_SESSION['nom'];
    $carpetaActual = $_SESSION['carpetaActual'];
    $nombreCarp = $_POST['nombreCarp'];

    borrar_directorio('../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreCarp,true);

?>