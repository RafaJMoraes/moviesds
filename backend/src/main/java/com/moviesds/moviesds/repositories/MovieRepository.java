package com.moviesds.moviesds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviesds.moviesds.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
