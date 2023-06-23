package com.streaming.team3.api.admin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.service.AccountService;

@RestController
@RequestMapping("/admin")
public class AdminAllUsersApi {

    /**
     * Default constructor
     */
    public AdminAllUsersApi() {
    }

    /**
     * 
     */
    private AccountService accountService;

    /**
     * @return
     */
    public ApiResult getAllAcc() {
        // TODO implement here
        return null;
    }

    /**
     * @param id 
     * @return
     */
    public ApiResult removePeople(int id) {
        // TODO implement here
        return null;
    }

}