package com.streaming.team3.domain.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.streaming.team3.domain.dto.VO.GenreVO;
import com.streaming.team3.domain.repo.GenresRepo;

@Service
public class GenreService {

    /**
     * Default constructor
     */
    public GenreService() {
    }

    /**
     * 
     */
    private GenresRepo repo;

    /**
     * @return
     */
    public List<GenreVO> getAll() {
        // TODO implement here
        return null;
    }

    /**
     * @return
     */
    public GenreVO addGenre() {
        // TODO implement here
        return null;
    }

}