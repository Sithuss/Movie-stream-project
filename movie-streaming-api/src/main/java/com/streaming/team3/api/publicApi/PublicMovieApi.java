package com.streaming.team3.api.publicApi;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.service.GenreService;
import com.streaming.team3.domain.service.MovieService;

/**
 * 
 */
public class PublicMovieApi {

    /**
     * Default constructor
     */
    public PublicMovieApi() {
    }

    /**
     * 
     */
    public MovieService movieService;

    /**
     * 
     */
    public GenreService genreService;

    /**
     * @return
     */
    public ApiResult findAllMovies() {
        // TODO implement here
        return null;
    }

    /**
     * @return
     */
    public ApiResult SearchMovie() {
        // TODO implement here
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