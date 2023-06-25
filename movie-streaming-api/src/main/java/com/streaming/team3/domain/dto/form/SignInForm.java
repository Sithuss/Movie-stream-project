package com.streaming.team3.domain.dto.form;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SignInForm {

    public SignInForm() {
    }

    @NotBlank(message = "Please enter email.")
    private String email;

    @NotBlank(message = "Please enter password.")
    private String password;

    public UsernamePasswordAuthenticationToken authentication() {
    	return new UsernamePasswordAuthenticationToken(email, password);
    }
}