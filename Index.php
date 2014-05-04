<!DOCTYPE HTML SYSTEM>
<html>
	<head>
		<meta charset="UTF-8">
		<script src="Jquery/jquery-2.0.3.min.js" type="text/javascript"></script>
		<script src="Jquery/jquery-ui-1.10.3.js" type="text/javascript"></script>
		<script src="Bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
		<script src="JS/index.js" type="text/javascript"></script>
		<script src="Scrollbar/perfect-scrollbar.js" type="text/javascript"></script>
		<script src="Scrollbar/jquery.mousewheel.js" type="text/javascript"></script>
		<script src="JS/utilidades.js" type="text/javascript"></script>

		<link rel="stylesheet" type="text/css" href="Bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="Jquery/jquery-ui-1.10.3.css">
		<link rel="stylesheet" type="text/css" href="CSS/index.css">
		<link rel="stylesheet" type="text/css" href="Scrollbar/perfect-scrollbar.css">
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
			<img class="center-block" src="images/logo.png">
			<p class="center-block">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

			<img class="center-block" src="images/logo.png">
			<p class="center-block">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

			<img class="center-block" src="images/logo.png">
			<p class="center-block">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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