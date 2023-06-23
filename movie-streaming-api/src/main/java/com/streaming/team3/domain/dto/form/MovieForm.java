package com.streaming.team3.domain.dto.form;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class MovieForm {

    /**
     * Default constructor
     */
    public MovieForm() {
    }

    /**
     * 
     */
    private String title;

    /**
     * 
     */
    private String movieLength;

    /**
     * 
     */
    private String casts[];

    /**
     * 
     */
    private String genres[];


    private MultipartFile poster;

    private LocalDate releaseDate;

    /**
     * 
     */
    private String TrailerLink;

    /**
     * 
     */
    private String Description;

    /**
     * 
     */
    private String Director;

}