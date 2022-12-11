import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container ,Paper} from '@material-ui/core';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));

const UpdateRecipe = props => {
    let history = useHistory();
    const location = useLocation();
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const classes = useStyles();
    const[cook_time_api, setCookTime] = useState('')
    const[total_time_api, setTotalTime] = useState('')
    const[description_api, setDescription] = useState('')
    const[recipe,setRecipe]=useState([])
    

    function handleUpdate(){
        let id = recipe.id
        let user_id = recipe.user_id
        let recipe_name = recipe.recipe_name
        let author_name = recipe.author_name
        let cook_time = cook_time_api
        let total_time = total_time_api
        let description = description_api
        if(cook_time === ""){
            cook_time = recipe.cook_time
        }
        if(total_time === ""){
            total_time = recipe.total_time
        }
        if(description === ""){
            description = recipe.description
        }
        
        

        const put_values = {id,user_id,recipe_name, author_name, cook_time, total_time, description}
        console.log(put_values)

        fetch(`http://localhost:8080/recipes/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(put_values)
          }).then(()=>{
              console.log("Updated the values")
              alert("Your Recipe is updated")
              history.push('/MyRecipes', location.state.recipes);
              window.location.reload(false);
          })
    }

    useEffect(()=>{
        fetch(`http://localhost:8080/recipes/${location.state.id}`)
        .then(res=>res.json())
        .then((result)=>{
            console.log("passing parameters from the details page")
            console.log(location.state.id)
            setRecipe(result);
        }
      )
      },[location])

    return(
        <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"lightred"}}>Update Recipe {recipe.recipe_name}</h1>
        <form className={classes.root} noValidate autoComplete="off">
       
        <TextField id="filled-basic" label="Old_Cook_Time"  variant="outlined" fullWidth
         value={recipe.cook_time || ''}
        />

<TextField id="outlined-basic" label="Cook_Time" variant="outlined" fullWidth
         value={cook_time_api}
         onChange={(e)=> setCookTime(e.target.value)}
        />

        <TextField id="outlined-basic" label="Old_Total_Time" variant="outlined"  fullWidth
         value={recipe.total_time|| ''}
        />

<TextField id="outlined-basic" label="Total_Time" variant="outlined" fullWidth
         value={total_time_api}
         onChange={(e)=> setTotalTime(e.target.value)}
        />

        <TextareaAutosize id="outlined-basic" label="Old_Description" variant="outlined" fullWidth
        aria-label="minimum height"
        minRows={10}
        placeholder="Description"
        style={{ width: 600 }}
        value={recipe.description|| ''}
        />
        
        <TextareaAutosize id="outlined-basic" label="Description" variant="outlined" fullWidth
        aria-label="minimum height"
        minRows={10}
        placeholder="Description"
        style={{ width: 600 }}
        value={description_api}
         onChange={(e)=> setDescription(e.target.value)}
        />

        <TextField id="outlined-basic" label="AuthorName"  variant="outlined" fullWidth
         value={recipe.author_name|| ''}
        />
        <Button variant="contained" color="secondary" onClick={handleUpdate}> Update </Button>
        </form>
        </Paper>
        </Container>
        
    )
};

export default UpdateRecipe;