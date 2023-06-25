package com.streaming.team3.domain.dto.VO;

import com.streaming.team3.domain.entity.Account;
import com.streaming.team3.domain.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginUserVO {

    public LoginUserVO() {
    }

    private int id;

    private String name;

    private String email;

    private Role role;
    
    public static LoginUserVO from(Account entity) {
    	return new LoginUserVO(entity.getId(), entity.getName(), entity.getEmail(), entity.getRole());
    }

}