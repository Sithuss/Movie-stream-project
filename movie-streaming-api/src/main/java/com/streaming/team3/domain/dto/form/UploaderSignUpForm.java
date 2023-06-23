package com.streaming.team3.domain.dto.form;

import com.streaming.team3.domain.entity.Role;
import com.streaming.team3.domain.entity.Uploader;

import lombok.Data;

@Data
public class UploaderSignUpForm {

    public UploaderSignUpForm() {
    }

    private String name;

    private String email;

    private String password;

    private String paymentMethod;

    private String transactionNumber;

    private String role;
    
    public Uploader entity() {
    	var entity = new Uploader();
    	entity.setName(name);
    	entity.setEmail(email);
    	entity.setPaymentMethod(paymentMethod);
    	entity.setTransactionNumber(transactionNumber);
    	entity.setRole(Role.UPLOADER);
    	return entity;
    }

}