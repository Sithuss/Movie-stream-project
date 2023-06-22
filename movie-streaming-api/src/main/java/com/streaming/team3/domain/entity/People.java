package com.streaming.team3.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class People {

    /**
     * Default constructor
     */
    public People() {
    }

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    /**
     * 
     */
    private String name;

}