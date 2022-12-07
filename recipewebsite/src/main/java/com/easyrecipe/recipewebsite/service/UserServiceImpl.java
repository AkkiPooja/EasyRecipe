package com.easyrecipe.recipewebsite.service;

import com.easyrecipe.recipewebsite.model.User;
import com.easyrecipe.recipewebsite.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public boolean existsByName(String name) {
       Optional<User> user = userRepository.existsByName(name);
       if(user.isEmpty()){
           return false;
       }
        return true;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getRecipeByNameAndPassword(String name, String password) {
        return userRepository.getRecipeByNameAndPassword(name, password);
    }
}
