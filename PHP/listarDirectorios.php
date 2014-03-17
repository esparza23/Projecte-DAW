<?php

function createDir($path)
{
  if ($handle = opendir($path))
  {
    echo "<ul>";
                $queue = array();
    while (false !== ($file = readdir($handle)))
    {
      if (is_dir($path.$file) && $file != '.' && $file !='..')
        printSubDir($file, $path, $queue);
    }

    printQueue($queue, $path);
    echo "</ul>";
  }
}

function printQueue($queue, $path)
{
  foreach ($queue as $file)
  {
    printFile($file, $path);
  }
}

  function printSubDir($dir, $path)
  {
    echo "<li><img /><span id='".$dir."' class=\"toggle\">$dir</span>";
    createDir($path.$dir."/");
    echo "</li>";
  }

    session_start();
    $correo =  $_SESSION['nom'];
    $ruta = "../Usuarios/".str_replace(".","_",$correo)."/";
    createDir($ruta);
?>