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

		<link rel="stylesheet" type="text/css" href="Bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="Jquery/jquery-ui-1.10.3.css">
		<link rel="stylesheet" type="text/css" href="css/app.css">
		<link rel="stylesheet" type="text/css" href="Scrollbar/perfect-scrollbar.css">
		<link rel="stylesheet" type="text/css" href="css/flaticon.css">
	</head>
	<body>
		<div class="container-liquid">
			<div class="row">
				<div id="colIz" class="col-md-6">
					<div class="row">
						<div id="infoCloud" class="col-md-12">
							<div class="row">
								<div class="col-md-2"></div>
								<div class="col-md-8">
									<span id="imgInfo1" class="flaticon-arrow299"></span>
									<span id="imgInfo2" class="flaticon-download55"></span>
								</div>
								<div class="col-md-2"></div>
							</div>
							<div class="row">
								<div class="col-md-1"></div>
								<div class="col-md-10 info">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</div>
								<div class="col-md-1"></div>
							</div>
							<div class="row">
								<div class="col-md-3"></div>
								<div class="col-md-6">
									<span id="imgInfo3" class="flaticon-share12"></span>
								</div>
								<div class="col-md-3"></div>
							</div>
							<div class="row">
								<div class="col-md-1"></div>
								<div class="col-md-10 info">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</div>
								<div class="col-md-1"></div>
							</div>
							<div class="row">
								<div class="col-md-3"></div>
								<div class="col-md-6">
									<span id="imgInfo4" class="flaticon-mobile14"></span>
								</div>
								<div class="col-md-3"></div>
							</div>
							<div class="row">
								<div class="col-md-1"></div>
								<div class="col-md-10 info">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</div>
								<div class="col-md-1"></div>
							</div>
						</div>
					</div>
				</div>
				<div id="colDer" class="col-md-6">
					<div class="row">
						<div class="col-md-2"></div>
						<div class="col-md-8">
							<span id="imgLogo" class="flaticon-cloud14"></span>
						</div>
						<div class="col-md-2"></div>
					</div>
					<div class="row">
						<div id="infoLogin" class="col-md-12">
							<button class="btn btn-danger" data-toggle="modal" data-target="#logSig">Inicia sesión</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		
		<!-- Modal Login i SignUp -->

		<div class="modal fade" id="logSig" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog logSig">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="myModalLabel">HOLA</h4>
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
							<div class="col-md-6">
								<h3 class="logSigTitle">Regístrate</h3>
								<form id="form2" role="form" action="javascript:registrar()">
									</br>
									<div class="form-group">
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
									    	<input type="checkbox"> Acepto las condiciones de uso y servicio.
									    </label>
									</div>
									<button id="butReg" class="btn btn-danger center-block">Registrar</button>
								</form>	
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div id="errorSigRed" class="misErr alert alert-danger hidden">
									<span id="misErrText"></span>
								</div>
								<div id="succSigRed" class="misErr alert alert-success hidden">
									<span id="misSuccText"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						foooooooooter
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->

	</body>
</html>