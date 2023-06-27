package com.streaming.team3.api.uploader;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.VO.UploaderAccountVO;
import com.streaming.team3.domain.dto.form.UploaderAccountEditForm;
import com.streaming.team3.domain.service.AccountService;

@RestController
@RequestMapping("/uploader")
public class UploaderAccountServiceApi {

	@Autowired
	private AccountService accountService;

	@PostMapping("/edit/account")
	public ApiResult<UploaderAccountVO> uploaderEditAccount(
			@RequestBody UploaderAccountEditForm form) {
		return ApiResult.success(
				accountService.uploaderEditAccount(form.getId(), form));
	}

	@GetMapping("/account")
	public Optional<UploaderAccountVO> uploaderAccountProfile(
			@RequestParam("id") int id) {
		return Optional.of(accountService.findUpAcc(id));
	}

}