package com.streaming.team3.api.publicApi;

import static com.streaming.team3.utils.ExceptionUtils.keyNotFound;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.VO.LoginUserVO;
import com.streaming.team3.domain.dto.form.AddAdminForm;
import com.streaming.team3.domain.dto.form.SignInForm;
import com.streaming.team3.domain.dto.form.UploaderSignUpForm;
import com.streaming.team3.domain.dto.form.UserSignUpForm;
import com.streaming.team3.domain.service.SecurityService;


@RestController
@RequestMapping("/public")
public class PublicSecurityApi {

	@Autowired
    private SecurityService securityService;

	@Autowired
	private AuthenticationManager authenticationManager;
    
	@PostMapping("/security/signIn")
    public ApiResult<LoginUserVO> signIn(@RequestBody @Validated SignInForm form, BindingResult result) {
        
    	var authentication = authenticationManager.authenticate(form.authentication());
    	
    	SecurityContextHolder.getContext().setAuthentication(authentication);
    	
        return securityService.signIn(form.getEmail()).map(ApiResult::success)
        		.orElseThrow(() -> keyNotFound("Account", "email", form.getEmail()));
    }

    @PostMapping("/security/register/user")
    public ApiResult<String> userSignUp(@RequestBody @Validated UserSignUpForm form, BindingResult result) {
        securityService.create(form);
        return ApiResult.success("new user account registred");
    }
    
    @PostMapping("/security/register/uploader")
    public ApiResult<String> uploaderSignUp(@RequestBody @Validated UploaderSignUpForm form, BindingResult result) {
    	securityService.create(form);
        return ApiResult.success("new uploader account registred");
    }
    
    @PostMapping("/security/addAdmin")
    public ApiResult<String> addAmin(@RequestBody @Validated AddAdminForm form, BindingResult result) {
    	securityService.create(form);
        return ApiResult.success("new admin account registred");
    }


}