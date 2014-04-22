<?php 
    session_start();
    include "funciones.php";
    include "tamanoDir.php";
    $correo =  $_SESSION['nom'];
    $carpetaActual = $_SESSION['carpetaActual'];
    $carpeta = $_POST['carpeta'];
    $op = $_POST['op'];
    $array = Array();
    switch($op)
    {
        //Recargar pagina
        case 0:
            //mostramaos los archivos con el tamaño del directorio
            $array = mostraDir($carpetaActual);
            //enviamos el historial
            array_push($array,$_SESSION['ultCarpeta']);
            //añadimos la ruta actual para devolverla al JA
            array_push($array,$carpetaActual);
            array_push($array,"Usuarios/".str_replace(".","_",$correo));

            //Lo "enviamos" como respuesta
            break;

        //Acceso mediante carpetas
        case 1:
            $carpetaActual .= $carpeta;
            //mostramaos los archivos con el tamaño del directorio
            $array = mostraDir($carpetaActual);

            array_push($_SESSION['ultCarpeta'],$carpetaActual);
            array_push($array,$_SESSION['ultCarpeta']);
            array_push($array,$carpetaActual);
            array_push($array,"Usuarios/".str_replace(".","_",$correo));

            //array_push($_SESSION['ultCarpeta'],$_SESSION['ultCarpeta'][count($_SESSION['ultCarpeta'])-1].$carpetaActual);
            $_SESSION['carpetaActual'] = $carpetaActual ;
            //array_push($array, $_SESSION['ultCarpeta']);
            //array_push($array,"Usuarios/".str_replace(".","_",$correo).$_SESSION['carpetaActual']);
            break;

        //atras
        case 2:
            
            if(count($_SESSION['ultCarpeta'])>1)
            {
                $dir = array_pop($_SESSION['ultCarpeta']);
                $dir = $_SESSION['ultCarpeta'][count($_SESSION['ultCarpeta'])-1];
            }
            else
            {
                $dir = $_SESSION['ultCarpeta'][count($_SESSION['ultCarpeta'])-1];
            }
            $array = mostraDir($dir); 
            $_SESSION['carpetaActual'] = $dir ;
            array_push($array,$_SESSION['ultCarpeta']);
            array_push($array,$dir);
            array_push($array,"Usuarios/".str_replace(".","_",$correo));
            break;

        //Acceso mediante navigator
        case 3:
            //mostramaos los archivos con el tamaño del directorio
            $carpetaActual = $carpeta;
            $array = mostraDir($carpetaActual);

            array_push($_SESSION['ultCarpeta'],$carpetaActual);
            array_push($array,$_SESSION['ultCarpeta']);
            array_push($array,$carpetaActual);
            array_push($array,"Usuarios/".str_replace(".","_",$correo));

            //array_push($_SESSION['ultCarpeta'],$_SESSION['ultCarpeta'][count($_SESSION['ultCarpeta'])-1].$carpetaActual);
            $_SESSION['carpetaActual'] = $carpetaActual ;
            //array_push($array, $_SESSION['ultCarpeta']);
            //array_push($array,"Usuarios/".str_replace(".","_",$correo).$_SESSION['carpetaActual']);
            break;

    }

    
    $SIZE_LIMIT = 1000000001; // 5 GB
    $disk_used = foldersize("../Usuarios/carlesesparza@gmail_com/");

    $disk_remaining = $SIZE_LIMIT - $disk_used;

    array_push($array,format_size($SIZE_LIMIT));
    array_push($array,format_size($disk_used));
    array_push($array,format_size($disk_used)*100/(format_size($SIZE_LIMIT)*1000));
    echo json_encode($array);
?>