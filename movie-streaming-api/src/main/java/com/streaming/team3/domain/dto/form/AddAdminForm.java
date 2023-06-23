package com.streaming.team3.domain.dto.form;

import com.streaming.team3.domain.entity.Account;
import com.streaming.team3.domain.entity.Role;

import lombok.Data;

@Data
public class AddAdminForm {

    public AddAdminForm() {
    }

    public String name;

    public String email;

    public String password;

    public String role;
    
    public Account entity() {
    	var entity = new Account();
    	entity.setName(name);
    	entity.setEmail(email);
    	entity.setRole(Role.ADMIN);
    	return entity;
    }
   
}