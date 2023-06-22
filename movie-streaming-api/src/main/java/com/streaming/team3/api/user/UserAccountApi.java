package com.streaming.team3.api.user;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.VO.UserAccountVO;
import com.streaming.team3.domain.dto.form.UserEditForm;
import com.streaming.team3.domain.service.AccountService;

/**
 * 
 */
public class UserAccountApi {

    /**
     * Default constructor
     */
    public UserAccountApi() {
    }

    /**
     * 
     */
    private AccountService accountService;

    /**
     * @param int id 
     * @param editForm
     */
    public UserAccountVO userEditAccount(int id, UserEditForm editForm) {
        // TODO implement here
    	return null;
    }

    /**
     * @return
     */
    public ApiResult accountProfile() {
        // TODO implement here
        return null;
    }

}