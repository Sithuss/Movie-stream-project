package com.streaming.team3.api.uploader;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.streaming.team3.domain.dto.VO.UploaderAccountVO;
import com.streaming.team3.domain.dto.form.UploaderAccountEditForm;
import com.streaming.team3.domain.service.AccountService;

@RestController
@RequestMapping("/uploader")
public class UploaderAccountServiceApi {

    @Autowired
    private AccountService accountService;

    /**
     * @param id 
     * @param form
     */
    public void uploaderEditAccount(int id, UploaderAccountEditForm form) {
        // TODO implement here
    }

    /**
     * @param id 
     * @return
     */
    public Optional<UploaderAccountVO> uploaderAccountProfile(int id) {
        // TODO implement here
        return null;
    }

}