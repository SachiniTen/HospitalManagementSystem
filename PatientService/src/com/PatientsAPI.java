package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PatientsAPI
 */
@WebServlet("/PatientsAPI")
public class PatientsAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
	//patient object
	Patient patiObj = new Patient();
		
    public PatientsAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String output = patiObj.insertPatient(request.getParameter("pFname"),   
				   request.getParameter("pLname"),   
				   request.getParameter("pAge"),  
				   request.getParameter("pGender"),
				   request.getParameter("pAddress"),
				   request.getParameter("pContactNo"),  
				   request.getParameter("pNIC"),
				   request.getParameter("pEmail"),  
				   request.getParameter("pUsername"),
				   request.getParameter("pPassword")
				 
				   ); 

	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
				Map paras = getParasMap(request); 
				 
				 String output = patiObj.updatePatient(paras.get("hidItemIDSave").toString(),    
						 							paras.get("pFname").toString(), 
						 							paras.get("pLname").toString(),   
						 							paras.get("pAge").toString(),    
						 							paras.get("pGender").toString(),
						 							paras.get("pAddress").toString(), 
						 							paras.get("pContactNo").toString(),   
						 							paras.get("pNIC").toString(),    
						 							paras.get("pEmail").toString(),
						 							paras.get("pUsername").toString(), 
						 							paras.get("pPassword").toString()   
						 						); 
				 
				 response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);

		String output = patiObj.deletePatient(paras.get("pID").toString());

		response.getWriter().write(output);
	}
	
	
	// Convert request parameters to a Map private static
		Map getParasMap(HttpServletRequest request) 
		{ 
			Map<String, String> map = new HashMap<String, String>();
			try  
			{
				Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");   
				String queryString = scanner.hasNext() ?       
									 scanner.useDelimiter("\\A").next() : "";  
				scanner.close(); 
		 
				String[] params = queryString.split("&");   for (String param : params)   
				{ 
		 
					String[] p = param.split("=");  
					map.put(p[0], p[1]); 
					}
				}
			catch (Exception e)
			{
				
			}  
				return map;
	} 

}
