package com.streaming.team3.api.publicApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.SignInDto;
import com.streaming.team3.domain.dto.UploaderSignUpDto;
import com.streaming.team3.domain.dto.VO.LoginUserVO;
import com.streaming.team3.domain.dto.form.AddAdminForm;
import com.streaming.team3.domain.dto.form.UploaderSignUpForm;
import com.streaming.team3.domain.dto.form.UserSignUpForm;
import com.streaming.team3.domain.service.SecurityService;

@RestController
@RequestMapping("/public")
public class PublicSecurityApi {

	@Autowired
    public SecurityService securityService;

    /**
     * @param form 
     * @return
     */
    public ApiResult signIn(SignInDto form) {
        // TODO implement here
        return null;
    }

    @PostMapping("/security/register/user")
    public ApiResult<LoginUserVO> userSignUp(@RequestBody @Validated UserSignUpForm form, BindingResult result) {
        securityService.create(form);
        return null;
    }
    
    @PostMapping("/security/register/uploader")
    public ApiResult<LoginUserVO> uploaderSignUp(@RequestBody @Validated UploaderSignUpForm form, BindingResult result) {
        
        return null;
    }
    
    @PostMapping("/security/addAdmin")
    public ApiResult<LoginUserVO> addAmin(@RequestBody @Validated AddAdminForm form, BindingResult result) {
        
        return null;
    }

    /**
     * @param form 
     * @return
     */
    public ApiResult uploaderSignUp(UploaderSignUpDto form) {
        // TODO implement here
        return null;
    }

}