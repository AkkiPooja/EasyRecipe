package com.easyrecipe.recipewebsite.service;

import com.easyrecipe.recipewebsite.model.Recipe;
import com.easyrecipe.recipewebsite.model.User;

import java.util.Optional;

public interface UserService {

    public User saveUser(User user);
    public Optional<User> getRecipeByNameAndPassword(String name, String password);
}
