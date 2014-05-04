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
		<script src="JS/utilidades.js" type="text/javascript"></script>
		<script src="JS/utilidadesMenu.js" type="text/javascript"></script>
		<script src="JS/reproductorMusica.js" type="text/javascript"></script>
		<script src="JS/reproductorVideo.js" type="text/javascript"></script>
		<script src="JS/reproductorFotos.js" type="text/javascript"></script>
		<script src="JS/editorTextos.js" type="text/javascript"></script>
		<script src="JS/homeEvents.js" type="text/javascript"></script>
		<script src="JS/gestionArchivos.js" type="text/javascript"></script>
		<script src="JS/navigator.js" type="text/javascript"></script>

		
		<link rel="stylesheet" type="text/css" href="Bootstrap/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="Jquery/jquery-ui-1.10.3.css">
		<link rel="stylesheet" type="text/css" href="CSS/app.css">
		<link rel="stylesheet" type="text/css" href="Scrollbar/perfect-scrollbar.css">
		<link rel="stylesheet" type="text/css" href="CSS/flaticon.css">
		

		<script src="codemirror-4.0/lib/codemirror.js" type="text/javascript"></script>

		<script src="codemirror-4.0/mode/xml/xml.js"></script>
		<script src="codemirror-4.0/mode/javascript/javascript.js"></script>
		<script src="codemirror-4.0/mode/css/css.js"></script>
		<script src="codemirror-4.0/mode/htmlmixed/htmlmixed.js"></script>
		<script src="codemirror-4.0/mode/clike/clike.js"></script>
		<script src="codemirror-4.0/mode/php/php.js"></script>

		<link rel="stylesheet" type="text/css" href="codemirror-4.0/lib/codemirror.css">
		<link rel="stylesheet" type="text/css" href="codemirror-4.0/theme/elegant.css">
		
	</head>
	<body>
		<?php
			include "PHP/funciones.php";
			if(isset($_SESSION['nom']))
			{
				//echo $_SESSION['carpetaActual'];
				if(stripos($_SESSION['carpetaActual'], '@') === false)
				{
		?>	
			<script type="text/javascript">
				//alert("NO TIENE ARROBA");
				gestionArchivos.archivos(0,"/");
				barraLateral.cogeInfo();
			</script>
		<?php
				}	
				else 
				{
		
			echo 
			'<script type="text/javascript">
				var carpetaActual = "'.$_SESSION['carpetaActual'].'";
				alert(carpetaActual);
				gestionArchivos.archivos(6,carpetaActual);
				barraLateral.cogeInfo();
			</script>';
				}
		?>
			
			<div id="back1" class="back"></div>
			<div id="back2" class="back"></div>
			<div id="back3" class="back"></div>
			<div id="cont">
				<div id="controls">
					<div id="infoEstado" class="hidden-xs hidden-sm alert alert-info controls">1GB de 2GB </div id="infoEstado">
					<div id="estado" class="hidden-xs hidden-sm  progress-striped">
						<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
						50%
						</div>
					</div>
					<button id="atras" type="button" class="btn btn-default alert-info controls">
						<span class="glyphicon glyphicon-arrow-left"></span>
					</button>
					<button id="nCarpeta" type="button" class="btn btn-default alert-info controls" data-toggle="modal" data-target="#modalNuevaCarpeta">
						<img src="/images/newFolder.png" class="iconMenu">
					</button>
					<button id="nFichero" type="button" class="btn btn-default alert-info controls" data-toggle="modal" data-target="#modalNuevoFichero">
						<img src="/images/newfile.png" class="iconMenu"> 
					</button>
					<button id="upload" type="button" class="btn btn-default alert-info controls">
						<img src="/images/upload.png" class="iconMenu"> 
					</button>
					<input id="fileUpload" type="file" name="file" multiple="multiple">
					<button id="logout" type="button" class="btn btn-default alert-info controls">
						<img src="/images/logOut.png" class="iconMenu"> 
					</button>
				</div>
				<div id="menu-tab" class="visible-xs visible-sm">
					<span class="glyphicon glyphicon-align-justify"></span>
				</div>
				<div id="jQ-menu" >
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
				echo 
				'<img id="img403" src="images/403.png" class="center-block">';
				echo 
				'
				<script>
					setTimeout(function(){
						document.location = "/";
					},5000);
				</script>
				';
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
						<div id="mensajesCarpeta" class="alert alert-danger hidden"></div>
						<div class="butIzq" ><button id="acCarp" class="btn btn-success center-block">Aceptar</button></div>
						<div class="butDer" ><button id="cancCarp" data-dismiss="modal" class="btn btn-danger center-block">Cancelar</button></div>
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
						<div id="mensajesFichero" class="alert alert-danger hidden"></div>
						<div class="butIzq" ><button id="acFich" class="btn btn-success center-block">Aceptar</button></div>
						<div class="butDer" ><button id="cancCarp" data-dismiss="modal" class="btn btn-danger center-block">Cancelar</button></div>
					</div>
				</div>
			</div>
		</div>

		<div id="modalVideo" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true"  data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-vid">
				<div id="contVid" class="modal-content">
					<div id="contrUpVid">
						<div id="nameVid" class="contrMus" ><label >Video</label></div>
						<button id="closeVid" type="button" class="btn btn-link">
							<img src="/images/close.png" class="imgOp"> 
						</button>
					</div>
					<div id="videoVid">
						<div>
							<video id="video" >
							  <source id="vid" src="" type="">
							Your browser does not support the video tag.
							</video>
						</div>
						<div id="contrVid">
							<button id="butBackVid" class="btn btn-link btn-lg vidContr">
								<span class="glyphicon glyphicon-backward"></span>
							</button>
							<button id="butPauseVid" class="btn btn-link btn-lg vidContr">
								<span class="glyphicon glyphicon-pause"></span>
							</button>
							<button id="butForVid" class="btn btn-link btn-lg vidContr">
								<span class="glyphicon glyphicon-forward"></span>
							</button>
							<button id="butResizeVid" class="btn btn-link btn-lg vidContr">
								<span class="glyphicon glyphicon-resize-full"></span>
							</button>
							<div id="sliderVolVid"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="modalIMG"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-IMG">
				<div id="contIMG" class="modal-content">
					<div id="contrUpImg">
						<marquee id="nameImg" class="contrMus"  behavior="scroll" direction="left"><label >Imagen</label></marquee>
						<button id="closeIMG" type="button" class="btn btn-link">
							<img src="/images/close.png" class="imgOp"> 
						</button>
					</div>
					<div id="contImg">
						<div >
							<img id="imagen" src="" alt="" class="img">
						</div>
						<div id="contrImg">
							<button id="butBackPic" class="btn btn-link contrImg">
								<span class="glyphicon glyphicon-backward"></span>
							</button> 
							<button id="butForPic" class="btn btn-link contrImg">
								<span class="glyphicon glyphicon-forward"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="modalPDF"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-PDF">
				<div id="contPDF" class="modal-content">
					<div id="contrPDF">
						<label id="nameFitxPDF">PDF</label>
						<button id="closePDF" type="button" class="btn btn-link">
							<img src="/images/close.png" class="imgOp"> 
						</button>
					</div>
					<div class="form-group">
						<div>
							<object id="PDFviewer" data="" type="application/pdf"></object>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="modalText"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-Text">
				<div id="contText" class="modal-content">
					<div id="contrText">
						<label id="nameFitx"></label>
						<button id="save" type="button" class="btn btn-link">
							<img src="/images/Save.png" class="imgOp"> 
						</button>
						<button id="closeText" type="button" class="btn btn-link">
							<img src="/images/close.png" class="imgOp"> 
						</button>
					</div>
					<div class="form-group">
						<div id="cargandoText">
							<img src="../images/cargando.gif" width="192px" height="192px" alt="">
						</div>
						<div id="textDiv" class="hidden">
							<textarea id="text" ></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="modalRes" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true"  data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm modal-res">
				<div id="contRes" class="modal-content">
					<button id="closeRes" type="button" class="btn btn-default">
						<img src="/images/close.png" class="imgOp"> 
					</button>
					<h1>No hay vista previa de este elemento</h1>
				</div>
			</div>
		</div>


		<div id="repMusica">
			<marquee id="nomSong" class="contrMus"  behavior="scroll" direction="left"><span >Nom de la canço</span></marquee>
			<button id="butBackMus" class="btn btn-link contrMus">
				<span id="backMus" class="glyphicon glyphicon-backward"></span>
			</button>
			<button id="butPauseMus" class="btn btn-link contrMus">
				<span class="glyphicon glyphicon-pause"></span>
			</button>
			<button id="butForMus" class="btn btn-link contrMus">
				<span id="forMus" class="glyphicon glyphicon-forward"></span>
			</button>
			<div id="sliderVolMus"></div>
			<audio id="audio">
			  	<source id="music" src="" type="">
				Your browser does not support the audio element.
			</audio>
			<button id="closeMus" type="button" class="btn btn-link">
				<img src="/images/close.png" class="imgOp"> 
			</button>
		</div>

		<div id="menuCont">
			<ul>
				<li id="butCambiarNom">
					<button type="button" class="butMenu btn btn-default btn-sm">
						<img src="/images/Rename.png" class="iconCont" width="30px" height="30px"> <span class="spanMen">Rename</span>
					</button>
				</li>    
				<li id="butCopiar">
					<button type="button" class="butMenu btn btn-default btn-sm">
						<img src="/images/Cut.png" class="iconCont" width="30px" height="30px"> <span class="spanMen">Copiar</span>
					</button>
				</li>
				<li id="butPegar">
					<button type="button" class="butMenu btn btn-default btn-sm">
						<img src="/images/Paste.png" class="iconCont" width="30px" height="30px"> <span class="spanMen">Pegar</span>
					</button>
				</li>
				<li id="butEliminar">
					<button type="button" class="butMenu btn btn-default btn-sm">
						<img src="/images/Delete.png" class="iconCont" width="30px" height="30px"> <span class="spanMen">Eliminar</span>
					</button>
				</li>
				<li id="butDescargar">
					<button type="button" class="butMenu btn btn-default btn-sm">
						<img src="/images/Download.png" class="iconCont" width="30px" height="30px"> <span class="spanMen">Descargar</span>
					</button>
				</li>

					<a id="desc" href="Usuarios/tmp/carlesesparza@gmail_com/download.zip" download></a>
			</ul>
		</div>

		<div id="mensajes" class="alert alert-danger alert-dismissable hidden">
		  <strong>Warning!</strong> Better check yourself, you're not looking too good.
		</div>
		<script>
			editorTextos.editor = CodeMirror.fromTextArea(document.getElementById("text"), {
				lineNumbers: true, 
				indentUnit: 4,
				matchBrackets: true,
				theme:"elegant",
				autofocus: true
			});
		</script>
	</body>
</html>