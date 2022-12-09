import React, {  useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper, Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

const  AddRecipe = props => {
  const location = useLocation();
    let history = useHistory();
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const classes = useStyles();
    const user_id = location.state.id
    const author_name = location.state.name
    const[recipe_name, setRecipeName] = useState('')
    const[cook_time, setCookTime] = useState('')
    const[total_time, setTotalTime] = useState('')
    const[description, setDescription] = useState('')
    const login_details = location.state

   

    //onclick handling
    const handleEvent=(e)=>{
        e.preventDefault();
        const recipe={user_id, author_name, recipe_name, cook_time, total_time, description}
        console.log(recipe)
        // Connectinf from front end to backend
        fetch("http://localhost:8080/recipes/",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(recipe)
        }).then(()=>{
            console.log("New Recipe added")
            alert("Your Recipe is added")
            console.log("Add recipe page sending details to search page")
            console.log(login_details)
            history.push('/search',login_details);
            window.location.reload(false);
        })
    }

    
    
  return (
    <Container>
    <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"lightred"}}>Add Recipe</h1>
    <form className={classes.root} noValidate autoComplete="off">
    
    <TextField id="outlined-basic" label="AuthorName" variant="outlined" fullWidth
     value={location.state.name}
    />
    <TextField id="outlined-basic" label="RecipeName" variant="outlined" fullWidth
     value={recipe_name}
     onChange={(e)=> setRecipeName(e.target.value)}
    />
    <TextField id="outlined-basic" label="Cook_Time" variant="outlined" fullWidth
     value={cook_time}
     onChange={(e)=> setCookTime(e.target.value)}
    />
    <TextField id="outlined-basic" label="Total_Time" variant="outlined" fullWidth
     value={total_time}
     onChange={(e)=> setTotalTime(e.target.value)}
    />
    <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth
     value={description}
     onChange={(e)=> setDescription(e.target.value)}
    />

    <Button variant="contained" color="secondary" onClick={handleEvent}>
        Submit
    </Button>
    </form>
    </Paper>
    </Container>
  );
}

export default AddRecipe;