package com.streaming.team3.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.dto.VO.UserAccountVO;
import com.streaming.team3.domain.dto.form.UserEditForm;
import com.streaming.team3.domain.service.AccountService;

@RestController
@RequestMapping("/user")
public class UserAccountApi {

    @Autowired
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