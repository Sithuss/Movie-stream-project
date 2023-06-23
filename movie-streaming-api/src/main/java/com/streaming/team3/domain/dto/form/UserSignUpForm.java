package com.streaming.team3.domain.dto.form;

import lombok.Data;

@Data
public class UserSignUpForm {

    public UserSignUpForm() {
    }

    private String name;


    private String email;

    private String password;

    private int premiumPk;

    private String role;

}