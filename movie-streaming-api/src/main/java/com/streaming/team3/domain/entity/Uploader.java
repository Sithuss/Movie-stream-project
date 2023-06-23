package com.streaming.team3.domain.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Uploader extends Account {

    private String paymentMethod;

    private String transactionNumber;

    private long money;
    
    @OneToMany(mappedBy = "uploader")
    private List<Movie> movies = new ArrayList<>();
    
	public Uploader(String paymentMethod, String transactionNumber, long money) {
		super();
		this.paymentMethod = paymentMethod;
		this.transactionNumber = transactionNumber;
		this.money = money;
	}

	public Uploader() {
		super();
	}
    
    

}