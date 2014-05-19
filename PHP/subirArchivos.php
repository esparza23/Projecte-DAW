<?php 
    session_start();
    include "funciones.php";
    $correo =  $_SESSION['nom'];
    $carpetaActual = $_SESSION['carpetaActual'];
    //$form = $_POST['form'];
    $tmp_name = $_FILES['file']["tmp_name"];
    $name = $_FILES['file']["name"];
    $size = $_FILES['file']["size"];
   
    $carpeta = '../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual."/".$nombreCarp;
    //echo $carpeta.$name;
    $correo  = str_replace("_", ".", $correo);
    //echo $correo;
    //echo $carpeta;
    //var_dump($_FILES['file']);


    include "config.php";
    inicializaLocal();
    if( $_SESSION['local'])
        $db = new mysqli("localhost","savecloud","savecloud","SaveCloud");
    else
        $db = new mysqli("localhost","root","edualberdi","SaveCloud");

    $query = "SELECT * from usuarios WHERE correo = '$correo'";
    if ($result = $db->query($query))
    {
        $row = $result->fetch_array(MYSQLI_NUM);
        //echo "espai lliure: ".($row[3]-$row[4])."tamany fitxer: ".$size;
        if(($row[3]-$row[4])>=$size)
        {
            if(move_uploaded_file($tmp_name, $carpeta.$name))
                echo "SI";
            else "NO per ....";
        }
        else 
        {

            echo $correo."---".$row[3]."---".$row[4];
            echo "NO per espai";
        }
    }
    /*
    if(move_uploaded_file($tmp_name, $carpeta.$name))
        echo "SI";
    else "NO";*/
    //echo "HOLA";
    //echo ini_get( 'upload_max_filesize');
    //echo " - ";
    //echo ini_get( 'memory_limit');

?>