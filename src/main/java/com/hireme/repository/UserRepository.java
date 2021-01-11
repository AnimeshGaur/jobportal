/**
 * Repository class for User entity.
 * 
 * @author	Sushant Vairagade
 * @version 1.0
 * @Since	11-05-2017
 */

package com.hireme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.User;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);
	
}