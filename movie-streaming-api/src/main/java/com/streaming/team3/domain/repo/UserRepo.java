package com.streaming.team3.domain.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.streaming.team3.domain.entity.User;

/**
 * 
 */
public interface UserRepo extends JpaRepositoryImplementation<User, Integer> {

	Optional<User> findOneByEmail(String email);
}