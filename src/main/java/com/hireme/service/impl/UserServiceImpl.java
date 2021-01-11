package com.hireme.service.impl;

import java.util.Arrays;
import java.util.HashSet;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.Role;
import com.hireme.model.User;
import com.hireme.repository.RoleRepository;
import com.hireme.repository.UserRepository;
import com.hireme.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public User getUser(String email) throws BusinessException {
		User user = userRepository.findByEmail(email);
		if(user == null) {
			throw new BusinessException(404, "No user found having email " + email);
		}
		return user;
	}

	@Override
	public User createUser(User user, String role) throws BusinessException {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setActive(1);
        Role userRole = roleRepository.findByRole(role); //"ADMIN"
        user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
		userRepository.save(user);
		return user;
	}

	@Override
	public User getUser(long userId) throws BusinessException {
		try {
			User user = userRepository.getOne(userId);
			user.toString(); //try to access the object so that if not found will throw an exception
			return user;
		} catch(EntityNotFoundException e) {
			throw new BusinessException(404, "No user found having id " + userId);
		}
	}
}
