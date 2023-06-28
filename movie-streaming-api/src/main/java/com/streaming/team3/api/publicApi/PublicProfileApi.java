package com.streaming.team3.api.publicApi;

import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.VO.UploaderAccountVO;
import com.streaming.team3.domain.dto.VO.UserAccountVO;
import com.streaming.team3.domain.service.AccountService;

import jakarta.persistence.EntityNotFoundException;


@RestController
@RequestMapping("/public/account")
public class PublicProfileApi {

	@Autowired
	private AccountService accountService;
	
	@GetMapping("/userProfile")
	public ApiResult<UserAccountVO> getAccountInfo(@RequestParam("email") String email) {
		System.out.println(email);
		return accountService.getUserInfo(email).map(ApiResult::success).orElseThrow(EntityNotFoundException::new);
	}
	
	@GetMapping("/uploaderProfile")
	public ApiResult<UploaderAccountVO> getUploaderInfo(@RequestParam("email") String email) {
		return accountService.getUploaderInfo(email).map(ApiResult::success).orElseThrow(EntityNotFoundException::new);
	}
}
