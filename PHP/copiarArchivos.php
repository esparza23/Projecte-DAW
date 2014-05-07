<?php session_start();

    $ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
        include "funciones.php";
        $correo =  $_SESSION['nom'];
        $carpetaActual = $_SESSION['carpetaActual'];
        $nombreFich = $_POST['nombreFich'];
        $rutaCopy = $_POST['rutaCopy'];
        $carp = $_POST['carp'];

        $copy = '../'.$rutaCopy.$nombreFich;
        $dest = '../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$carpetaActual;
        if($carp==0)
        {
            /*
           	echo "archivo: ".$copy."---";
            echo "destino: ".$dest."---";
            echo stripos($dest, $copy)."---";
        	*/

            if($copy."/" == $dest )
            	echo "NO";
            else if(stripos($dest, $copy."/") !== false)
            	echo "NO";
            else 
            {
            	$dest = $dest.$nombreFich;
            	if($copy == $dest)	
            	{
            		$ultPunt = strrpos($dest, '.');
        	    	$fi = substr($dest, 0,$ultPunt);
        	    	$ext = substr($dest, $ultPunt,strlen($dest));
            		$number = 1;
        		    do
        		    {
        		    	$number++;
        		    }while(file_exists($fi."-".$number.$ext));
        		    $dest = $fi."-".$number.$ext;
            	}
            	if(smartCopy($copy, $dest))
            		echo "copiado";
        	    else
        	    {
        	    	echo "NOOOOO HAURIA DE SORTIR JO";
        	    }	    

            }
        }
        else
        {
             echo $copy." - ".$dest."\n";
        }
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>