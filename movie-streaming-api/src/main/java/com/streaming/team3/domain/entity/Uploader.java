package com.streaming.team3.domain.entity;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Uploader extends Account {

    /**
     * Default constructor
     */
    public Uploader() {
    }

    /**
     * 
     */
    private String paymentMethod;

    /**
     * 
     */
    private String transactionNumber;

    /**
     * 
     */
    private long money;

}