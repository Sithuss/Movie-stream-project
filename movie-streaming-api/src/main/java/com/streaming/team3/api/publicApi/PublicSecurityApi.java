package com.streaming.team3.api.publicApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.SignInDto;
import com.streaming.team3.domain.dto.UploaderSignUpDto;
import com.streaming.team3.domain.dto.UserSignUpDto;
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

    /**
     * @param form 
     * @return
     */
    public ApiResult userSignUp(UserSignUpDto form) {
        // TODO implement here
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