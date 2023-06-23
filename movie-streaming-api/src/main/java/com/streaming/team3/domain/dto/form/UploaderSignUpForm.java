package com.streaming.team3.domain.dto.form;

import lombok.Data;

@Data
public class UploaderSignUpForm {

    /**
     * Default constructor
     */
    public UploaderSignUpForm() {
    }

    /**
     * 
     */
    private String name;

    /**
     * 
     */
    private String email;

    /**
     * 
     */
    private String password;

    /**
     * 
     */
    private String paymentMethod;

    /**
     * 
     */
    private String transactionNumber;

    /**
     * 
     */
    private String role;

}