package com.streaming.team3.domain.dto;

import lombok.Data;

@Data
public class UploaderSignUpDto {

    /**
     * Default constructor
     */
    public UploaderSignUpDto() {
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
    private String paymentMethod;

    /**
     * 
     */
    private String TransactionNumber;

    /**
     * 
     */
    private String compName;

    /**
     * 
     */
    private String password;

}