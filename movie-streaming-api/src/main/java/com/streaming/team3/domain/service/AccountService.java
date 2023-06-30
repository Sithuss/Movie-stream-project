package com.streaming.team3.domain.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streaming.team3.domain.dto.VO.LoginUserVO;
import com.streaming.team3.domain.dto.VO.UploaderAccountVO;
import com.streaming.team3.domain.dto.VO.UserAccountVO;
import com.streaming.team3.domain.dto.form.UploaderAccountEditForm;
import com.streaming.team3.domain.dto.form.UserEditForm;
import com.streaming.team3.domain.entity.Account;
import com.streaming.team3.domain.entity.Role;
import com.streaming.team3.domain.repo.AccountRepo;
import com.streaming.team3.domain.repo.UploaderRepo;
import com.streaming.team3.domain.repo.UserRepo;

import jakarta.transaction.Transactional;

@Service
public class AccountService {

    public AccountService() {}
    
    @Autowired
    private AccountRepo accRepo;

    @Autowired
    private UserRepo userRepo;
    
    @Autowired
    private UploaderRepo uploaderRepo;

    public Optional<UserAccountVO> userEditAccount(UserEditForm user) {
        return null;
    }

    @Transactional
    public UploaderAccountVO uploaderEditAccount(int id, UploaderAccountEditForm uploader) {
        var u = uploaderRepo.findById(id).get();
        u.setName(uploader.getName());
        u.setEmail(uploader.getEmail());
        u.setPassword(u.getPassword());
        u.setPaymentMethod(uploader.getPaymentMethod());
        u.setCompanyName(u.getCompanyName());
        u.setTransactionNumber(uploader.getTransactionNumbser());
        u.setMoney(u.getMoney());
        uploaderRepo.saveAndFlush(u);
        
        return UploaderAccountVO.form(u);
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
    
    public Optional<UserAccountVO> getUserInfo(String email) {
    	return userRepo.findOneByEmail(email).map(UserAccountVO::form);
    }
    
    public Optional<UploaderAccountVO> getUploaderInfo(String email) {
    	
    	return uploaderRepo.findOneByEmail(email).map(UploaderAccountVO::form);
    }
    
    public UploaderAccountVO findUpAcc(int id){
    	return UploaderAccountVO.form(uploaderRepo.findById(id).get());
    }

}