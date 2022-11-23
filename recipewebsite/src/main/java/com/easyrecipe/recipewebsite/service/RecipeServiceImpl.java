package com.easyrecipe.recipewebsite.service;

import com.easyrecipe.recipewebsite.model.Recipe;
import com.easyrecipe.recipewebsite.repository.RecipeRepository;
import net.bytebuddy.dynamic.DynamicType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService{

    @Autowired
    private RecipeRepository recipeRepository;

    @Override
    public Recipe saveRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @Override
    public Optional<Recipe> getRecipeById(Integer id) {
        return recipeRepository.findById(id);
    }

    @Override
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @Override
    public Optional< List<Recipe> > findByRecipeByQueryParams(@RequestParam(required = false) String recipe_name, @RequestParam(required = false) Integer user_id) {
          if(recipe_name != null){
              return recipeRepository.findByRecipeNameLike(recipe_name);
          }

          if(user_id > 0){
              return recipeRepository.findByUserId(user_id);
          }
        return null;
    }

    @Override
    public void delete(Integer id) {
         recipeRepository.deleteById(id);
    }
}
