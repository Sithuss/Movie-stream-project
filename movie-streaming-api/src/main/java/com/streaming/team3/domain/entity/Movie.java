package com.streaming.team3.domain.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String title;

	private String description;

	private String releaseDate;

	private String trailerLink;
	
	private LocalDate uploadedDate;

	private long premiumVC;

	private String movieLength;

	@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	@JoinTable(name = "movie_genre",
    joinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "genres_id", referencedColumnName = "id"))
	private List<Genres> genres = new ArrayList<Genres>();

	private byte[] poster;
	
	@ManyToOne(optional = true)
	private Uploader uploader;

	@ManyToMany(mappedBy = "movieCasts",cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	private List<People> casts = new ArrayList<People>();

	@ManyToMany(mappedBy = "movieDirector",cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	private List<People> director = new ArrayList<People>();

	@ManyToMany(mappedBy = "movieScriptWriter",cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	private List<People> scriptWriter = new ArrayList<People>();

	@OneToOne(orphanRemoval = true)
	private MovieLink link;

	public Movie() {
	}

	public Movie(String title, String description, String releaseDate, String trailerLink, LocalDate uploadedDate,
			long premiumVC, String movieLength, byte[] poster) {
		super();
		this.title = title;
		this.description = description;
		this.releaseDate = releaseDate;
		this.trailerLink = trailerLink;
		this.uploadedDate = uploadedDate;
		this.premiumVC = premiumVC;
		this.movieLength = movieLength;
		this.poster = poster;
	}
	public void addGenre(Genres g){
		this.genres.add(g);
		g.getMovies().add(this);
	}
	
	public void removeGenre(Genres g) {
		this.genres.remove(g);
		g.getMovies().remove(this);
	}

}