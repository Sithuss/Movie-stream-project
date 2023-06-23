package com.streaming.team3.domain.dto.VO;

import lombok.Data;

@Data
public class UploaderAccountVO {

    public UploaderAccountVO() {
    }
    
    private int id;

    private String name;

    private String email;
    
    private String PaymentType;

    private String Transaction;

    private String role;

}