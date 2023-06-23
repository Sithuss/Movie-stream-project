package com.streaming.team3.domain.dto.form;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class MovieForm {

    public MovieForm() {
    }

    @NotBlank(message = "Please enter movie name")
    private String title;

    @NotBlank(message = "Please enter movie length")
    private String movieLength;

    @NotBlank(message = "Please enter movie casts")
    private String casts;

    @NotBlank(message = "Please enter movie genres")
    private String genres;

    @NotBlank(message = "Please enter movie poster")
    private MultipartFile poster;

    @NotBlank(message = "Please enter movie released date")
    private LocalDate releaseDate;

    @NotBlank(message = "Please enter movie trailer link")
    private String TrailerLink;

    @NotBlank(message = "Please enter movie description")
    private String Description;

    @NotBlank(message = "Please enter movie director")
    private String Director;

}