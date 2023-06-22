package com.streaming.team3.domain.dto.VO;

import com.streaming.team3.domain.entity.Movie;

import lombok.Data;

@Data
public class UploaderUploadHistory {

    /**
     * Default constructor
     */
    public UploaderUploadHistory() {
    }

    /**
     * 
     */
    private int uid;

    /**
     * 
     */
    private Movie movie[];

}