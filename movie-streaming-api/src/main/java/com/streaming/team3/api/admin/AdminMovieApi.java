package com.streaming.team3.api.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.service.AccountService;
import com.streaming.team3.domain.service.MovieService;

@RestController
@RequestMapping("/admin")
public class AdminMovieApi {

    @Autowired
    private AccountService accountService;

    @Autowired
    private MovieService movieService;
    
    @GetMapping("/findAll")
    public ApiResult listAllMovie() {
        return ApiResult.success(movieService.findAllMovies());
    }

    @GetMapping("/delete")
    public ApiResult removeMovie(int id) {
        return ApiResult.success(movieService.deleteMovie(id));
    }

}