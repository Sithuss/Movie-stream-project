package com.streaming.team3.domain.repo;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.streaming.team3.domain.entity.User;

/**
 * 
 */
public interface UserRepo extends JpaRepositoryImplementation<User, Integer> {

}