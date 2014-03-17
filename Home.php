<?php
	session_start();
?>  
<?php
	session_start();
?>  
<!DOCTYPE HTML SYSTEM>
<html>
	<head>

		<meta charset="UTF-8">
		<script src="Jquery/jquery-2.0.3.min.js" type="text/javascript"></script>
		<script src="Jquery/jquery-ui-1.10.3.js" type="text/javascript"></script>
		<script src="Bootstrap/js/bootstrap.js" type="text/javascript"></script>
		<script src="JS/home.js" type="text/javascript"></script>
		<script src="Scrollbar/perfect-scrollbar.js" type="text/javascript"></script>
		<script src="Scrollbar/jquery.mousewheel.js" type="text/javascript"></script>
		<script src="JS/utilidadesMenu.js" type="text/javascript"></script>
		<script src="JS/home.js" type="text/javascript"></script>
		<script src="JS/fileTypes.js" type="text/javascript"></script>
		<script src="JS/navigator.js" type="text/javascript"></script>

		
		<link rel="stylesheet" type="text/css" href="Bootstrap/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="Jquery/jquery-ui-1.10.3.css">
		<link rel="stylesheet" type="text/css" href="css/app.css">
		<link rel="stylesheet" type="text/css" href="Scrollbar/perfect-scrollbar.css">
		<link rel="stylesheet" type="text/css" href="css/flaticon.css">
		<script>
			
		</script>
	</head>
	<body>
		<?php
			include "PHP/funciones.php";
			if(isset($_SESSION['nom']))
			{
				
		?>		
			<script>
				archivos(0,"/");
				$.ajax({
			    	type: "POST",
			       	url: "PHP/listarDirectorios.php",
			       	data: "",
			       	dataType: "html",
			       	error: function()
			       	{
			        	alert("error petición ajax");
			       	},
			       success: function(data)
			       	{ 
			       		navigator(data);
			       	}
			    });
			</script>	
			<div id="cont">
				<div id="controls">
					<button id="atras" type="button" class="btn btn-default btn-lg" >
						<marquee behavior="scroll" direction="left"><span class="glyphicon glyphicon-arrow-left"></span> Atrás</marquee>
					</button>
					<button id="nCarpeta" type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#modalNuevaCarpeta">
						<img src="/images/newFolder.png" class="iconMenu">
					</button>
					<button id="nFichero" type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#modalNuevoFichero">
						<img src="/images/newFile.png" class="iconMenu"> 
					</button>
					<button id="upload" type="button" class="btn btn-default btn-lg">
						<img src="/images/upload.png" class="iconMenu2"> 
					</button>
					<input id="fileUpload" type="file" name="file" multiple="multiple">
					<button id="logout" type="button" class="btn btn-default btn-lg">
						<img src="/images/logOut.png" class="iconMenu"> 
					</button>
					<button id="butDir" type="button" class="btn btn-default btn-lg">
						<img src="/images/rotate.png" class="iconMenu"> 
					</button>
				</div>
				<div id="jQ-menu">
					<ul>
						<li><img /><span id="unidad" class="toggle">Mi Unidad</span></li>
					</ul>
				</div>
				<div id="fitx">
					<ol id="llistaFitx">
						
					</ol>
				</div>
			</div>
		<?php
			}
			else
			{
				echo "pepe";
			}
		?>

		</br>
		</br>

		<!-- Modal nueva carpeta -->
		<div id="modalNuevaCarpeta" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-sm modal-carp">
				<div id="contCarp" class="modal-content">
					<div class="form-group">
						<label for="nombreCarp" class="center-block modalTit">Nombre para la nueva carpeta</label>
						<input type="text" class="form-control center-block" id="nombreCarp" placeholder="Nueva Carpeta">
						<div class="butIzq" ><button id="acCarp" class="btn btn-success center-block">Aceptar</button></div>
						<div class="butDer" ><button id="cancCarp" class="btn btn-danger center-block">Cancelar</button></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal nueva fichero -->
		<div id="modalNuevoFichero"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-sm modal-fich">
				<div id="contFich" class="modal-content">
					<div class="form-group">
						<label for="nombreFich" class="center-block modalTit">Nombre para el nuevo fichero</label>
						<input type="text" class="form-control center-block" id="nombreFich" placeholder="Nuevo Fichero">
						<div class="butIzq" ><button id="acFich" class="btn btn-success center-block">Aceptar</button></div>
						<div class="butDer" ><button id="cancCarp" class="btn btn-danger center-block">Cancelar</button></div>
					</div>
				</div>
			</div>
		</div>

		<div id="modalVideo" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true"  data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-vid">
				<div id="contVid" class="modal-content">
					<span id="closeVid" class="glyphicon glyphicon-remove-circle"></span>
					<video id="video"  controls>
					  <source id="vid" src="" type="">
					Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>

		<div id="modalIMG"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-IMG">
				<div id="contIMG" class="modal-content">
					<span id="closeIMG" class="glyphicon glyphicon-remove-circle"></span>
					<div class="form-group">
						<label for="exampleInputEmail1">Imagen</label>
						<div>
							<img id="imagen" src="" alt="" class="img">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="modalPDF"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-PDF">
				<div id="contPDF" class="modal-content">
					<span id="closePDF" class="glyphicon glyphicon-remove-circle"></span>
					<div class="form-group">
						<label for="exampleInputEmail1">PDF</label>
						<div>
							<object id="PDFviewer" data="" type="application/pdf"></object>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="modalText"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-Text">
				<div id="contPDF" class="modal-content">
					<span id="closeText" class="glyphicon glyphicon-remove-circle"></span>
					<div class="form-group">
						<label for="exampleInputEmail1">Text</label>
						<div>
							<textarea id="text" class="form-control" rows="3"></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="modalRes" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true"  data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-res">
				<div id="contRes" class="modal-content">
					<span id="closeRes" class="glyphicon glyphicon-remove-circle"></span>
					<h1>No hay vista previa de este elemento</h1>
				</div>
			</div>
		</div>


		<div id="repMusica">
			<span id="backMus" class="glyphicon glyphicon-backward"></span>
			<span id="forMus" class="glyphicon glyphicon-forward"></span>
			<audio id="audio" controls >
			  	<source id="music" src="" type="">
				Your browser does not support the audio element.
			</audio>
			<span id="closeMus" class="glyphicon glyphicon-remove-circle"></span>
		</div>

		<div id="menuCont">
			<ul>
				<li id="butCopiar">
					<button type="button" class="butMenu btn btn-default btn-sm">
						<img src="/images/Cut.png" class="iconMenu" width="24px" height="24px"> <span class="spanMen">Copiar</span>
					</button>
				</li>
				<li id="butPegar">
					<button type="button" class="butMenu btn btn-default btn-sm">
						<img src="/images/Paste.png" class="iconMenu" width="24px" height="24px"> <span class="spanMen">Pegar</span>
					</button>
				</li>
				<li id="butEliminar">
					<button type="button" class="butMenu btn btn-default btn-sm">
						<img src="/images/Delete.png" class="iconMenu" width="24px" height="24px"> <span class="spanMen">Eliminar</span>
					</button>
				</li>
				<li id="butDescargar">
					<button type="button" class="butMenu btn btn-default btn-sm">
						<img src="/images/Download.png" class="iconMenu" width="24px" height="24px"> <span class="spanMen">Descargar</span>
					</button>
				</li>
			</ul>
		</div>
	</body>
</html>