<?php 
    $ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
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

            //Acceso mediante carpeta a carpeta publica
            case 4:
                $carpetaActual = "../Usuarios/".$carpeta;
                //mostramaos los archivos con el tamaño del directorio
                $array = mostraDirCompartit($carpetaActual);

                array_push($_SESSION['ultCarpeta'],$carpetaActual);
                array_push($array,$_SESSION['ultCarpeta']);
                array_push($array,$carpetaActual);
                array_push($array,"Usuarios/".str_replace(".","_",$correo));

                //array_push($_SESSION['ultCarpeta'],$_SESSION['ultCarpeta'][count($_SESSION['ultCarpeta'])-1].$carpetaActual);
                $_SESSION['carpetaActual'] = $carpetaActual ;
                //array_push($array, $_SESSION['ultCarpeta']);
                //array_push($array,"Usuarios/".str_replace(".","_",$correo).$_SESSION['carpetaActual']);
                break;

            //atras con carpeta publica
            case 5:
                $carpetaActual = "../Usuarios/".$carpeta;
                //mostramaos los archivos con el tamaño del directorio
                $array = mostraDirCompartit($carpetaActual);
                if(count($_SESSION['ultCarpeta'])>1)
                    array_pop($_SESSION['ultCarpeta']);
                //array_push($_SESSION['ultCarpeta'],$carpetaActual);
                array_push($array,$_SESSION['ultCarpeta']);
                array_push($array,$carpetaActual);
                array_push($array,"Usuarios/".str_replace(".","_",$correo));

                //array_push($_SESSION['ultCarpeta'],$_SESSION['ultCarpeta'][count($_SESSION['ultCarpeta'])-1].$carpetaActual);
                $_SESSION['carpetaActual'] = $carpetaActual ;
                //array_push($array, $_SESSION['ultCarpeta']);
                //array_push($array,"Usuarios/".str_replace(".","_",$correo).$_SESSION['carpetaActual']);
            break;

            //actualizar con carpeta publica
            case 6: 
                $carpetaActual = "../Usuarios/".$carpeta;
                //mostramaos los archivos con el tamaño del directorio
                $array = mostraDirCompartit($carpetaActual);
                //array_push($_SESSION['ultCarpeta'],$carpetaActual);
                array_push($array,$_SESSION['ultCarpeta']);
                array_push($array,$carpetaActual);
                array_push($array,"Usuarios/".str_replace(".","_",$correo));
            break;

        }

        
        $SIZE_LIMIT = 1000000001; // 5 GB
        $disk_used = foldersize("../Usuarios/".$correo."/");

        $correo  = str_replace("_", ".", $correo);
        /* Actualizamos el espacio usado en disco del usuario*/
        include "config.php";
        inicializaLocal();
        if( $_SESSION['local'])
            $db = new mysqli("localhost","savecloud","savecloud","SaveCloud");
        else
            $db = new mysqli("mysql2.000webhost.com","a1174599_cloud","ce3453275","a1174599_cloud");

        $query = "UPDATE usuarios SET espacio_usado = '$disk_used' WHERE correo = '$correo'";
        $db->query($query); 

        $query = "SELECT * from usuarios WHERE correo = '$correo'";
        if ($result = $db->query($query))
        {
            $row = $result->fetch_array(MYSQLI_NUM);
            $SIZE_LIMIT = $row[3];
        }

        $disk_remaining = $SIZE_LIMIT - $disk_used;

        array_push($array,format_size($SIZE_LIMIT));
        array_push($array,format_size($disk_used));
        array_push($array,($disk_used*100)/$SIZE_LIMIT);
        
        

        $query = "SELECT * from compartidos WHERE destinatario = '$correo'";
        
        if ($result = $db->query($query))
        {
            while($row = $result->fetch_array())
            {
                $compartidas[] = Array($row[0],$row[1],$row[2],$row[3]);
            }
            $rows_correu = $result->num_rows;
            $row = $result->fetch_array(MYSQLI_NUM);
            $compartida = Array($row[0],$row[1],$row[2],$row[3]);
            //var_dump($compartida);
            $result->close(); 
        }
        $db->close();
        array_push($array,$compartidas);
        //var_dump($compartidas);
        echo json_encode($array);
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>