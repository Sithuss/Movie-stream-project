package com.streaming.team3.domain.repo;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.streaming.team3.domain.entity.Movie;

/**
 * 
 */
public interface MovieRepo extends JpaRepositoryImplementation<Movie, Integer> {

}