package com.streaming.team3.api.publicApi;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.SignInDto;
import com.streaming.team3.domain.dto.UploaderSignUpDto;
import com.streaming.team3.domain.dto.UserSignUpDto;
import com.streaming.team3.domain.service.SecurityService;

/**
 * 
 */
public class PublicSecurityApi {

    /**
     * Default constructor
     */
    public PublicSecurityApi() {
    }

    /**
     * 
     */
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