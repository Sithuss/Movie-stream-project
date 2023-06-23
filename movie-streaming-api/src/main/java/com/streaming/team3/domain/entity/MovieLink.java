package com.streaming.team3.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class MovieLink {

    

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String link;

    public MovieLink() {
    }

	public MovieLink(String link) {
		super();
		this.link = link;
	}
    
    
}