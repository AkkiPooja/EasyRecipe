package com.easyrecipe.recipewebsite.service;

import com.easyrecipe.recipewebsite.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public User saveUser(User user);

    public boolean existsByName(String name);
    public List<User> getAllUsers();

    public Optional<User> getRecipeByNameAndPassword(String name, String password);
}
