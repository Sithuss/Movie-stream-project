package com.streaming.team3.api.publicApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.service.GenreService;
import com.streaming.team3.domain.service.MovieService;

@RestController
@RequestMapping("/public")
public class PublicMovieApi {

    @Autowired
    public MovieService movieService;

    @Autowired
    public GenreService genreService;

    public ApiResult findAllMovies() {
        // TODO implement here
        return null;
    }

    /**
     * @return
     */
    public ApiResult SearchMovie() {
//        return ApiResult.success(movieService.search(null, null));
    	return null;
    }

    /**
     * @param genre 
     * @return
     */
    public ApiResult findMoviesByGenre(String genre) {
        // TODO implement here
        return null;
    }

    /**
     * @param movieId
     */
    public void readReview(int movieId) {
        // TODO implement here
    }

}