package com.streaming.team3.domain.dto.form;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UserSignUpForm {

    public UserSignUpForm() {
    }

    @NotNull
    private String name;
    @Email
    private String email;
    @NotNull
    private String password;
    private int premiumPk;
    @NotNull
    private String role;

}