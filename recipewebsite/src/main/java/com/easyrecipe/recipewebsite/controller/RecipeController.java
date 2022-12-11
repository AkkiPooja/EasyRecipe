package com.easyrecipe.recipewebsite.controller;

import com.easyrecipe.recipewebsite.exception.RecipeNotFoundException;
import com.easyrecipe.recipewebsite.model.Recipe;
import com.easyrecipe.recipewebsite.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public Optional<Recipe> getRecipeById(@PathVariable Integer id){
        Optional<Recipe> recipe =recipeService.getRecipeById(id);


        if(!recipe.isPresent()) throw new RecipeNotFoundException("Recipe Not Found");

        return recipe;
    }

    @GetMapping("")
    public Optional< List<Recipe> > findRecipeByQueryParams(@RequestParam(required = false) String recipe_name, @RequestParam(required = false) Integer user_id){
        Optional< List<Recipe> > recipe =recipeService.findByRecipeByQueryParams(recipe_name, user_id);

        System.out.println(recipe+" "+recipe.isEmpty()+" "+recipe.isPresent()+" "+recipe.get().isEmpty());

        if(recipe.get().isEmpty()) throw new RecipeNotFoundException("Recipe Not Found");

        System.out.println("Recipeeeee"+ recipe);

        return recipe;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public String update(@RequestBody Recipe recipe, @PathVariable Integer id) {

        recipeService.saveRecipe(recipe);
        return "Updated";

    }

    @DeleteMapping("/{id}")
    public void deleteRecipeById(@PathVariable Integer id){
        Optional<Recipe> recipe =recipeService.getRecipeById(id);


        if(!recipe.isPresent()) throw new RecipeNotFoundException("Recipe Not Found ");

        recipeService.delete(id);


//        if (!isRemoved) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//
//        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
