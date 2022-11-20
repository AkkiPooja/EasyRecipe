import React, { useState } from 'react';
//import history from './history';
import { useHistory, useLocation } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Container} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import RecipeById from './RecipeById';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const  SearchRecipe = props => {
    const location = useLocation();
    let history = useHistory();
    const [recipe_name, setRecipeName] = useState('')
    const[recipes,setRecipes]=useState([])
    // const [author_name, setAuthourName] = useState('')
    // const [user_id, setUserId] = useState('')
    
     
   

      const handleEvent=(e)=>{
       // e.preventDefault();
        const recipe={recipe_name}
        console.log(recipe)
        // Connectinf from front end to backend
        fetch(`http://localhost:8080/recipes?recipe_name=${recipe.recipe_name}`,{
          method:"GET"
        }).then(res=>res.json())
        .then((result)=>{
            setRecipes(result);
          })
    }
    
     function refreshPage(value){
        history.push('/RecipeById',value);
        window.location.reload(false);
        
      }

      function addRecipePage(result){
        history.push('/addRecipe',result);
        window.location.reload(false);
        
      }
   

  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Search for the Recipe in the search bar
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => addRecipePage(location.state)}>Add Recipe</Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="recipe_name"
              inputProps={{ 'aria-label': 'search' }}
              value={recipe_name}
              onChange={(e) => setRecipeName(e.target.value)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleEvent()
                }
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>

    

      {recipes.map(recipe=>(
         <Card sx={{ minWidth: 275 }}  style={{margin:"10px",padding:"15px", textAlign:"left"}} key={recipe.id}>
       <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {recipe.recipe_name}
        </Typography>
        
        <Typography variant="body2">
          Cook Time: {recipe.cook_time}
        </Typography>
        <Typography variant="body2">
          Total Time: {recipe.total_time}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => refreshPage(recipe.id)} >Learn More</Button>
      </CardActions>
    </Card>
      ))
    }
    </Container> 
  );
}

export default SearchRecipe;