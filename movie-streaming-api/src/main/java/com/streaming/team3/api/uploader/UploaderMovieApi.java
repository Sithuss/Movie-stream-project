package com.streaming.team3.api.uploader;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.form.MovieForm;
import com.streaming.team3.domain.service.MovieService;

/**
 * 
 */
public class UploaderMovieApi {

    /**
     * Default constructor
     */
    public UploaderMovieApi() {
    }

    /**
     * 
     */
    private MovieService movieService;

    /**
     * @param form 
     * @return
     */
    public ApiResult uploadMovie(MovieForm form) {
        // TODO implement here
        return null;
    }

    /**
     * @param uid 
     * @return
     */
    public ApiResult movieUploadHistory(int uid) {
        // TODO implement here
        return null;
    }

    /**
     * @param id 
     * @param form 
     * @return
     */
    public ApiResult editMovie(int id, MovieForm form) {
        // TODO implement here
        return null;
    }

    /**
     * @param id 
     * @return
     */
    public ApiResult deleteMovie(int id) {
        // TODO implement here
        return null;
    }

}