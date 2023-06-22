package com.streaming.team3.domain.dto.VO;

import lombok.Data;

@Data
public class AccountVO {

    /**
     * Default constructor
     */
    public AccountVO() {
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
    private String role;

}