<?php session_start();
    
    $ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
    	$correo =  $_POST['nombre'];
    	$usuario = str_replace("_",".",$_SESSION['nom']);
    	if($correo == $usuario)
    		echo "1";
    	else
    	{
	    	session_start();
	        include "config.php";
	        inicializaLocal();
	        if( $_SESSION['local'])
	            $db = new mysqli("localhost","savecloud","savecloud","SaveCloud");
	        else
	            $db = new mysqli("mysql2.000webhost.com","a1174599_cloud","ce3453275","a1174599_cloud");

	        $query = "SELECT * from usuarios WHERE correo = '$correo' ";
	        if ($result = $db->query($query))
	        {
	            $rows_correu = $result->num_rows;
	            if($rows_correu == 1 )
	            {
	            	$ruta = "/".str_replace(".","_",$usuario)."/Public";
	                $query = "INSERT INTO compartidos VALUES('$usuario','$correo','$ruta','L')";
	                if ($result = $db->query($query))
	        		{
	                	echo $query;
	                }
	                else echo "3";
	            }
	            else 
	                echo "2";
	            $result->close(); 
	        }
	        $db->close();
	    }
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>