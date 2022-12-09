import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const RecipeById = props => {
   let history = useHistory();
    const location = useLocation();
    console.log("details from the my recipes page")
    console.log(location.state.recipes)
    
    const[recipe,setRecipe]=useState([])

    function handleBackEvent(){
      history.push('/MyRecipes', location.state.recipes);
      window.location.reload(false);
    }
    
    useEffect(()=>{
        fetch(`http://localhost:8080/recipes/${location.state.value}`)
        .then(res=>res.json())
        .then((result)=>{
            console.log(location.state)
            setRecipe(result);
        }
      )
      },[location])

    return(
        <div>
               <h1 style={{color:"lightred"}}>{recipe.recipe_name}</h1>
               <Stack spacing={2}>
                <Item>Cook Time: {recipe.cook_time}</Item>
                <Item>Total Time: {recipe.total_time}</Item>
                <Item>Description: {recipe.description}</Item>
                <Item>Author: {recipe.author_name}</Item>
              </Stack>
              <br/>
              <Button variant="contained" color="secondary" onClick={handleBackEvent}>Back</Button>
        </div>
        
    )
};

export default RecipeById;