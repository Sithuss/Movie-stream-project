package com.streaming.team3.domain.dto.VO;

import java.util.ArrayList;
import java.util.List;

import com.streaming.team3.domain.entity.Movie;

import lombok.Data;

@Data
public class WatchMovieVO {

    public WatchMovieVO() {
    }
    private int id;

    private String link;
    
    private List<String> casts = new ArrayList<String>();
    private List<String> director = new ArrayList<String>();
    private List<String> scriptWriter = new ArrayList<String>();

    
    public static WatchMovieVO form(Movie m) {
		var w =  new WatchMovieVO();
		w.setId(m.getId());
		w.setLink(m.getLink().getLink());
		m.getCasts().forEach(c -> w.getCasts().add(c.getName()));
		m.getDirector().forEach(d -> w.getDirector().add(d.getName()));
		m.getScriptWriter().forEach(s -> w.getScriptWriter().add(s.getName()));
		return w;
	}

}