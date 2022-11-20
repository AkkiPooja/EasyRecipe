import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
    const location = useLocation();
    
    const[recipe,setRecipe]=useState([])

    // useEffect(() => {
    //    console.log(location.pathname); // result: '/secondpage'
    //    console.log(location.state);
    // }, [location]);
    
    useEffect(()=>{
        fetch(`http://localhost:8080/recipes/${location.state}`)
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
        </div>
        
    )
};

export default RecipeById;