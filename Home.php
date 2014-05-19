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
		<script src="JS/gestionArchivos.js" type="text/javascript"></script>
		<script src="JS/home.js" type="text/javascript"></script>
		<script src="JS/utilidades.js" type="text/javascript"></script>
		<script src="JS/utilidadesMenu.js" type="text/javascript"></script>
		<script src="JS/reproductorMusica.js" type="text/javascript"></script>
		<script src="JS/reproductorVideo.js" type="text/javascript"></script>
		<script src="JS/reproductorFotos.js" type="text/javascript"></script>
		<script src="JS/editorTextos.js" type="text/javascript"></script>
		<script src="JS/homeEvents.js" type="text/javascript"></script>
		<script src="JS/navigator.js" type="text/javascript"></script>
		<script type="text/javascript" src="scroll/jquery.slimscroll.min.js"></script>

		
		<link rel="stylesheet" type="text/css" href="Bootstrap/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="Jquery/jquery-ui-1.10.3.css">
		

		<script src="codemirror-4.0/lib/codemirror.js" type="text/javascript"></script>

		<script src="codemirror-4.0/mode/xml/xml.js"></script>
		<script src="codemirror-4.0/mode/javascript/javascript.js"></script>
		<script src="codemirror-4.0/mode/css/css.js"></script>
		<script src="codemirror-4.0/mode/htmlmixed/htmlmixed.js"></script>
		<script src="codemirror-4.0/mode/clike/clike.js"></script>
		<script src="codemirror-4.0/mode/php/php.js"></script>


		<link rel="stylesheet" type="text/css" href="codemirror-4.0/lib/codemirror.css">
		<link rel="stylesheet" type="text/css" href="codemirror-4.0/theme/elegant.css">


		<!-- Generic page styles -->
		<link rel="stylesheet" href="testUPload/css/style.css">
		<!-- blueimp Gallery styles -->
		<link rel="stylesheet" href="http://blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
		<!-- CSS to style the file input field as button and adjust the Bootstrap progress bars -->
		<link rel="stylesheet" href="testUPload/css/jquery.fileupload.css">
		<link rel="stylesheet" href="testUPload/css/jquery.fileupload-ui.css">
		<!-- CSS adjustments for browsers with JavaScript disabled -->
		<noscript><link rel="stylesheet" href="testUPload/css/jquery.fileupload-noscript.css"></noscript>
		<noscript><link rel="stylesheet" href="testUPload/css/jquery.fileupload-ui-noscript.css"></noscript>

		<link rel="stylesheet" type="text/css" href="CSS/app.css">
		
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
				jQuery(document).ready(function($) {
					gestionArchivos.archivos(0,"/");
					barraLateral.cogeInfo();
				});
			</script>
		<?php
				}	
				else 
				{
		
			echo 
			'<script type="text/javascript">
				var carpetaActual = "'.$_SESSION['carpetaActual'].'";
				//alert(carpetaActual);
				gestionArchivos.archivos(6,carpetaActual);
				barraLateral.cogeInfo();
			</script>';
				}
		?>
			<div id="cont">
				<div id="controls">
					<div id="infoEstado" class="  alert alert-info controls">1GB de 2GB </div id="infoEstado">
					<div id="estado" class="   progress-striped">
						<div class="progress-bar espai progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
						50%
						</div>
					</div>
					
					<button id="atras" type="button" class="btn btn-default alert-info controls homeContr">
						<span class="glyphicon glyphicon-arrow-left"></span>
					</button>
					<button id="cCarpeta" type="button" class="btn btn-default alert-info controls homeContr" data-toggle="modal" data-target="#modalCompCarpeta">
						<img src="/images/shareFolder.png" class="iconMenu">
					</button>
					<button id="nCarpeta" type="button" class="btn btn-default alert-info controls homeContr" data-toggle="modal" data-target="#modalNuevaCarpeta">
						<img src="/images/newFolder.png" class="iconMenu">
					</button>
					<button id="nFichero" type="button" class="btn btn-default alert-info controls homeContr" data-toggle="modal" data-target="#modalNuevoFichero">
						<img src="/images/newfile.png" class="iconMenu"> 
					</button>
					<button id="upload" type="button" class="btn btn-default alert-info controls homeContr" data-toggle="modal" data-target="#modalCarga">
						<img src="/images/upload.png" class="iconMenu"> 
					</button>
					<?php 
						if($_SESSION['admin'])
						{
							echo 
							'	<a href="Admin.php">
								<button id="admin" type="button" class="btn btn-default alert-info controls homeContr">
									<img src="images/admin.png" class="iconMenu"> 
								</button>
								</a>
							';
						}
					?>
					<button id="logout" type="button" class="btn btn-default alert-info controls homeContr">
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
				<div id="carpActual">
					Carpeta Actual
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

		<!-- Modal compartir carpeta -->
		<div id="modalCompCarpeta" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-sm modal-comp">
				<div id="contComp" class="modal-content">
					<div class="form-group">
						<label for="nombreUs" class="center-block modalTit">Nombre del usuario</label>
						<input type="text" class="form-control center-block" id="nombreUs" placeholder="Usuario">
						<div id="mensajesCompartir" class="alert alert-danger hidden"></div>
						<div class="butIzq" ><button id="acComp" class="btn btn-success center-block">Aceptar</button></div>
						<div class="butDer" ><button id="cancComp" data-dismiss="modal" class="btn btn-danger center-block">Cancelar</button></div>
					</div>
				</div>
			</div>
		</div>
	
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

		<div id="modalVideo" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true"  data-backdrop="static">
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

		<div id="modalIMG"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-backdrop="static">
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

		<div id="modalPDF"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-backdrop="static">
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

		<div id="modalText"class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-backdrop="static">
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

		<div id="modalRes" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true"  data-backdrop="static">
			<div class="modal-dialog modal-sm modal-res">
				<div id="contRes" class="modal-content">
					<button id="closeRes" type="button" class="btn btn-link">
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

		<div id="modalCarga" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true"  data-backdrop="static">
			<div class="modal-dialog modal-sm modal-carga">
				<div id="contCarga" class="modal-content">
					<label id="titCarga">Carga de archivos</label>
					<button id="closeCarga" type="button" class="btn btn-link">
						<img src="/images/close.png" class="imgOp"> 
					</button>
					<form id="fileupload" action="//jquery-file-upload.appspot.com/" method="POST" enctype="multipart/form-data" data-ng-app="demo" data-ng-controller="DemoFileUploadController" data-file-upload="options" data-ng-class="{'fileupload-processing': processing() || loadingFiles}">
				        <!-- Redirect browsers with JavaScript disabled to the origin page -->
				        <noscript><input type="hidden" name="redirect" value="http://blueimp.github.io/jQuery-File-Upload/"></noscript>
				        <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
				        <div class="row fileupload-buttonbar">
				        	<div class="col-lg-1 fade"></div>
				            <div class="col-lg-5">
				                <!-- The fileinput-button span is used to style the file input field as button -->
				                <span class="btn btn-success fileinput-button" ng-class="{disabled: disabled}">
				                    <i class="glyphicon glyphicon-plus"></i>
				                    <span>Add files...</span>
				                    <input type="file" name="files[]" multiple ng-disabled="disabled">
				                </span>
				                <button type="button" class="btn btn-primary start" data-ng-click="submit()">
				                    <i class="glyphicon glyphicon-upload"></i>
				                    <span>Start upload</span>
				                </button>
				                <button type="button" class="btn btn-warning cancel" data-ng-click="cancel()">
				                    <i class="glyphicon glyphicon-ban-circle"></i>
				                    <span>Cancel upload</span>
				                </button>
				                <!-- The global file processing state -->
				                <span class="fileupload-process"></span>
				            </div>
				            <!-- The global progress state -->
				            <div class="col-lg-5 fade" data-ng-class="{in: active()}">
				                <!-- The global progress bar -->
				                <div class="progress progress-striped active" data-file-upload-progress="progress()"><div class="progress-bar progress-bar-success" data-ng-style="{width: num + '%'}"></div></div>
				                <!-- The extended global progress state -->
				                <div class="progress-extended">&nbsp;</div>
				            </div>
				            <div class="col-lg-1 fade"></div>
				        </div>
				        <!-- The table listing the files available for upload/download -->
				        <table id="tableFiles" class="table table-striped files ng-cloak">
				            <tr data-ng-repeat="file in queue" data-ng-class="{'processing': file.$processing()}">
				                <td data-ng-switch data-on="!!file.thumbnailUrl">
				                    <div class="preview" data-ng-switch-when="true">
				                        <a data-ng-href="{{file.url}}" title="{{file.name}}" download="{{file.name}}" data-gallery><img data-ng-src="{{file.thumbnailUrl}}" alt=""></a>
				                    </div>
				                    <div class="preview" data-ng-switch-default data-file-upload-preview="file"></div>
				                </td>
				                <td>
				                    <p class="name" data-ng-switch data-on="!!file.url">
				                        <span data-ng-switch-when="true" data-ng-switch data-on="!!file.thumbnailUrl">
				                            <a data-ng-switch-when="true" data-ng-href="{{file.url}}" title="{{file.name}}" download="{{file.name}}" data-gallery>{{file.name}}</a>
				                            <a data-ng-switch-default data-ng-href="{{file.url}}" title="{{file.name}}" download="{{file.name}}">{{file.name}}</a>
				                        </span>
				                        <span data-ng-switch-default>{{file.name}}</span>
				                    </p>
				                    <strong data-ng-show="file.error" class="error text-danger">{{file.error}}</strong>
				                </td>
				                <td>
				                    <p class="size">{{file.size | formatFileSize}}</p>
				                    <div class="progress progress-striped active fade" data-ng-class="{pending: 'in'}[file.$state()]" data-file-upload-progress="file.$progress()"><div class="progress-bar progress-bar-success" data-ng-style="{width: num + '%'}"></div></div>
				                </td>
				                <td>
				                    <button type="button" class="btn btn-primary start" data-ng-click="file.$submit()" data-ng-hide="!file.$submit || options.autoUpload" data-ng-disabled="file.$state() == 'pending' || file.$state() == 'rejected'">
				                        <i class="glyphicon glyphicon-upload"></i>
				                        <span>Start</span>
				                    </button>
				                    <button type="button" class="btn btn-warning cancel" data-ng-click="file.$cancel()" data-ng-hide="!file.$cancel">
				                        <i class="glyphicon glyphicon-ban-circle"></i>
				                        <span>Cancel</span>
				                    </button>
				                    <button data-ng-controller="FileDestroyController" type="button" class="btn btn-danger destroy" data-ng-click="file.$destroy()" data-ng-hide="!file.$destroy">
				                        <i class="glyphicon glyphicon-trash"></i>
				                        <span>Delete</span>
				                    </button>
				                </td>
				            </tr>
				        </table>
				    </form>

					<!--
					<div id="" class="progress-striped cargaArchivo">
						<div id="cargaParcial" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
						</div>
					</div>
					<div id="" class="progress-striped cargaArchivo">
						<div id="cargaTotal" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
						</div>
					</div>
					-->
				</div>
			</div>
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
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
	<!-- The Load Image plugin is included for the preview images and image resizing functionality -->
	<script src="http://blueimp.github.io/JavaScript-Load-Image/js/load-image.min.js"></script>
	<!-- The Canvas to Blob plugin is included for image resizing functionality -->
	<script src="http://blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.min.js"></script>
	<!-- blueimp Gallery script -->
	<script src="http://blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"></script>
	<!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
	<script src="testUPload/js/jquery.iframe-transport.js"></script>
	<!-- The basic File Upload plugin -->
	<script src="testUPload/js/jquery.fileupload.js"></script>
	<!-- The File Upload processing plugin -->
	<script src="testUPload/js/jquery.fileupload-process.js"></script>
	<!-- The File Upload image preview & resize plugin -->
	<script src="testUPload/js/jquery.fileupload-image.js"></script>
	<!-- The File Upload audio preview plugin -->
	<script src="testUPload/js/jquery.fileupload-audio.js"></script>
	<!-- The File Upload video preview plugin -->
	<script src="testUPload/js/jquery.fileupload-video.js"></script>
	<!-- The File Upload validation plugin -->
	<script src="testUPload/js/jquery.fileupload-validate.js"></script>
	<!-- The File Upload Angular JS module -->
	<script src="testUPload/js/jquery.fileupload-angular.js"></script>
	<!-- The main application script -->
	<script src="testUPload/js/app.js"></script>
</html>