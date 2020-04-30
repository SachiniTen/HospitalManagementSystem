// The root URL for the RESTful services
//var rootURL = "http://localhost:8080/PatService/PatientService/Patients";

$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

// SAVE
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
	var type = ($("hidItemIDSave").val() == "") ? "POST" : "PUT";

	$.ajax({

		url : "PatientsAPI",
		type : "PUT",
		data : $("#formItem").serialize(),
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

	$("#hidItemIDSave").val("");
	$("#formItem")[0].reset();
}


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) {    
	$("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());  
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




// DELETE
$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		// url : rootURL + '/delete',
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

// CLIENTMODEL=========================================================================
function validateItemForm() { // FNAME
	if ($("#pFname").val().trim() == "") {
		return "Insert First Name.";
	}

	// LNAME
	if ($("#pLname").val().trim() == "") {
		return "Insert Last Name.";
	}

	// AGE-------------------------------
	if ($("#pAge").val().trim() == "") {
		return "Insert Age.";
	}

	// is numerical value
	var tmpAge = $("#pAge").val().trim();
	if (!$.isNumeric(tmpAge)) {
		return "Insert a numerical value for Age";
	}

	// is numerical value
	// var tmpPrice = $("#itemPrice").val().trim();
	// if(!$.isNumeric(tmpPrice)) { return "Insert a numerical value for Item
	// Price.";
	// }

	// convert to decimal price
	// $("#itemPrice").val(parseFloat(tmpPrice).toFixed(2));

	// GENDER------------------------
	if ($("#pGender").val().trim() == "") {
		return "Insert Gender.";
	}

	// ADDRESS
	if ($("#pAddress").val().trim() == "") {
		return "Insert Address.";
	}

	// CONTACTNO
	if ($("#pContactNo").val().trim() == "") {
		return "Insert Contact No.";
	}

	// is numerical value
	// var tmp = $("#pContactNo").val().trim();
	// if(!$.isNumeric(tmpAge) && (tmpAge.length) > 8) { return "Insert a valid
	// Contact No:";
	// }

	// NIC
	if ($("#pNIC").val().trim() == "") {
		return "Insert NIC";
	}

	// EMAIL
	if ($("#pEmail").val().trim() == "") {
		return "Insert Email";
	}

	// USERNAME
	if ($("#pUsername").val().trim() == "") {
		return "Insert Username";
	}

	// PASSWORD
	if ($("#pPassword").val().trim() == "") {
		return "Insert Password.";
	}
	var tmpPass = $("#pPassword").val().trim();
	if (tmpPass.length < 8) {
		return "Password should be at least 8 characters long";
	}

	return true;
}