<?php 

	//FUncion para borrar un directorio(y todo los de dentro)
	function borrar_directorio($dir, $borrarme)
	{
	    if(!$dh = @opendir($dir)) return;
	    while (false !== ($obj = readdir($dh))) 
	    {
	        if($obj=='.' || $obj=='..') continue;
	        if (!@unlink($dir.'/'.$obj)) borrar_directorio($dir.'/'.$obj, true);
	    }
	    closedir($dh);
	    if ($borrarme)
	    {
	        @rmdir($dir);
	    }
	}

	/*Funcion que deuvelve un string con el tamaño de manera legible*/
	function FileSizeConvert($bytes)
	{
	    $bytes = floatval($bytes);
	        $arBytes = array(
	            0 => array(
	                "UNIT" => "TB",
	                "VALUE" => pow(1024, 4)
	            ),
	            1 => array(
	                "UNIT" => "GB",
	                "VALUE" => pow(1024, 3)
	            ),
	            2 => array(
	                "UNIT" => "MB",
	                "VALUE" => pow(1024, 2)
	            ),
	            3 => array(
	                "UNIT" => "KB",
	                "VALUE" => 1024
	            ),
	            4 => array(
	                "UNIT" => "B",
	                "VALUE" => 1
	            ),
	        );

	    foreach($arBytes as $arItem)
	    {
	        if($bytes >= $arItem["VALUE"])
	        {
	            $result = $bytes / $arItem["VALUE"];
	            $result = str_replace(".", "," , strval(round($result, 2)))." ".$arItem["UNIT"];
	            break;
	        }
	    }
	    return $result;
	}

	//Funcion que muestra una carpeta del usuario que ha iniciado sesion, dado un subdirectorio.
	function mostraDir($dir)
	{
		$tot = Array();
		$tamanos = Array();
		$ficheros = Array();
		$dir = '../Usuarios/'.str_replace(".","_",$_SESSION['nom']).$dir;
		//echo $dir;
		if ($handle = opendir($dir)) {
		    while (false !== ($entry = readdir($handle))) {
		        if ($entry != "." && $entry != ".." && $entry[0] != '.') 
		        {
					if(is_dir($dir.'/'.$entry)) 
					{
						array_push($ficheros, "/$entry");
						array_push($tamanos, FileSizeConvert(filesize($dir.'/'.$entry)));
					}
					else
					{
						array_push($ficheros, "$entry");
						array_push($tamanos, FileSizeConvert(filesize($dir.'/'.$entry)));
					}
		        }
		    }
		    closedir($handle);
		}
		array_push($tot,$ficheros);
		array_push($tot,$tamanos);
		return $tot;
		//print_r($ficheros);
	}
?>