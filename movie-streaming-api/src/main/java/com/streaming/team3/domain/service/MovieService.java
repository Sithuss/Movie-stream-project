package com.streaming.team3.domain.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.streaming.team3.domain.dto.BuyPackageDto;
import com.streaming.team3.domain.dto.GiveReviewDto;
import com.streaming.team3.domain.dto.MovieReviewDto;
import com.streaming.team3.domain.dto.VO.MovieDto;
import com.streaming.team3.domain.dto.VO.ReadReviewVO;
import com.streaming.team3.domain.dto.form.MovieForm;
import com.streaming.team3.domain.repo.AccountRepo;
import com.streaming.team3.domain.repo.GenresRepo;
import com.streaming.team3.domain.repo.MovieRepo;
import com.streaming.team3.domain.repo.MovieReviewRepo;

@Service
public class MovieService {


    public MovieService() {
    }


    private MovieRepo movieReop;


    private GenresRepo genreRepo;

   
    private MovieReviewRepo reviewRepo;

   
    private AccountRepo accRepo;

   
    public Optional<List<MovieDto>> findAllMovies() {
        // TODO implement here
        return null;
    }

    /**
     * @param genre 
     * @return
     */
    public Optional<List<MovieDto>> findMovieByGenre(String genre) {
        // TODO implement here
        return null;
    }

    /**
     * @param mvId 
     * @return
     */
    public Optional<List<ReadReviewVO>> readReview(int mvId) {
        // TODO implement here
        return null;
    }

    /**
     * @param review 
     * @return
     */
    public String giveReview(GiveReviewDto review) {
        // TODO implement here
        return "";
    }

    /**
     * @param review 
     * @return
     */
    public Optional<String> watchMovie(MovieReviewDto review) {
        // TODO implement here
        return null;
    }

    /**
     * @param buy 
     * @return
     */
    public String buyPackage(BuyPackageDto buy) {
        // TODO implement here
        return "";
    }

    /**
     * @param uId 
     * @param mId 
     * @return
     */
    public String bookMark(int uId, int mId) {
        // TODO implement here
        return "";
    }

    /**
     * @param uid 
     * @return
     */
    public Optional<List<MovieDto>> watchedHistory(int uid) {
        // TODO implement here
        return null;
    }

    /**
     * @param movie 
     * @return
     */
    public Optional<MovieDto> uploadMovie(MovieForm movie) {
        // TODO implement here
        return null;
    }

    /**
     * @param movie 
     * @return
     */
    public Optional<MovieDto> editMovie(MovieForm movie) {
        // TODO implement here
        return null;
    }

    /**
     * @param movieId 
     * @return
     */
    public Optional<String> deleteMovie(int movieId) {
        // TODO implement here
        return null;
    }

}