package com.streaming.team3.domain.repo;

import com.streaming.team3.domain.entity.Movie;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

/**
 * 
 */
public interface MovieReviewRepo extends JpaRepositoryImplementation<Movie, Long> {

}