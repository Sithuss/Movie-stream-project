package com.streaming.team3.api.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
=======

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

>>>>>>> 4e55887 (save)
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.BuyPackageDto;
import com.streaming.team3.domain.dto.VO.BuyPackageResponseVO;
import com.streaming.team3.domain.repo.MovieRepo;
import com.streaming.team3.domain.service.GenreService;
import com.streaming.team3.domain.service.MovieService;

@RestController
@RequestMapping("/user")
public class UserMoveiApi {

	@Autowired
	private MovieService movieService;

	@Autowired
	private GenreService genreService;

<<<<<<< HEAD
	@Autowired
	private MovieRepo movieRepo;

	@GetMapping("/watch")
	public ApiResult watchMovie(@RequestParam("id") int movieId) {
		return ApiResult.success(movieService.watchMovie(movieId));
	}

	public ApiResult giveReview(Integer movieId, Integer userId) {
		return null;
	}
	@PostMapping("/buy")
	public ApiResult buyPackage(@RequestBody BuyPackageDto buyPackageDto) {
		String purchase = movieService.buyPackage(buyPackageDto);
=======
    /**
     * @param movieId 
     * @return
     */
    @GetMapping("/watch")
    public ApiResult watchMovie(@RequestParam("id") int movieId) {
        return ApiResult.success(movieService.watchMovie(movieId));}
    
    
>>>>>>> 4e55887 (save)

		int packageCount = buyPackageDto.getPackageCount();
		int totalCost = packageCount * 10;

		BuyPackageResponseVO response = new BuyPackageResponseVO();
		response.setPackageCount(packageCount);
		response.setTotalCost(totalCost);

		return ApiResult.success(response);
	}

	public ApiResult listBookMark(Integer userId, Integer movieId) {
		return null;
	}
	public ApiResult bookMark(int userId) {
		return null;
	}

	public ApiResult watchedHistory(int userId) {
		return null;
	}
	@PostMapping("/search")
	public ApiResult search(@RequestParam Optional<Integer> genres,
			@RequestParam Optional<String> keyword,
			@RequestParam Optional<String> casts,
			@RequestParam Optional<String> director,
			@RequestParam Optional<String> scriptWriter) {
		var res = movieService.search(genres, keyword, casts, director,
				scriptWriter);
		return ApiResult.success(res);
	}
}
