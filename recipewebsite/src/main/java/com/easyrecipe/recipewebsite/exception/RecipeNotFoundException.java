package com.easyrecipe.recipewebsite.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RecipeNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public RecipeNotFoundException(String message)
    {
        super(message);
    }
}
