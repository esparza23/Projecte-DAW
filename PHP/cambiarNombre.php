<?php session_start();
    /*
    */
    $ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
        $fichero =  $_POST['fichero'];
        $nombre =  $_POST['nombre'];
        $ext =  $_POST['ext'];

        $correo =  $_SESSION['nom'];
        $carpetaActual = $_SESSION['carpetaActual'];
        $oldname = '../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual.$fichero;
        $newname = '../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual.$nombre.'.'.$ext;
        
        if(rename($oldname,$newname))
            echo $oldname." - ".$newname;
        else
            echo "NO VA";    
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>