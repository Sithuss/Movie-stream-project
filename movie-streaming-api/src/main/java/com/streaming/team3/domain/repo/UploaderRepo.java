package com.streaming.team3.domain.repo;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.streaming.team3.domain.entity.Uploader;

import java.util.Optional;

public interface UploaderRepo extends JpaRepositoryImplementation<Uploader, Integer> {


    public Optional<Uploader> findOneByEmail(String email);
}