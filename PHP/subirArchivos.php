<?php 
    session_start();
    include "funciones.php";
    $correo =  $_SESSION['nom'];
    $carpetaActual = $_SESSION['carpetaActual'];
    //$form = $_POST['form'];
    $tmp_name = $_FILES['file']["tmp_name"];
    $name = $_FILES['file']["name"];
   
    $carpeta = '../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreCarp;
    echo $carpeta.$name;
    //echo $carpeta;
    //var_dump($_FILES['file']);
    if(move_uploaded_file($tmp_name, $carpeta.$name))
        echo "SI";
    else "NO";
    echo ini_get( 'upload_max_filesize');
    echo " - ";
    echo ini_get( 'memory_limit');

?>