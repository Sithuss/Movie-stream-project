package com.streaming.team3.domain.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@AllArgsConstructor
public class People {
    

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    
    @ManyToMany
    @JoinTable(name = "cast_movie",
    joinColumns = @JoinColumn(name = "cast_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "id"))
    private List<Movie> movieCasts = new ArrayList<Movie>();
    
    @ManyToMany
    @JoinTable(name = "director_movie",
    joinColumns = @JoinColumn(name = "director_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "id"))
    private List<Movie> movieDirector = new ArrayList<Movie>();
    
    @ManyToMany
    @JoinTable(name = "writer_movie",
    joinColumns = @JoinColumn(name = "writer_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "id"))
    private List<Movie> movieScriptWriter = new ArrayList<>();
    
    public People() {
    }

    public People(String name){
        this.name = name;
    }
}