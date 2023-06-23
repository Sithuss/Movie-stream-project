package com.streaming.team3.api.publicApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.service.GenreService;

@RestController
@RequestMapping("/public")
public class PublicGenreApi {


    @Autowired
    private GenreService genreSevice;

    /**
     * @return
     */
    public ApiResult listAllGenres() {
        // TODO implement here
        return null;
    }

}