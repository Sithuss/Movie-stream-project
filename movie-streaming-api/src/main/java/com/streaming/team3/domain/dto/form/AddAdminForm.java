package com.streaming.team3.domain.dto.form;

import lombok.Data;

@Data
public class AddAdminForm {

    /**
     * Default constructor
     */
    public AddAdminForm() {
    }

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

    /**
     * 
     */
    public String role;

}