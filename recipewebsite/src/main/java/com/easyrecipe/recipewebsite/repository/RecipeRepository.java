package com.easyrecipe.recipewebsite.repository;

import com.easyrecipe.recipewebsite.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    @Query("select s from Recipe s where s.recipe_name LIKE :recipe_name%")
    //@Query("from Recipe s where s.recipe_name.typeAsString like :%recipe_name%")
    public List<Recipe> findByRecipeNameLike(@Param("recipe_name") String recipe_name);
}
