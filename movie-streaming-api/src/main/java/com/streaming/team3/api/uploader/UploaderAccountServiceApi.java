package com.streaming.team3.api.uploader;

import java.util.Optional;

import com.streaming.team3.domain.dto.VO.UploaderAccountVO;
import com.streaming.team3.domain.dto.form.UploaderAccountEditForm;
import com.streaming.team3.domain.service.AccountService;

/**
 * 
 */
public class UploaderAccountServiceApi {

    /**
     * Default constructor
     */
    public UploaderAccountServiceApi() {
    }

    /**
     * 
     */
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