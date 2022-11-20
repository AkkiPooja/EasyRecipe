package com.easyrecipe.recipewebsite.service;

import com.easyrecipe.recipewebsite.model.Recipe;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

public interface RecipeService {
    public Recipe saveRecipe(Recipe recipe);
    public Optional<Recipe> getRecipeById(Integer id);
    public List<Recipe> getAllRecipes();
    public List<Recipe> findByRecipeNameLike(@Param("recipe_name") String recipe_name);
}
