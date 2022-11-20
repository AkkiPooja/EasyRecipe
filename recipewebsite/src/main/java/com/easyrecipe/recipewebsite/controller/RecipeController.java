package com.easyrecipe.recipewebsite.controller;

import com.easyrecipe.recipewebsite.model.Recipe;
import com.easyrecipe.recipewebsite.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/recipes")
@CrossOrigin
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @PostMapping("")
    public String saveRecipe(@RequestBody Recipe recipe){
        recipeService.saveRecipe(recipe);
        return "Your recipe is added to the Website!!";
    }

    @GetMapping("/getAll")
    public List<Recipe> getAllRecipes(){
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable Integer id){
        Optional<Recipe> recipe = recipeService.getRecipeById(id);

        return recipe.isPresent()? recipe.get(): null;
    }

    @GetMapping("")
    public List<Recipe> findByRecipeNameLike(@Param("recipe_name") String recipe_name){
        return  recipeService.findByRecipeNameLike(recipe_name);
    }
}
