<?php 
    /*
    PHP que se conecta a la base de datos para comprobar si el correo existe para poder loguearse.
    Si existe devolvemos un si y vamos a la pagina de inicio del usuario. En caso contrario devolvemos un no.
    */
    $ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
        $usuario =  $_POST['usuario'];
        
        session_start();
        include "config.php";
        include "funciones.php";
        inicializaLocal();
        if( $_SESSION['local'])
            $db = new mysqli("localhost","savecloud","savecloud","SaveCloud");
        else
            $db = new mysqli("mysql2.000webhost.com","a1174599_cloud","ce3453275","a1174599_cloud");

        //borramos si tiene carpetas compartidas
        $query = "DELETE FROM compartidos WHERE propietario='$usuario' OR destinatario='$usuario'";
        $db->query($query); 

        $query = "DELETE FROM usuarios WHERE correo='$usuario'";
        $db->query($query); 
        //$usuario = str_replace(".","_",$usuario);
        borrar_directorio("../Usuarios/".str_replace(".","_",$usuario)."/",true);
        borrar_directorio("../Usuarios/tmp/".str_replace(".","_",$usuario)."/",true);
        echo "../Usuarios/".str_replace(".","_",$usuario)."/";
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>