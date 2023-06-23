package com.streaming.team3.domain.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class User extends Account {

    private int premiumPk;

    @OneToMany
    private List<Movie> bookMarks = new ArrayList<Movie>();

    @OneToMany
    private Movie watchedHistory[];

    public User() {
    }
}