package com.streaming.team3.domain.dto.form;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
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
    private String releaseDate;

    @NotBlank(message = "Please enter movie trailer link")
    private String trailerLink;

    @NotBlank(message = "Please enter movie description")
    private String description;

    @NotBlank(message = "Please enter movie director")
    private String director;

    @NotBlank(message = "Please enter movie script writer")
    private String scriptWriter;

    @NotBlank(message = "Please enter movie link")
    private String movieLink;

}