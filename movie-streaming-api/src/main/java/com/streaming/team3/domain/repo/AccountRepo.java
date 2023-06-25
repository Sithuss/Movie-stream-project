package com.streaming.team3.domain.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.streaming.team3.domain.entity.Account;

/**
 * 
 */
public interface AccountRepo extends JpaRepositoryImplementation<Account, Integer> {

	Optional<Account> findOneByEmail(String email);
}