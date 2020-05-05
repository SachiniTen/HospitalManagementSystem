package database;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 * DBConnect class.
 * 
 * @author Sachini
 *
 */
public class DBConnect {

	// A common method to connect to the DB
	public Connection connect() {
		Connection con = null;

		try {
			Class.forName("com.mysql.jdbc.Driver");

			// Provide the correct details:DBServer/DBName ,username, password
			con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/hospitaldb", "root", "");

			// For testing
			System.out.println("Successfully connected");
		} catch (Exception e) {
			e.printStackTrace();
		}

		return con;
	}

}
