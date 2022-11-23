package com.easyrecipe.recipewebsite.controller;

import com.easyrecipe.recipewebsite.exception.UserNotFoundException;
import com.easyrecipe.recipewebsite.model.User;
import com.easyrecipe.recipewebsite.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("")
    public String saveUser(@RequestBody User user){
        userService.saveUser(user);
        return "Your user is added";
    }

    @GetMapping("")
    public Optional<User> getRecipeByNameAndPassword(@RequestParam("name") String name, @RequestParam("password") String password){
        Optional<User> user = userService.getRecipeByNameAndPassword(name, password);

           if(!user.isPresent()) throw new UserNotFoundException();
               return user;
    }
}
