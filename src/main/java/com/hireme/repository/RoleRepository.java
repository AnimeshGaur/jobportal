/**
 * Repository class for Role entity.
 * 
 * @author	Sushant Vairagade
 * @version 1.0
 * @Since	11-05-2017
 */

package com.hireme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.Role;

@Repository("roleRepository")
public interface RoleRepository extends JpaRepository<Role, Long> {

	Role findByRole(String role);
	
}
