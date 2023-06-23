package com.streaming.team3.domain.dto.VO;

import com.streaming.team3.domain.entity.Account;

import lombok.Data;

@Data
public class AdminUserListVO {

    /**
     * Default constructor
     */
    public AdminUserListVO() {
    }

    /**
     * 
     */
    private Account user[];

}