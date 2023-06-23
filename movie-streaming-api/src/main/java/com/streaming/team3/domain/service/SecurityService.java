package com.streaming.team3.domain.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streaming.team3.domain.dto.SignInDto;
import com.streaming.team3.domain.dto.VO.AccountVO;
import com.streaming.team3.domain.dto.VO.LoginUserVO;
import com.streaming.team3.domain.dto.VO.UploaderAccountVO;
import com.streaming.team3.domain.dto.VO.UserAccountVO;
import com.streaming.team3.domain.dto.form.AddAdminForm;
import com.streaming.team3.domain.dto.form.UploaderSignUpForm;
import com.streaming.team3.domain.dto.form.UserSignUpForm;
import com.streaming.team3.domain.entity.Account;
import com.streaming.team3.domain.repo.AccountRepo;
import com.streaming.team3.domain.repo.UploaderRepo;
import com.streaming.team3.domain.repo.UserRepo;

@Service
public class SecurityService {

    /**
     * Default constructor
     */
    public SecurityService() {
    }

    @Autowired
    public AccountRepo repo;

    @Autowired
    public UserRepo userRepo;

    @Autowired
    public UploaderRepo uploaderRepo;

    /**
     * @param UserSignUpForm 
     * @return
     */
    public Account create(UserSignUpForm userSignUpForm) {
    	var entity = userSignUpForm.entity();
    	entity.setPassword(null);
        return repo.save(entity);
    }

    /**
     * @param uploader 
     * @return
     */
    public Optional<UploaderAccountVO> create(UploaderSignUpForm uploader) {
        // TODO implement here
        return null;
    }

    /**
     * @param admin 
     * @return
     */
    public Optional<AccountVO> create(AddAdminForm admin) {
        // TODO implement here
        return null;
    }

    /**
     * @param signIn 
     * @return
     */
    public Optional<LoginUserVO> singIn(SignInDto signIn) {
        // TODO implement here
        return null;
    }

}