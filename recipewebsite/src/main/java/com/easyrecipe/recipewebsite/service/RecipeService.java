package com.easyrecipe.recipewebsite.service;

import com.easyrecipe.recipewebsite.model.Recipe;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

public interface RecipeService {
    public Recipe saveRecipe(Recipe recipe);
    public Optional<Recipe> getRecipeById(Integer id);
    public List<Recipe> getAllRecipes();
    public Optional<List<Recipe>> findByRecipeByQueryParams(@RequestParam(required = false) String recipe_name, @RequestParam(required = false) Integer user_id);
    public void delete(Integer id);

}
