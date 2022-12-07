package com.easyrecipe.recipewebsite.repository;

import com.easyrecipe.recipewebsite.model.Recipe;
import com.easyrecipe.recipewebsite.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("select s from User s where s.name = :name and s.password = :password")
    public Optional<User> getRecipeByNameAndPassword(@RequestParam("name") String name, @RequestParam("passowrd") String password);
    @Query("select s from User s where s.name= :name")
    public Optional<User> existsByName(String name);
}
