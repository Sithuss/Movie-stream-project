package com.streaming.team3.domain.dto.form;

import lombok.Data;

@Data
public class UploaderAccountEditForm extends UserEditForm {
	
    public UploaderAccountEditForm() {
    }

    private int id;

    private String name;

    private String email;

    private String paymentMethod;

    private String transactionNumbser;

}