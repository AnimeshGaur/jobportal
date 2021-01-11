/**
 * Model class for Role entity.
 * 
 * @author	Sushant Vairagade
 * @version 1.0
 * @Since	11-05-2017
 */

package com.hireme.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class Role {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="role_id")
	private int id;
	
	@Column(name="role")
	private String role;
	
	@ManyToMany(mappedBy = "roles")
	private Set<User> users;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getRole() {
		return role;
	}
	
	public void setRole(String role) {
		this.role = role;
	}
	
	public Set<User> getUsers() {
        return users;
    }
	
	public void setUsers(Set<User> users) {
        this.users = users;
    }
}