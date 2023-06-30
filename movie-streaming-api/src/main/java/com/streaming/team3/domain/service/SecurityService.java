package com.streaming.team3.domain.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.streaming.team3.domain.dto.SignInDto;
import com.streaming.team3.domain.dto.VO.AccountVO;
import com.streaming.team3.domain.dto.VO.LoginUserVO;
import com.streaming.team3.domain.dto.VO.UploaderAccountVO;
import com.streaming.team3.domain.dto.VO.UserAccountVO;
import com.streaming.team3.domain.dto.form.AddAdminForm;
import com.streaming.team3.domain.dto.form.UploaderSignUpForm;
import com.streaming.team3.domain.dto.form.UserSignUpForm;
import com.streaming.team3.domain.entity.Account;
import com.streaming.team3.domain.entity.Uploader;
import com.streaming.team3.domain.entity.User;
import com.streaming.team3.domain.repo.AccountRepo;
import com.streaming.team3.domain.repo.UploaderRepo;
import com.streaming.team3.domain.repo.UserRepo;


@Service
public class SecurityService {

    public SecurityService() {
    }

    @Autowired
    public AccountRepo repo;

    @Autowired
    public UserRepo userRepo;

    @Autowired
    public UploaderRepo uploaderRepo;
    
    @Autowired
    public PasswordEncoder passwordEncoder;

    
    public Account create(UserSignUpForm userSignUpForm) {
    	var entity = userSignUpForm.entity();
    	entity.setPassword(passwordEncoder.encode(userSignUpForm.getPassword()));
        return repo.save(entity);
    }

    
    public Uploader createUploader(UploaderSignUpForm uploaderSignUpForm) {
        var entity = uploaderSignUpForm.entity();
        entity.setPassword(passwordEncoder.encode(uploaderSignUpForm.getPassword()));
        return uploaderRepo.save(entity);
    }

    public Account create(AddAdminForm addAdminForm) {
        var entity = addAdminForm.entity();
        entity.setPassword(passwordEncoder.encode(addAdminForm.getPassword()));
        return repo.save(entity);
    }

    @Transactional(readOnly = true)
    public Optional<LoginUserVO> signIn(String email) {
        return repo.findOneByEmail(email).map(LoginUserVO::form);
    }

}










