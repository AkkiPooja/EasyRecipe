package com.easyrecipe.recipewebsite.controller;

import com.easyrecipe.recipewebsite.exception.RecipeNotFoundException;
import com.easyrecipe.recipewebsite.exception.UserNotFoundException;
import com.easyrecipe.recipewebsite.model.Recipe;
import com.easyrecipe.recipewebsite.model.User;
import com.easyrecipe.recipewebsite.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.easyrecipe.recipewebsite.exception.UserAlreadyExistsException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("")
    public User saveUser(@RequestBody User user){

        if(userService.existsByName(user.getName())){
           throw new UserAlreadyExistsException("User already exists");
        }

        User new_user = userService.saveUser(user);

        return new_user;
    }

    @GetMapping("")
    public Optional<User> getRecipeByNameAndPassword(@RequestParam("name") String name, @RequestParam("password") String password){
        Optional<User> user = userService.getRecipeByNameAndPassword(name, password);

           if(!user.isPresent()) throw new UserNotFoundException();
               return user;
    }
}
