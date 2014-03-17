<?php 
    /*
    PHP que se conecta a la base de datos para comprobar si el correo existe para poder registrarse.
    Si existe devolvemos un no. En caso contrario devolvemos un si y creamos el usuario.
    */
    $correo =  $_POST['emailReg'];
    $pass = $_POST['passReg'];
    
    $db = new mysqli("localhost","savecloud","savecloud","SaveCloud");
    $query = "SELECT * from usuarios WHERE correo = '$correo'";
    if ($result = $db->query($query))
    {
        $rows_correu = $result->num_rows;
        if($rows_correu == 1 )
            echo "no";
        else 
        {
            $query = "INSERT INTO usuarios VALUES('$correo','$pass')";
            if ($db->query($query))
            {
                echo "si";
                //crear carpeta i tal i qual.
                $usFolder = str_replace(".","_",$correo);
                mkdir("../Usuarios/".$usFolder);
                mkdir("../Usuarios/".$usFolder."/Musica");
                mkdir("../Usuarios/".$usFolder."/Fotos");
            }
        }
        $result->close(); 
    }
    $db->close();
?>