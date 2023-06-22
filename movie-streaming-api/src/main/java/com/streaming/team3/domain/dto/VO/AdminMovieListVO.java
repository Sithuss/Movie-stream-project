package com.streaming.team3.domain.dto.VO;

import com.streaming.team3.domain.entity.Movie;

import lombok.Data;

@Data
public class AdminMovieListVO {

    /**
     * Default constructor
     */
    public AdminMovieListVO() {
    }

    /**
     * 
     */
    public Movie movies[];

}