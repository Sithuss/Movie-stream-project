package com.streaming.team3.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.streaming.team3.domain.dto.VO.GenreVO;
import com.streaming.team3.domain.dto.form.AddGenreForm;
import com.streaming.team3.domain.entity.Genres;
import com.streaming.team3.domain.repo.GenresRepo;

@Service
public class GenreService {

    public GenreService() {
    }

    @Autowired
    private GenresRepo genresRepo;

    public List<GenreVO> getAll() {
        return genresRepo.findAll().stream().map(GenreVO::form).toList();
    }

    public GenreVO addGenre(AddGenreForm form) {
    	var genres = new Genres();
    	genres.setName(form.getGenre());
    	
    	genresRepo.save(genres);
        return GenreVO.form(genres);
    }

}