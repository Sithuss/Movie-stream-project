package com.streaming.team3.domain.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.streaming.team3.domain.entity.Genres;

public interface GenresRepo extends JpaRepositoryImplementation<Genres, Integer> {

	Optional<Genres> findGenresByName(String name);
}