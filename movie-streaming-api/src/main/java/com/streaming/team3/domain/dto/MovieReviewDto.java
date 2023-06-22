package com.streaming.team3.domain.dto;

import lombok.Data;

@Data
public class MovieReviewDto {

    /**
     * Default constructor
     */
    public MovieReviewDto() {
    }

    /**
     * 
     */
    private int mv_id;

    /**
     * 
     */
    private int uid;

    /**
     * 
     */
    private String review;

}