package com.streaming.team3.domain.dto;

import lombok.Data;

@Data
public class SignInDto {

    /**
     * Default constructor
     */
    public SignInDto() {
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