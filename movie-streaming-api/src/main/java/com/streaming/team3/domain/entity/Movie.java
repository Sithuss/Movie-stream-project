package com.streaming.team3.domain.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Movie {

	/**
	 * Default constructor
	 */
	public Movie() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	/**
	 * 
	 */
	private String title;

	/**
	 * 
	 */
	private String description;

	/**
	 * 
	 */
	private String releaseDate;

	/**
	 * 
	 */
	private String trailerLink;

	/**
	 * 
	 */
	private Genres genres[];

	/**
	 * 
	 */
	private Byte[] poster;

	/**
	 * 
	 */
	private People[] casts;

	/**
	 * 
	 */
	private People[] director;

	/**
	 * 
	 */
	private People[] scriptWriter;

	/**
	 * 
	 */
	private MovieLink link;

	/**
	 * 
	 */
	private LocalDate uploadedDate;

	/**
	 * 
	 */
	private long premiumVC;

	/**
	 * 
	 */
	private String movieLength;

}