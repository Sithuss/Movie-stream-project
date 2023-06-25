package com.streaming.team3.api.uploader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.form.MovieForm;
import com.streaming.team3.domain.service.MovieService;

@RestController
@RequestMapping("/uploader")
public class UploaderMovieApi {

	@Autowired
    private MovieService movieService;

	
	@PostMapping("/upload")
    public ApiResult uploadMovie(@RequestBody MovieForm form) {
        return ApiResult.success(movieService.uploadMovie(form));
    }
	
	@GetMapping("/search")
	public ApiResult search(@RequestParam("id") int id){
		return ApiResult.success(movieService.movieDetail(id));
	}
	
	@PostMapping("/test")
	public String test(@RequestBody String name) {
		return "hello"+ name ;
	}

    public ApiResult movieUploadHistory(int uid) {
        return null;
    }

    public ApiResult editMovie(int id, MovieForm form) {
        return null;
    }
    public ApiResult deleteMovie(int id) {
        return null;
    }

}