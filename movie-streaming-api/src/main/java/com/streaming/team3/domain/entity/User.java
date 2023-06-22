package com.streaming.team3.domain.entity;

import lombok.Data;

@Data
public class User extends Account {

    /**
     * Default constructor
     */
    public User() {
    }

    /**
     * 
     */
    private int premiumPk;

    /**
     * 
     */
    private Movie bookMarks[];

    /**
     * 
     */
    private Movie watchedHistory[];

}