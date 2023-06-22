package com.streaming.team3.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class MovieReview {

    /**
     * Default constructor
     */
    public MovieReview() {
    }

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String review;

    /**
     * 
     */
    private User user[];

    /**
     * 
     */
    private Movie movie[];

}