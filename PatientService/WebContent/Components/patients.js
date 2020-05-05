//The root URL for the RESTful services
//var rootURL = "http://localhost:8080/PatService/PatientService/Patients";

$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

//SAVE
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------

	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// if valid
	// var type = ($("hidItemIDSave").val().trim() == "") ? "POST" : "PUT";

	if ($("#hidPatientIDSave").val().trim() == "")
		type = "POST";
	else
		type = "PUT";

	$.ajax({

		url : "PatientsAPI",
		type : type,
		data : $("#formPatient").serialize(),
		dataType : "text",
		complete : function(response, status) {

			onItemSaveComplete(response.responseText, status);
		}
	});
});

function onItemSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidPatientIDSave").val("");
	$("#formPatient")[0].reset();
}


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) {
	$("#hidPatientIDSave").val($(this).data("pid"));
	$("#pFname").val($(this).closest("tr").find('td:eq(0)').text());
	$("#pLname").val($(this).closest("tr").find('td:eq(1)').text());
	$("#pAge").val($(this).closest("tr").find('td:eq(2)').text());
	$("#pGender").val($(this).closest("tr").find('td:eq(3)').text());
	$("#pAddress").val($(this).closest("tr").find('td:eq(4)').text());
	$("#pContactNo").val($(this).closest("tr").find('td:eq(5)').text());
	$("#pNIC").val($(this).closest("tr").find('td:eq(6)').text());
	$("#pEmail").val($(this).closest("tr").find('td:eq(7)').text());
	$("#pUsername").val($(this).closest("tr").find('td:eq(8)').text());
	$("#pPassword").val($(this).closest("tr").find('td:eq(9)').text());
});


//DELETE
$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		//rest url : rootURL + '/delete',
		// url : rootURL + '/' + $('#pID').val(),

		url : "PatientsAPI",
		type : "DELETE",
		data : "pID=" + $(this).data("pid"),
		dataType : "text",
		complete : function(response, status) {

			onItemDeleteComplete(response.responseText, status);

		}
	});
});

function onItemDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();

			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

//VALIDATION
//CLIENTMODEL=========================================================================
function validateItemForm() { 

	/*------FNAME------*/
	if ($("#pFname").val().trim() == "")
	{
		return "Insert First Name.";
	}

	/*------LNAME------*/
	if ($("#pLname").val().trim() == "")
	{
		return "Insert Last Name.";
	}

	/*------AGE------*/
	var tmpAge = $("#pAge").val().trim();
	//IF NULL
	if (tmpAge == "") 
	{
		return "Insert Age.";
	}

	//IF NOT NUMERIC
	if (!$.isNumeric(tmpAge))
	{
		return "Insert a numerical value for Age";
	}
	//IF INVALID
	if (tmpAge <= 0) 
	{
		return "Invalid Age";
	}

	/*------GENDER------*/
	if ($("#pGender").val().trim() == "") 
	{
		return "Insert Gender.";
	}

	/*------ADDRESS------*/
	if ($("#pAddress").val().trim() == "") 
	{
		return "Insert Address.";
	}

	/*------CONTACTNO------*/
	var tmpPhone =  $("#pContactNo").val().trim();
	if (tmpPhone == "") 
	{
		return "Insert Contact No.";
	}
	if(!IsPhone(tmpPhone))
	{
		return "Invalid ContactNo";
	}


	/*------NIC------*/
	var tmpNIC = $("#pNIC").val().trim();
	if (tmpNIC == "") 
	{
		return "Insert NIC";
	}
	if(!IsNIC(tmpNIC))
	{
		return "Invalid NIC"; 
	}


	/*------EMAIL------*/
	var tmpEmail = $("#pEmail").val().trim();
	//IF NULL
	if (tmpEmail == "")
	{
		return "Insert Email";
	}
	//IF INVALID
	if(!IsEmail(tmpEmail))
	{
		return "Invalid Email";
	}	


	/*------USERNAME------*/
	if ($("#pUsername").val().trim() == "") 
	{
		return "Insert Username";
	}

	/*------PASSWORD------*/
	var tmpPass = $("#pPassword").val().trim();
	//IF NULL
	if ($("#pPassword").val().trim() == "")
	{
		return "Insert Password.";
	}
	//IF INVALID LENGTH
	if (tmpPass.length < 8) {
		return "Password should be at least 8 characters long";
	}


	return true;
}

//FUNCTION TO CHECK VALIDITY OF EMAIL
function IsEmail(email)
{
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(email))
	{
		return false;
	}
	else
	{
		return true;
	}
}

//FUNCTION TO CHECK VALIDITY OF CONTACTNO
function IsPhone(phone)
{
	var regex =/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/;;
	if(!regex.test(phone))
	{
		return false;
	}
	else
	{
		return true;
	}
}

//FUNCTION TO CHECK VALIDITY OF NIC
function IsNIC(nic)
{
	var regex = /^[0-9]{9}[vVxX]$/;
	if(!regex.test(nic))
	{
		return false;
	}
	else
	{
		return true;
	}
}

