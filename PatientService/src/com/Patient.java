package com;

import java.sql.*;
import database.*;

public class Patient {

	// connection object
	dbconnect obj = new dbconnect();

	public String readPatients() {
		String output = "";
		try {
			Connection con = obj.connect();
			if (con == null) {
				return "Error while connecting to the database for reading.";
			}
			// Prepare the html table to be displayed
			output = "<table border='1'><tr><th>fname</th>" + "<th>lname</th>" + "<th>Age</th>"
					+ "<th>Gender</th><th>Address</th>" + "<th>ContactNo</th>" + "<th>NIC</th><th>Email</th>"
					+ "<th>Username</th>" + "<th>Password</th>" + "<th>Update</th><th>Remove</th></tr>";

			String query = "select * from patient";
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(query);

			// iterate through the rows in the result set
			while (rs.next()) {
				String pID = Integer.toString(rs.getInt("pID"));
				String pFname = rs.getString("pFname");
				String pLname = rs.getString("pLname");
				String pAge = Integer.toString(rs.getInt("pAge"));
				String pGender = rs.getString("pGender");
				String pAddress = rs.getString("pAddress");
				String pContactNo = rs.getString("pContactNo");
				String pNIC = rs.getString("pNIC");
				String pEmail = rs.getString("pEmail");
				String pUsername = rs.getString("pUsername");
				String pPassword = rs.getString("pPassword");

				// Add into the html table
				// output += "<tr><td>" + pFname + "</td>";
				// Add into the html table
				output += "<tr><td><input id='hidItemIDUpdate name='hidItemIDUpdate'" + "type='hidden' value='" + pID
						+ "'>" + pFname + "</td>";
				output += "<td>" + pLname + "</td>";
				output += "<td>" + pAge + "</td>";
				output += "<td>" + pGender + "</td>";
				output += "<td>" + pAddress + "</td>";
				output += "<td>" + pContactNo + "</td>";
				output += "<td>" + pNIC + "</td>";
				output += "<td>" + pEmail + "</td>";
				output += "<td>" + pUsername + "</td>";
				output += "<td>" + pPassword + "</td>";

				// buttons
				output += "<td><input name='btnUpdate' type='button' value='Update' class='btnUpdate btn btn-secondary'></td>"
						+ "<td><input name='btnRemove' type='button' value='Remove' class='btnRemove btn btn-danger'"
						+ "data-pid='" + pID + "'>" + "</td></tr>";
			}
			con.close();
			// Complete the html table
			output += "</table>";
		} catch (Exception e) {
			output = "Error while reading the items.";
			System.err.println(e.getMessage());
		}
		return output;
	}

//INSERT
	public String insertPatient(String pFname, String pLname, String pAge, String pGender, String pAddress,
			String pContactNo, String pNIC, String pEmail, String pUsername, String pPassword) {
		String output = "";
		try {
			Connection con = obj.connect();
			if (con == null) {
				return "Error while connecting to the database for inserting.";
			}
			// create a prepared statement
			String query = " insert into patient          "
					+ " (`pFname`,`pLname`,`pAge`,`pGender`,`pAddress`,`pContactNo`,`pNIC`,`pEmail`,`pUsername`,`pPassword`)"
					+ " values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

			PreparedStatement preparedStmt = con.prepareStatement(query);

			// binding values
			// preparedStmt.setInt(1, 0);
			preparedStmt.setString(1, pFname);
			preparedStmt.setString(2, pLname);
			preparedStmt.setInt(3, Integer.parseInt(pAge));
			preparedStmt.setString(4, pGender);
			preparedStmt.setString(5, pAddress);
			preparedStmt.setString(6, pContactNo);
			preparedStmt.setString(7, pNIC);
			preparedStmt.setString(8, pEmail);
			preparedStmt.setString(9, pUsername);
			preparedStmt.setString(10, pPassword);

			// execute the statement
			preparedStmt.execute();
			con.close();
			String newPatient = readPatients();
			output = "{\"status\":\"success\", \"data\": \"" + newPatient + "\"}";
		} catch (Exception e) {
			output = "{\"status\":\"error\", \"data\": \"Error while inserting the patient.\"}";
			System.err.println(e.getMessage());
		}
		return output;
	}

	// UPDATE
	public String updatePatient(String pID, String pFname, String pLname, String pAge, String pGender, String pAddress,
			String pContactNo, String pNIC, String pEmail, String pUsername, String pPassword) {
		String output = "";
		try {
			Connection con = obj.connect();
			if (con == null) {
				return "Error while connecting to the database for updating.";
			}
			// create a prepared statement
			String query = "UPDATE patients SET pFname=?,pLname=?,pAge=?,pGender=?,pAddress=?,pContactNo=?,pNIC=?,pEmail=?,pUsername=?,pPassword=? WHERE pID=?";
			PreparedStatement preparedStmt = con.prepareStatement(query);
			// binding values
			preparedStmt.setString(1, pFname);
			preparedStmt.setString(2, pLname);
			preparedStmt.setInt(3, Integer.parseInt(pAge));
			preparedStmt.setString(4, pGender);
			preparedStmt.setString(5, pAddress);
			preparedStmt.setString(6, pContactNo);
			preparedStmt.setString(7, pNIC);
			preparedStmt.setString(8, pEmail);
			preparedStmt.setString(9, pUsername);
			preparedStmt.setString(10, pPassword);
			preparedStmt.setInt(11, Integer.parseInt(pID));

			

			// execute the statement
			preparedStmt.execute();
			con.close();
			String newItems = readPatients();
			output = "{\"status\":\"success\", \"data\": \"" + newItems + "\"}";
		} catch (Exception e) {
			output = "{\"status\":\"error\", \"data\": \"Error while updating the patient details.\"}";
			System.err.println(e.getMessage());
		}
		return output;
	}

	
	//DELETE
	public String deletePatient(String pID) {
		String output = "";
		try {
			Connection con = obj.connect();
			if (con == null) {
				return "Error while connecting to the database for deleting.";
			}

			// create a prepared statement
			String query = "delete from patient where pID=?";
			PreparedStatement preparedStmt = con.prepareStatement(query);
			// binding values
			preparedStmt.setInt(1, Integer.parseInt(pID));
			// execute the statement
			preparedStmt.execute();
			con.close();
			String newItems = readPatients();
			output = "{\"status\":\"success\", \"data\": \"" + newItems + "\"}";
		} catch (Exception e) {
			output = "{\"status\":\"error\", \"data\"Error while deleting the patient.\"}";
			System.err.println(e.getMessage());
		}
		return output;
	}
}