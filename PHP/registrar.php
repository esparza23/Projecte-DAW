<?php 
    /*
    PHP que se conecta a la base de datos para comprobar si el correo existe para poder registrarse.
    Si existe devolvemos un no. En caso contrario devolvemos un si y creamos el usuario.
    */
    $ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
        $correo =  $_POST['emailReg'];
        $pass = $_POST['passReg'];
        $admin = $_POST['admin'];
        
        session_start();
        include "config.php";
        inicializaLocal();
        if( $_SESSION['local'])
            $db = new mysqli("localhost","savecloud","savecloud","SaveCloud");
        else
           $db = new mysqli("mysql2.000webhost.com","a1174599_cloud","ce3453275","a1174599_cloud");
       
        $query = "SELECT * from usuarios WHERE correo = '$correo'";
       
        if ($result = $db->query($query))
        { 
            $rows_correu = $result->num_rows;
            if($rows_correu == 1 )
                echo "no";
            else 
            {
                $query = "INSERT INTO usuarios VALUES('$correo','$pass',$admin,1000000001,0)";
                if ($db->query($query))
                {
                    echo "si";
                    //crear carpeta i tal i qual.
                    $usFolder = str_replace(".","_",$correo);
                    mkdir("../Usuarios/".$usFolder);
                    mkdir("../Usuarios/tmp/".$usFolder);
                    mkdir("../Usuarios/".$usFolder."/Musica");
                    mkdir("../Usuarios/".$usFolder."/Fotos");
                    mkdir("../Usuarios/".$usFolder."/Public");
                }
                else
                    echo"NOOOOO";
            }
            $result->close(); 
        };
        $db->close();
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>