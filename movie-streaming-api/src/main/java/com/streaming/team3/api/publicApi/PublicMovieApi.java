package com.streaming.team3.api.publicApi;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping("/findAll")
    public ApiResult findAllMovies() {
        return ApiResult.success(movieService.findAllMovies());
    }

    /**
     * @return
     */
    public ApiResult SearchMovie() {
    	return null;
    }

    @PostMapping("/findCate")
    public ApiResult findMoviesByGenre(@RequestParam Optional<Integer> id) {
        return ApiResult.success(movieService.findWithGenre(id));
    }

    /**
     * @param movieId
     */
    public void readReview(int movieId) {
        // TODO implement here
    }

}