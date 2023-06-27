package com.streaming.team3.domain.dto.form;

import com.streaming.team3.domain.entity.Role;
import com.streaming.team3.domain.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserSignUpForm {

    public UserSignUpForm() {
    }

    @NotBlank(message = "Please enter your name")
    private String name;
    @Email(message = "Invalid Email format")
    private String email;
    @NotBlank(message = "Please enter password")
    private String password;
    
    private int premiumPk;
  
    private String role;
    
    public User entity() {
    	var entity = new User();
    	entity.setName(name);
    	entity.setEmail(email);
    	entity.setRole(Role.USER);
    	entity.setPremiumPk(0);
    	return entity;
    }

}