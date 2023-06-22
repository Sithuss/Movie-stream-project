package com.streaming.team3.domain.dto;

import lombok.Data;

@Data
public class AdminAddDto {

    /**
     * Default constructor
     */
    public AdminAddDto() {
    }

    /**
     * 
     */
    private int id;

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

}