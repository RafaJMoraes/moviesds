package com.moviesds.moviesds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviesds.moviesds.entities.Score;
import com.moviesds.moviesds.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	

}
