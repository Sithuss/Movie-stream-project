package com.streaming.team3.domain.dto;

import lombok.Data;

@Data
public class BuyPackageDto {

    /**
     * Default constructor
     */
    public BuyPackageDto() {
    }

    /**
     * 
     */
    private int uid;

    /**
     * 
     */
    private int packageCount;

    /**
     * 
     */
    private String paymentMethod;

    /**
     * 
     */
    private String transaction;

}