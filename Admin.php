<?php
	session_start();
?>  
<!DOCTYPE HTML SYSTEM>
<html>
	<head>
		<meta charset="UTF-8">
		<script src="JS/md5.js" type="text/javascript"></script>
		<script src="Jquery/jquery-2.0.3.min.js" type="text/javascript"></script>
		<script src="Jquery/jquery-ui-1.10.3.js" type="text/javascript"></script>
		<script src="Bootstrap/js/bootstrap.js" type="text/javascript"></script>
		<script src="JS/admin.js" type="text/javascript"></script>
		<script src="JS/utilidades.js" type="text/javascript"></script>

		
		<link rel="stylesheet" type="text/css" href="Bootstrap/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="Jquery/jquery-ui-1.10.3.css">
		<link rel="stylesheet" type="text/css" href="CSS/admin.css">
	</head>
	<body>
		<?php
			include "PHP/config.php";
	        inicializaLocal();
			if($_SESSION['admin'])
			{
		?>
		<h1 class="tit center-block">Administración de usuarios</h1>
		<button data-toggle='modal' data-target='#modalNew' id="nuevo" class="btn btn-success center-block"><span class='glyphicon glyphicon-plus'></span>Nuevo Usuario</button>
		<div id="users" class="center-block">
		<?php
	        echo
	        '
				<script>
					admin.muestraUs();
				</script>
			'
		?>
		</div>
		</br>
		<a href="Home.php"><button class="btn btn-default center-block">Volver al espacio personal</button></a>
		
		<!-- Modal confirmar -->
		<div id="modalConfirmar" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-sm modal-conf">
				<div id="contConf" class="modal-content">
					<div class="form-group">
						<label id="mens" class="center-block modalTit">Nombre del usuario</label>
						<div class="butIzq" ><button id="acDel" data-dismiss="modal" class="btn btn-success center-block">Aceptar</button></div>
						<div class="butDer" ><button id="cancDel" data-dismiss="modal" class="btn btn-danger center-block">Cancelar</button></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal nuevo usuario -->
		<div id="modalNew" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-sm modal-new">
				<div id="contNew" class="modal-content">
					<h3>Nuevo usuario</h3>
					<div class="form-group item">
					    <label class="col-sm-2 control-label">Correo</label>
					    <div class="col-sm-10">
					    	<input type="email" class="form-control" id="emailAdmin" placeholder="Correo">
					    </div>
					</div>
					<div class="form-group item">
					    <label class="col-sm-2 control-label">Password</label>
					    <div class="col-sm-10">
					    	<input type="password" class="form-control" id="passAdmin" placeholder="Password">
					    </div>
					</div>
					<div class="form-group  item">
					    <label  class="col-sm-2 control-label">Rep Password</label>
					    <div class="col-sm-10">
					    	<input type="password" class="form-control" id="confPassAdmin" placeholder="Repetir Password">
					    </div>
					</div>
					<div class="form-group">
				    	<label for="inputEmail3" class="col-sm-2 control-label">Admin</label>
					</div>
					</br>
					<div class="radio">
						<label>
					    	<input type="radio" name="admin" id="admin1" value="si" >
					    	Si
					  	</label>
					</div>
					<div class="radio">
					 	<label>
					    	<input type="radio" name="admin" id="admin2" value="no" checked>
					    	No
					  	</label>
					</div>
					<div class="butIzq" ><button id="acUser" class="btn btn-success center-block">Aceptar</button></div>
					<div class="butDer" ><button id="cancUser" data-dismiss="modal" class="btn btn-danger center-block">Cancelar</button>
					</div>
					<div class="row">
							<div class="col-md-12">
								<div id="errorAdmin" class="misErr alert alert-danger hidden">
									
								</div>
								<div id="succAdmin" class="misErr alert alert-success hidden">
									
								</div>
							</div>
						</div>
				</div>
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
	</body>
</html>