package com.streaming.team3.domain.dto.form;

import lombok.Data;

@Data
public class UserEditForm {

    /**
     * Default constructor
     */
    public UserEditForm() {
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

}