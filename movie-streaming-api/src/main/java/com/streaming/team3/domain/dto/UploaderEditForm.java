package com.streaming.team3.domain.dto;

import lombok.Data;

@Data
public class UploaderEditForm {

    /**
     * Default constructor
     */
    public UploaderEditForm() {
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
    
    private String paymentMethod;

    /**
     * 
     */
    private String transactionNumber;

}