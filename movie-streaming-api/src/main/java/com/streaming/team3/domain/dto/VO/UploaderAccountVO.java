package com.streaming.team3.domain.dto.VO;

import com.streaming.team3.domain.entity.Role;
import com.streaming.team3.domain.entity.Uploader;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UploaderAccountVO {

    public UploaderAccountVO() {
    }
    
    private int id;

    private String name;

    private String email;
    
    private String paymentMethod;

    private String transactionNumber;

    private String companyName;
    private Role role;

    public static UploaderAccountVO form(Uploader u) {
		return new UploaderAccountVO(u.getId(), u.getName(), u.getEmail(), u.getPaymentMethod(), u.getTransactionNumber(),
				u.getCompanyName(), u.getRole());
	}
}