package com.streaming.team3.domain.dto.VO;

import lombok.Data;

@Data
public class UserAccountVO{

    /**
     * Default constructor
     */
    public UserAccountVO() {
    }

    private int id;

    /**
     * 
     */
    private String name;

    /**
     * 
     */
    private String email;
    
    private String role;

    /**
     * 
     */
    private int premiumPK;

}