package com.hireme.service;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.User;

public interface UserService {
	
	User getUser(String email) throws BusinessException;
	
	User getUser(long userId) throws BusinessException;
	
	User createUser(User user, String role) throws BusinessException;

}
