package com.moviesds.moviesds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviesds.moviesds.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	 User findByEmail(String email);
}
