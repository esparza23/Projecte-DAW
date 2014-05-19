<?php 
    /*
    PHP que se conecta a la base de datos para comprobar si el correo existe para poder loguearse.
    Si existe devolvemos un si y vamos a la pagina de inicio del usuario. En caso contrario devolvemos un no.
    */
    $ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
        $correo =  $_POST['emailLog'];
        $pass = $_POST['passLog'];
        
        session_start();
        include "config.php";
        inicializaLocal();
        if( $_SESSION['local'])
            $db = new mysqli("localhost","savecloud","savecloud","SaveCloud");
        else
            $db = new mysqli("localhost","root","edualberdi","SaveCloud");

        if ($db->connect_error) {
            die('Connect Error (' . $db->connect_errno . ') ' . $db->connect_error);
}

        $query = "SELECT * from usuarios WHERE correo = '$correo' AND password = '$pass'";
        if ($result = $db->query($query))
        {
            $rows_correu = $result->num_rows;
            if($rows_correu == 1 )
            {
                $row = $result->fetch_array();
                if($row[2]==1)
                    $_SESSION['admin'] = true;
                else
                    $_SESSION['admin'] = false;
                echo "si";
                //Session o algo no?
                $_SESSION['nom']=str_replace(".","_",$correo);
                $_SESSION['carpetaActual']="/";
                $_SESSION['ultCarpeta']= array();
                $_SESSION['numDown'] = 1;
                array_push($_SESSION['ultCarpeta'],"/");
            }
            else 
                echo "no";
            $result->close(); 
        }
        $db->close();
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>