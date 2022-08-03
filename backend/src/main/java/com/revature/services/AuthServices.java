package com.revature.services;

import com.revature.DAOS.AuthDAO;
import com.revature.models.User;

public class AuthServices {

	AuthDAO authDAO = new AuthDAO();
	
	public User userLogin(String username, String password) {
		if (authDAO.userLogin(username, password) != null) {
			return authDAO.userLogin(username, password);
		}
		return null;
	}
	
	public User adminLogin(String username, String password) {
		if (authDAO.userLogin(username, password) != null) {
			return authDAO.userLogin(username, password);
		}
		return null;
	}
}
