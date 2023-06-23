package com.streaming.team3.domain.dto.VO;

import java.time.LocalDate;

import lombok.Data;

@Data
public class MovieDto {

    public MovieDto() {
    }
    private int id;

    private String title;

    private String description;

    private String casts[];

    private LocalDate releasedDate;

    private String director;

    private String scriptWriter;

    private String trailer;

    private Byte poster[];

    private String publisher;

}