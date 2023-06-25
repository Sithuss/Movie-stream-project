package com.streaming.team3.domain.dto.VO;

import java.util.ArrayList;
import java.util.List;

import com.streaming.team3.domain.entity.Movie;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MovieVO {

	public MovieVO() {
	}
	private int id;

	private String title;

	private String description;

	private List<String> casts = new ArrayList<String>();

	private String releasedDate;

	private List<String> director = new ArrayList<String>();

	private List<String> scriptWriter = new ArrayList<String>();;

	private String trailer;

	private byte[] poster;

	private String publisher;
	
	private List<String> genre= new ArrayList<String>();

	public static MovieVO form(Movie m) {
		var mvo = new MovieVO();
		mvo.setId(m.getId());
		mvo.setTitle(m.getTitle());
		mvo.setDescription(m.getDescription());
		mvo.setReleasedDate(m.getReleaseDate());
		mvo.setTrailer(m.getTrailerLink());
		mvo.setPoster(m.getPoster());
//		mvo.setPublisher(m.getUploader().getCompanyName());
		mvo.setPublisher("aung");
		m.getCasts().stream().forEach(c -> {
			mvo.getCasts().add(c.getName());
		});
		m.getDirector().stream().forEach(c -> {
			mvo.getDirector().add(c.getName());
		});
		m.getScriptWriter().stream().forEach(c -> {
			mvo.getScriptWriter().add(c.getName());
		});
		m.getGenres().stream().forEach(g -> {
			mvo.getGenre().add(g.getName());
		});
		return mvo;
	}

}