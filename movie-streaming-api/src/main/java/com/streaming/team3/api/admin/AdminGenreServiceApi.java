package com.streaming.team3.api.admin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.service.GenreService;

@RestController
@RequestMapping("/admin")
public class AdminGenreServiceApi {

    /**
     * Default constructor
     */
    public AdminGenreServiceApi() {
    }

    /**
     * 
     */
    private GenreService genreService;

    /**
     * @return
     */
    public ApiResult listAllGenres() {
        // TODO implement here
        return null;
    }

    /**
     * @param aid 
     * @param type 
     * @return
     */
    public ApiResult addGenre(int aid, String type) {
        // TODO implement here
        return null;
    }

}