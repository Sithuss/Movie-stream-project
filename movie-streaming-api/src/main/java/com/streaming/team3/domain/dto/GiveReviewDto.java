package com.streaming.team3.domain.dto;

import lombok.Data;

@Data
public class GiveReviewDto {

    /**
     * Default constructor
     */
    public GiveReviewDto() {
    }

    /**
     * 
     */
    private int uId;

    /**
     * 
     */
    private int mId;

    /**
     * 
     */
    private String review;

}