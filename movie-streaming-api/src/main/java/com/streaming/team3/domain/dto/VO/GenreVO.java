package com.streaming.team3.domain.dto.VO;

import com.streaming.team3.domain.entity.Genres;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GenreVO {

    public GenreVO() {
    }
    private int id;

    private String name;
    
    public static GenreVO form(Genres g) {
		return new GenreVO(g.getId(),g.getName());
	}

}