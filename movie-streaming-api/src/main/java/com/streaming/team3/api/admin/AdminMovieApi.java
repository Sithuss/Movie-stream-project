package com.streaming.team3.api.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.ApiResult;
import com.streaming.team3.domain.service.AccountService;

@RestController
@RequestMapping("/admin")
public class AdminMovieApi {

    @Autowired
    private AccountService accountService;

    /**
     * @return
     */
    public ApiResult listAllMovie() {
        // TODO implement here
        return null;
    }

    /**
     * @param id 
     * @return
     */
    public ApiResult removeMovie(int id) {
        // TODO implement here
        return null;
    }

}