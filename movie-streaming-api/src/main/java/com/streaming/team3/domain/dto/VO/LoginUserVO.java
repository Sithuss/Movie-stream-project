package com.streaming.team3.domain.dto.VO;

import lombok.Data;

@Data
public class LoginUserVO {

    /**
     * Default constructor
     */
    public LoginUserVO() {
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
    private String role;

}