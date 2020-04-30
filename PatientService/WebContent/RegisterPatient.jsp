<%@page import="com.Patient"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hospital Management System</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/patients.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-6">
			<link href="images/logo.png" rel="icon"/>
				<h1>Register Patient</h1>
				<form id="formItem" name="formItem" method="POST"
					action="RegisterPatients.jsp">
					FirstName: 
					<input id="pFname" name="pFname" type="text"
						class="form-control form-control-sm"> <br>
					 Lastname:
					<input id="pLname" name="pLname" type="text"
						class="form-control form-control-sm"> <br>
					 Age :
					  <input
						id="pAge" name="pAge" type="text"
						class="form-control form-control-sm"> <br> 
					Gender:
					 <select
						id="pGender" name="pGender" class="form-control form-control-sm">
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select> <br> Address: <input id="pAddress" name="pAddress"
						type="text" class="form-control form-control-sm"> <br>

					Contact No: <input id="pContactNo" name="pContactNo" type="text"
						class="form-control form-control-sm"> <br> NIC: <input
						id="pNIC" name="pNIC" type="text"
						class="form-control form-control-sm"> <br> Email: <input
						id="pEmail" name="pEmail" type="email"
						class="form-control form-control-sm"> <br> Username:
					<input id="pUsername" name="pUsername" type="text"
						class="form-control form-control-sm"> <br> Password:
					<input id="pPassword" name="pPassword" type="password"
						class="form-control form-control-sm"> <br>
						 <input	id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
						 <input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
						<input type="reset" id="configreset" value="Reset" class="btn btn-primary">
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

			</div>
		</div>
	</div>

</body>
</html>