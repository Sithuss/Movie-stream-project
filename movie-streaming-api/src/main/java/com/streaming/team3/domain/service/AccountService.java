package com.streaming.team3.domain.service;

import java.util.List;
import java.util.Optional;

import com.streaming.team3.domain.dto.VO.LoginUserVO;
import com.streaming.team3.domain.dto.VO.UploaderAccountVO;
import com.streaming.team3.domain.dto.VO.UserAccountVO;
import com.streaming.team3.domain.dto.form.UploaderAccountEditForm;
import com.streaming.team3.domain.dto.form.UserEditForm;
import com.streaming.team3.domain.repo.AccountRepo;
import com.streaming.team3.domain.repo.UserRepo;

/**
 * 
 */
public class AccountService {

    /**
     * Default constructor
     */
    public AccountService() {
    }

    /**
     * 
     */
    public AccountRepo accRepo;

    /**
     * 
     */
    public UserRepo userRepo;

    /**
     * @param user 
     * @return
     */
    public Optional<UserAccountVO> userEditAccount(UserEditForm user) {
        // TODO implement here
        return null;
    }

    /**
     * @param uploader 
     * @return
     */
    public Optional<UploaderAccountVO> uploaderEditAccount(UploaderAccountEditForm uploader) {
        // TODO implement here
        return null;
    }

    /**
     * @param admin 
     * @return
     */
    public Optional<UserAccountVO> adminEditAccount(UserEditForm admin) {
        // TODO implement here
        return null;
    }

    /**
     * @return
     */
    public Optional<List<LoginUserVO>> listAllAccounts() {
        // TODO implement here
        return null;
    }

    /**
     * @param uid 
     * @return
     */
    public Optional<String> removeUserAccount(int uid) {
        // TODO implement here
        return null;
    }

}