<%@page import="com.Patient"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Online Hospital Management System</title>
<!-- Bootstrap -->

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/patients.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">


</head>
<body style="overflow-x: hidden;">
	<div class="container-fluid" style="width: 1620px; height: 764px;">

		<!--- Header Start -------->
		<div class="row header" style="width: 1400px;">

			<div class="col-md-10">
				<h2>Hospital Management System</h2>
			</div>

			<div class="col-md-2 ">
				<ul class="nav nav-pills ">
					<li class="dropdown dmenu"><a href="#" role="button"
						aria-haspopup="true" aria-expanded="false">Logout<span
							class="caret"></span></a></li>
				</ul>
			</div>
		</div>
		<!--- Header Ends --------->

		<div class="row" style="width: 1620px; height: 864px;">


			<!---- Menu Ares Ends  -------->
			<!---- Content Ares Start  -------->
			<div class="col-md-10 maincontent"
				style="width: 1584px; height: 864px;">
				<!----------------   Menu Tab   --------------->

				<div class="panel panel-default contentinside">
					<div class="panel-heading">
						<h3>Patient Management</h3>
					</div>
					<!----------------   Panel body Start   --------------->


					<!----------------   Display Patients Data List Start  --------------->

					<form id="formPatient" name="formPatient" method="POST"
						action="ManagePatients.jsp">
						<div class="container">
							<div class="column">
								<h4>Register Patient</h4>
								<div class="container">
									<div class="row">
										<input id="pFname" name="pFname" type="text"
											class="form-control form-control-sm" placeholder="First Name"
											style="width: 450px;"> <br>&emsp; <input
											id="pEmail" name="pEmail" type="email"
											placeholder="Email (example@gmail.com)"
											class="form-control form-control-sm" style="width: 450px;">
										<br>
									</div>
								</div>


								<div class="container">
									<div class="row">
										<input id="pLname" name="pLname" type="text"
											class="form-control form-control-sm" placeholder="Last Name"
											style="width: 450px;"> <br>&emsp; <input
											id="pUsername" name="pUsername" type="text"
											class="form-control form-control-sm" placeholder="Username"
											style="width: 450px;"> <br>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<input id="pAge" name="pAge" type="text"
											class="form-control form-control-sm" placeholder="Age"
											style="width: 450px;"> <br> &emsp; <input
											id="pPassword" name="pPassword" type="password"
											class="form-control form-control-sm"
											placeholder="Password (at least 8 characters)"
											style="width: 450px;"> <br>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<select id="pGender" name="pGender"
											class="form-control form-control-sm" placeholder="Gender"
											style="width: 450px;">
											<option value="Male">Male</option>
											<option value="Female">Female</option>
										</select> <br> &emsp; <input id="pNIC" name="pNIC" type="text"
											class="form-control form-control-sm" placeholder="NIC"
											style="width: 450px;"> <br>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<input id="pAddress" name="pAddress" type="text"
											class="form-control form-control-sm" placeholder="Address"
											style="width: 450px;"> <br>&emsp; <input
											id="pContactNo" name="pContactNo" type="text"
											class="form-control form-control-sm" placeholder="Contact No"
											style="width: 450px;"> <br>
									</div>
								</div>


							</div>
						</div>
						<div class="container" style="text-align: center;">
							<!-- save button -->
							<input id="btnSave" name="btnSave" type="button" value="Save"
								class="btn btn-primary">

							<!-- hidden patientID -->
							<input id="hidPatientIDSave" name="hidPatientIDSave" value=""
								type="hidden">

							<!-- reset form button -->
							<input type="reset" id="configreset" value="Reset"
								class="btn btn-primary">
						</div>

					</form>
					<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div>
					<br>
					<div id="divItemsGrid">

						<%
							Patient patiObj = new Patient();
							out.print(patiObj.readPatients());
						%>


					</div>

					<!----------------   Display Patient Data List Ends  --------------->



					<!----------------   Panel body Ends   --------------->
				</div>
			</div>
		</div>
	</div>
</body>
</html>
