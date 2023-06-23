package com.streaming.team3.domain.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Data
@Entity
public class Genres {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    
    @ManyToMany(mappedBy = "genres")
    private List<Movie> movies = new ArrayList<Movie>();
    
    public Genres() {
    }

	public Genres(String name) {
		super();
		this.name = name;
	}
    
    

}