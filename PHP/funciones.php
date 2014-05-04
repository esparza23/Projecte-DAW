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
	                "VALUE" => pow(1000, 4)
	            ),
	            1 => array(
	                "UNIT" => "GB",
	                "VALUE" => pow(1000, 3)
	            ),
	            2 => array(
	                "UNIT" => "MB",
	                "VALUE" => pow(1000, 2)
	            ),
	            3 => array(
	                "UNIT" => "KB",
	                "VALUE" => 1000
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

	function mostraDirCompartit($dir)
	{
		$tot = Array();
		$tamanos = Array();
		$ficheros = Array();
		$dir = "../Usuarios/".$dir;
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
	}

	function smartCopy($source, $dest, $options=array('folderPermission'=>0755,'filePermission'=>0755)) 
    { 
        $result=false; 
        
        if (is_file($source)) { 
            if ($dest[strlen($dest)-1]=='/') { 
                if (!file_exists($dest)) { 
                    cmfcDirectory::makeAll($dest,$options['folderPermission'],true); 
                } 
                $__dest=$dest."/".basename($source); 
            } else { 
                $__dest=$dest; 
            } 
            $result=copy($source, $__dest); 
            chmod($__dest,$options['filePermission']); 
            
        } elseif(is_dir($source)) { 
            if ($dest[strlen($dest)-1]=='/') { 
                if ($source[strlen($source)-1]=='/') { 
                    //Copy only contents 
                } else { 
                    //Change parent itself and its contents 
                    $dest=$dest.basename($source); 
                    @mkdir($dest); 
                    chmod($dest,$options['filePermission']); 
                } 
            } else { 
                if ($source[strlen($source)-1]=='/') { 
                    //Copy parent directory with new name and all its content 
                    @mkdir($dest,$options['folderPermission']); 
                    chmod($dest,$options['filePermission']); 
                } else { 
                    //Copy parent directory with new name and all its content 
                    @mkdir($dest,$options['folderPermission']); 
                    chmod($dest,$options['filePermission']); 
                } 
            } 

            $dirHandle=opendir($source); 
            while($file=readdir($dirHandle)) 
            { 
                if($file!="." && $file!="..") 
                { 
                     if(!is_dir($source."/".$file)) { 
                        $__dest=$dest."/".$file; 
                    } else { 
                        $__dest=$dest."/".$file; 
                    } 
                    //echo "$source/$file ||| $__dest<br />"; 
                    $result=smartCopy($source."/".$file, $__dest, $options); 
                } 
            } 
            closedir($dirHandle); 
            
        } else { 
            $result=false; 
        } 
        return $result; 
    } 

	function comprimirDirectorio($dir, $zip,$correo) 
	{  
		//Primero comprabamos que sea un directorio
		if (is_dir($dir)){   
			//echo $dir.' jaju\n';  
			//Por cada elemento dentro del directorio  
			foreach (scandir($dir) as $item) {   
				//Evitamos la carpeta actual y la anterior  
				if ($item == '.' || $item == '..') continue;  
				//Si encuentra una que no sea las anteriores,  
				//vuelve a llamar a la función, con un nuevo directorio  
				comprimirDirectorio($dir . "/" . $item, $zip,$correo);  
			}  
		}
		else
		{  
			//En el caso de que sea un archivo, lo añade al zip  
			if(substr($dir,-7)!="img.png" && substr($dir,-4)!="json")
				$zip->addFile($dir,"download".$_SESSION['numDown'].str_replace("../Usuarios/".$correo, "", $dir));  
		}  
	}  

?>