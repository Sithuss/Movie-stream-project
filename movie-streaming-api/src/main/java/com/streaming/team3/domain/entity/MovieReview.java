package com.streaming.team3.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class MovieReview {


    public MovieReview() {
    }

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private String review;

    @OneToOne
    private User user;

    @OneToOne
    private Movie movie;

	public MovieReview(String review) {
		super();
		this.review = review;
	}
    
    

}