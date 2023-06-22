package com.streaming.team3.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Genres {

    /**
     * Default constructor
     */
    public Genres() {
    }

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /**
     * 
     */
    private String name;

}