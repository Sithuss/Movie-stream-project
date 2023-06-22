package com.streaming.team3.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import lombok.Data;

/**
 * 
 */
@Data
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Account {

    /**
     * Default constructor
     */
    public Account() {
    }

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /**
     * 
     */
    private String name;

    /**
     * 
     */
    private String email;

    /**
     * 
     */
    private String password;

    /**
     * 
     */
    private Role role;

}