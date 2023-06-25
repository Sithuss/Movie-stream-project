package com.streaming.team3.domain.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@Data
@EqualsAndHashCode(callSuper = true)
public class Uploader extends Account {

    private String paymentMethod;

    private String transactionNumber;

    private long money;
    
    @Column(name = "company_name")
    private String companyName;
    
    @OneToMany(mappedBy = "uploader")
    private List<Movie> movies = new ArrayList<>();
    
	public Uploader(String paymentMethod, String transactionNumber, long money, String companyName) {
		super();
		this.paymentMethod = paymentMethod;
		this.transactionNumber = transactionNumber;
		this.money = money;
		this.companyName = companyName;
	}

	public Uploader() {
		super();
	}
    
    

}