package com.streaming.team3.domain.dto.form;

import lombok.Data;

@Data
public class SignInForm {

    /**
     * Default constructor
     */
    public SignInForm() {
    }

    /**
     * 
     */
    private String email;

    /**
     * 
     */
    private String password;

}