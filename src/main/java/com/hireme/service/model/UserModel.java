package com.hireme.service.model;

import com.hireme.model.User;

/**
 * Created by Sohrab-PC on 5/21/2017.
 */
public class UserModel {

    private String email;

    private String password;

    private String role;

    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
