<?php session_start();
    
    $ajax = $_POST['ajax'];
    if($ajax == "ajax")
    {
        include "funciones.php";
        $correo =  $_SESSION['nom'];
        $carpetaActual = $_SESSION['carpetaActual'];
        $archivos = $_POST['archivos'];

    	$archivos = json_decode($archivos);
        //echo ($archivos);
        //var_dump($archivos);
        
        $ruta = '../Usuarios/'.$correo.$carpetaActual;
        foreach ($archivos as $key => $value) {
        	//echo $value;
        	if($value[0]=="/")
        		$archivos[$key] = $ruta."/".$value;
        	else
        		$archivos[$key] = $ruta."//".$value;
        }

       	//var_dump($archivos);
       	//echo "\n";
        //comprimirDirectorio($ruta,$carpetaActual,"HA",$archivos);
        //echo array_search("adios", array("hola","adios"));

        $zipname = '../Usuarios/tmp/'.$correo.'/download'.$_SESSION['numDown'].'.zip';
        unlink($zipname);
        $zip = new ZipArchive;
        $res = $zip->open($zipname, ZipArchive::CREATE);
        if ($res === TRUE) 
        {
            $directorio = $ruta.$carpetaActual;
            //echo $directorio."\n";
            foreach ($archivos as $key => $value) {
                //echo "valor - ".$value."\n";
            	if(is_dir($value))
            	{
            		//echo $value."es dir\n";
            		comprimirDirectorio($value, $zip,$correo);  
            	}
            	else
            	{
            		//echo $value."no es dir\n";
            		$zip->addFile($value,"download".$_SESSION['numDown'].str_replace("../Usuarios/".$correo, "", $value));   
            	}
            }
            $zip->close();
        }
        $_SESSION['numDown']+=1;
        echo $zipname;
    }
    else
    {
        header( 'Location: Index.php' ) ;
    }
?>