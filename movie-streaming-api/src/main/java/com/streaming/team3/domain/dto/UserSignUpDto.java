package com.streaming.team3.domain.dto;

import lombok.Data;

@Data
public class UserSignUpDto {

    /**
     * Default constructor
     */
    public UserSignUpDto() {
    }

    /**
     * 
     */
    public int id;

    /**
     * 
     */
    public String name;

    /**
     * 
     */
    public String email;

    /**
     * 
     */
    public String password;

}