<?php
	session_start();
	if( $_SESSION['local'])
        $db = new mysqli("localhost","savecloud","savecloud","SaveCloud");
    else
        $db = new mysqli("localhost","root","edualberdi","SaveCloud");

	//echo "SI";
	$correo = str_replace("_",".",$_SESSION['nom']);
	$query = "SELECT * from usuarios WHERE correo <> '$correo'";

    if ($result = $db->query($query))
    {
        while($row = $result->fetch_array())
        {
            echo "<div class='usuarioRow'><span class='usName'>".$row[0]."</span><button data-toggle='modal' data-target='#modalConfirmar' us='".$row[0]."' class='btn btn-danger borrar'><span class='glyphicon glyphicon-trash'></span>Borrar usuario</button></div>";
        }
        $result->close(); 
    }
    $db->close();
?>