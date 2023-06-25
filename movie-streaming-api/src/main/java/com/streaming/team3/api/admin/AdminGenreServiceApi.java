package com.streaming.team3.api.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.form.AddGenreForm;
import com.streaming.team3.domain.service.GenreService;

@RestController
@RequestMapping("/admin")
public class AdminGenreServiceApi {

    public AdminGenreServiceApi() {
    }
    
    @Autowired
    private GenreService genreService;

    @GetMapping("/allGenre")
    public ApiResult listAllGenres() {
        return ApiResult.success(genreService.getAll());
    }
    @PostMapping("/addGenre")
	public ApiResult addGenre(
			 @RequestParam("id") int aid, @RequestBody AddGenreForm form) {
    	
        return ApiResult.success(genreService.addGenre(form));
    }

}