<!DOCTYPE HTML SYSTEM>
<html>
	<head>
		<meta charset="UTF-8">
		<script src="JS/md5.js" type="text/javascript"></script>
		<script src="Jquery/jquery-2.0.3.min.js" type="text/javascript"></script>
		<script src="Jquery/jquery-ui-1.10.3.js" type="text/javascript"></script>
		<script src="Bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
		<script src="JS/index.js" type="text/javascript"></script>
		<script src="JS/utilidades.js" type="text/javascript"></script>

		<link rel="stylesheet" type="text/css" href="Bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="Jquery/jquery-ui-1.10.3.css">
		<link rel="stylesheet" type="text/css" href="CSS/index.css">
		<link rel="stylesheet" type="text/css" href="CSS/flaticon.css">
	</head>
	<body>
		<div id="port">
			<div id="logo">
				<img class="center-block" src="images/logo.png">
			</div>
			<div id="slogan">
				<p id="sloganText" class="center-block">
				Tus archivos siempre cerca con <span>SaveCloud</span>
				</p>
			</div>
			<div id="infoLogin">
				<button class="btn btn-primary btn-lg center-block" data-toggle="modal" data-target="#logSig">Inicia sesión / Regístrate</button>
			</div>
			<div id="masInfo">
				<p id="masInfoText" class="center-block">
					<span class="glyphicon glyphicon-arrow-down"></span>Mas información<span class="glyphicon glyphicon-arrow-down"></span>
				</p>
			</div>
		</div>
		<div id="info">
			<img class="center-block" src="images/imagen1.png">
			<p class="center-block text">
				Al colocar tus archivos multimedia en <span>SaveCloud</span>, podrás reproducirlos desde cualquier ordenador, tablet 
				o smartphone con conexión a internet.
			</p>

			<img class="center-block" src="images/imagen2.png">
			<p class="center-block text">
				Visualiza tus documentos en la nube sin necesidad de descargarlos al dispositivo y modificalos con el editor
				de textos incoporado en <span>SaveCloud</span>
			</p>

			<img class="center-block" src="images/imagen3.png">
			<p class="center-block text">
				Compartir archivos es tan fácil como subir archivos a la carpeta pública y añadir a tus amigos de <span>SaveCloud</span>
				para que puedan verlos desde cualquier sitio.
			</p>
			<div id="volverArriba">
				<p id="volverArribaText" class="center-block">
					<span class="glyphicon glyphicon-arrow-up"></span>Volver Arriba<span class="glyphicon glyphicon-arrow-up"></span>
				</p>
			</div>
		</div>
		
		<!-- Modal Login i SignUp -->

		<div class="modal fade" id="logSig" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog logSig">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="myModalLabel">Únete a nosotros</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-6">
								<h3 class="logSigTitle">Inicia Sesión</h3>
								<form id="form1" role="form" action="javascript:login()">
									</br>
									<div class="form-group">
										<label for="emailLog">Correo Electrónico</label>
										<input type="email" class="form-control" id="emailLog" placeholder="Enter email" required>
									</div>
									<div class="form-group">
										<label for="passLog">Password</label>
										<input type="password" class="form-control" id="passLog" placeholder="Password" required>
									</div>
									<button id="butSig" class="btn btn-danger center-block">Iniciar Sesión</button>
								</form>							
							</div>
							<div id="parForm2" class="col-md-6">
								<h3 class="logSigTitle">Regístrate</h3>
								<form id="form2" role="form" action="javascript:registrar()">
									</br>
									<div class="form-group ">
										<label for="emailReg">Correo Electrónico</label>
										<input type="email" class="form-control" id="emailReg" name="emailReg" placeholder="Enter email" required>
									</div>
									<div class="form-group">
										<label for="passReg">Password</label>
										<input type="password" class="form-control" id="passReg" name="passReg" placeholder="Password" required>
									</div>
									<div class="form-group">
										<label for="passRegRep">Repetir Password</label>
										<input type="password" class="form-control" id="passRegRep" name="passRegRep" placeholder="Password" required>
									</div>
									<div class="checkbox cond">
									    <label>
									    	<input id="condCheck" type="checkbox"> Acepto las condiciones de uso y servicio.
									    </label>
									</div>
									<input type="submit" value="Registrar" class="btn btn-danger center-block">
								</form>	
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div id="errorSigRed" class="misErr alert alert-danger hidden">
									
								</div>
								<div id="succSigRed" class="misErr alert alert-success hidden">
									
								</div>
							</div>
						</div>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->

	</body>
</html>