package com.easyrecipe.recipewebsite.controller;

import com.easyrecipe.recipewebsite.exception.RecipeNotFoundException;
import com.easyrecipe.recipewebsite.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionController {
    @ExceptionHandler(value = UserNotFoundException.class)
    public ResponseEntity<Object> exception(UserNotFoundException exception) {
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = RecipeNotFoundException.class)
    public ResponseEntity<Object> exception(RecipeNotFoundException exception) {
        return new ResponseEntity<>("Recipe not found", HttpStatus.NOT_FOUND);
    }
}
