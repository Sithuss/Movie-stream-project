package com.streaming.team3.domain.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private MovieRepo movieRepo;

    @Autowired
    private GenresRepo genreRepo;

    @Autowired
    private MovieReviewRepo reviewRepo;

   @Autowired
    private AccountRepo accRepo;

   
    public Optional<List<MovieDto>> findAllMovies() {
        return null;
    }


    public Optional<List<MovieDto>> findMovieByGenre(String genre) {
        // TODO implement here
        return null;
    }

    public Optional<List<ReadReviewVO>> readReview(int mvId) {
        // TODO implement here
        return null;
    }

    public String giveReview(GiveReviewDto review) {
        // TODO implement here
        return "";
    }


    public Optional<String> watchMovie(MovieReviewDto review) {
        // TODO implement here
        return null;
    }

    public String buyPackage(BuyPackageDto buy) {
        // TODO implement here
        return "";
    }

    public String bookMark(int uId, int mId) {
        // TODO implement here
        return "";
    }

    public Optional<List<MovieDto>> watchedHistory(int uid) {
        // TODO implement here
        return null;
    }

    public Optional<MovieDto> uploadMovie(MovieForm movie) {

        return null;
    }

    public Optional<MovieDto> editMovie(MovieForm movie) {
        // TODO implement here
        return null;
    }


    public Optional<String> deleteMovie(int movieId) {
        // TODO implement here
        return null;
    }

}