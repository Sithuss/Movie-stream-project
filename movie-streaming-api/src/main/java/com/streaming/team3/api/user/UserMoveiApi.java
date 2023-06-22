package com.streaming.team3.api.user;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.service.GenreService;
import com.streaming.team3.domain.service.MovieService;

/**
 * 
 */
public class UserMoveiApi {

    /**
     * Default constructor
     */
    public UserMoveiApi() {
    }

    /**
     * 
     */
    private MovieService movieService;

    /**
     * 
     */
    private GenreService genreService;

    /**
     * @param movieId 
     * @return
     */
    public ApiResult watchMovie(Integer movieId) {
        // TODO implement here
        return null;
    }

    /**
     * @param movieId 
     * @param userId 
     * @return
     */
    public ApiResult giveReview(Integer movieId, Integer userId) {
        // TODO implement here
        return null;
    }

    /**
     * @param amount 
     * @param userId 
     * @param paymentMethod 
     * @param transactionNo 
     * @return
     */
    public ApiResult buyPackage(Integer amount,int userId, String paymentMethod, Integer transactionNo) {
        // TODO implement here
        return null;
    }

    /**
     * @param userId 
     * @param movieId 
     * @return
     */
    public ApiResult listBookMark(Integer userId, Integer movieId) {
        // TODO implement here
        return null;
    }

    /**
     * @param userId 
     * @return
     */
    public ApiResult bookMark(int userId) {
        // TODO implement here
        return null;
    }

    /**
     * @param userId 
     * @return
     */
    public ApiResult watchedHistory(int userId) {
        // TODO implement here
        return null;
    }

}