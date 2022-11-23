package com.easyrecipe.recipewebsite.repository;

import com.easyrecipe.recipewebsite.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    @Query("select s from Recipe s where s.recipe_name LIKE :recipe_name%")
    //@Query("from Recipe s where s.recipe_name.typeAsString like :%recipe_name%")
    public Optional< List<Recipe> > findByRecipeNameLike(String recipe_name);

    @Query("select s from Recipe s where s.user_id = :user_id")
    public Optional< List<Recipe> > findByUserId(Integer user_id);

}
