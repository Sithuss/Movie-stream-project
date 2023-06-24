package com.streaming.team3.domain.dto.VO;

import com.streaming.team3.domain.entity.Movie;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
public class MovieListVo {

    @NonNull
    private int id;

    @NonNull
    private String title;

    public static MovieListVo form(Movie movie){
        var m =new MovieListVo(movie.getId(),movie.getTitle());
        return m;
    }
   
    
}
