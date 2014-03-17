<?php 
    /*
    PHP que se conecta a la base de datos para comprobar si el correo existe para poder loguearse.
    Si existe devolvemos un si y vamos a la pagina de inicio del usuario. En caso contrario devolvemos un no.
    */
    $correo =  $_POST['emailLog'];
    $pass = $_POST['passLog'];
    
    session_start();
    $db = new mysqli("localhost","savecloud","savecloud","SaveCloud");
    $query = "SELECT * from usuarios WHERE correo = '$correo' AND password = '$pass'";
    if ($result = $db->query($query))
    {
        $rows_correu = $result->num_rows;
        if($rows_correu == 1 )
        {
            echo "si";
            //Session o algo no?
            $_SESSION['nom']=str_replace(".","_",$correo);
            $_SESSION['carpetaActual']="/";
            $_SESSION['ultCarpeta']= array();
            array_push($_SESSION['ultCarpeta'],"/");
        }
        else 
            echo "no";
        $result->close(); 
    }
    $db->close();
?>