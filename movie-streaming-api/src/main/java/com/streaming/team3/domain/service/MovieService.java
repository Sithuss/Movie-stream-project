package com.streaming.team3.domain.service;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streaming.team3.domain.dto.BuyPackageDto;
import com.streaming.team3.domain.dto.GiveReviewDto;
import com.streaming.team3.domain.dto.MovieReviewDto;
import com.streaming.team3.domain.dto.VO.MovieListVo;
import com.streaming.team3.domain.dto.VO.MovieVo;
import com.streaming.team3.domain.dto.VO.ReadReviewVO;
import com.streaming.team3.domain.dto.form.MovieForm;
import com.streaming.team3.domain.entity.Genres;
import com.streaming.team3.domain.entity.Movie;
import com.streaming.team3.domain.entity.MovieLink;
import com.streaming.team3.domain.entity.People;
import com.streaming.team3.domain.repo.AccountRepo;
import com.streaming.team3.domain.repo.GenresRepo;
import com.streaming.team3.domain.repo.MovieLinkRepo;
import com.streaming.team3.domain.repo.MovieRepo;
import com.streaming.team3.domain.repo.MovieReviewRepo;
import com.streaming.team3.domain.repo.PeopleRepo;
import com.streaming.team3.domain.repo.UploaderRepo;

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

   @Autowired
   private UploaderRepo uploaderRepo;
   
   @Autowired
   private MovieLinkRepo movieLinkRepo;
   
   @Autowired
   private PeopleRepo peopleRepo;

   
    public Optional<List<MovieVo>> findAllMovies() {
        return null;
    }


    public Optional<List<MovieVo>> findMovieByGenre(String genre) {
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

    public Optional<List<MovieVo>> watchedHistory(int uid) {
        // TODO implement here
        return null;
    }

    public MovieListVo uploadMovie(MovieForm movie) {

//        var uploader = uploaderRepo.findUploaderByEmail(
//                SecurityContextHolder.getContext().getAuthentication().getName()).orElseThrow(EntityNotFoundException::new);
        var upMovie = new Movie();
        upMovie.setTitle(movie.getTitle());
        upMovie.setDescription(movie.getDescription());
        upMovie.setReleaseDate(movie.getReleaseDate());
        upMovie.setTrailerLink(movie.getTrailerLink());
        upMovie.setUploadedDate(LocalDate.now());
        upMovie.setPremiumVC(0);
        upMovie.setMovieLength(movie.getMovieLength());
        var genres = movie.getGenres().split(",");
        Arrays.stream(genres).map(Genres::new).forEach(g -> {
        	genreRepo.save(g);
        	upMovie.getGenres().add(g);
        });
		/*
		 * try { upMovie.setPoster(movie.getPoster().getBytes()); }catch (Exception e){
		 * System.out.println("nani"); }
		 */
        byte[] byteArray = { 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100 };

        upMovie.setPoster(byteArray);
        var casts = movie.getCasts().split(",");
        Arrays.stream(casts).map(People::new).forEach( c -> {
        	peopleRepo.save(c);
        	upMovie.getCasts().add(c);
        });
        var director = movie.getDirector().split(",");
        Arrays.stream(director).map(People::new).forEach(c -> {
        	peopleRepo.save(c);
        	upMovie.getCasts().add(c);
        	});
        var scriptWriter = movie.getScriptWriter().split(",");
        Arrays.stream(scriptWriter).map(People::new).forEach(c -> {
        	peopleRepo.save(c);
        	upMovie.getCasts().add(c);
        });
        var ml = new MovieLink(movie.getMovieLink());
        movieLinkRepo.save(ml);
        
        
        
        upMovie.setLink(ml);
        movieRepo.save(upMovie);
        return MovieListVo.form(upMovie);
    }

    public Optional<MovieVo> editMovie(MovieForm movie) {
        // TODO implement here
        return null;
    }


    public Optional<String> deleteMovie(int movieId) {
        // TODO implement here
        return null;
    }

}