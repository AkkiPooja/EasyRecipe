import { useHistory, useLocation } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import TextField from '@material-ui/core/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const MyRecipes = props =>  {
    const location = useLocation();
    let history = useHistory();
    
    const recipes = location.state;
    
     function refreshPage(value){
        history.push('/RecipeById',value);
        window.location.reload(false);
        
      }

      function refreshPageDelete(value){
        history.push('/DeleteById',value);
        window.location.reload(false);
        
      }

      function handleBackEvent(){
        history.push('/');
        window.location.reload(false);
      }
      
      function updatePage(id){
         history.push("/update",id)
         window.location.reload(false);
      }

  return (
    <div>
     <h1>My Recipes</h1>
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
        <br/>
        <Button size="small" onClick={() => updatePage(recipe.id)}>Update</Button>
        <br/>
        <Button size="small" onClick={() => refreshPageDelete(recipe.id)}>Delete</Button>
      </CardActions>
    </Card>
      ))
    }

    <Button variant="contained" color="secondary" onClick={handleBackEvent}>Logout</Button>

    {/* {button?
       <div>
        <TextField id="outlined-basic" label="Username" variant="outlined" 
     value={name}
     onChange={(e) => setName(e.target.value)}
    />
     <br/>
     <br/>
    <TextField id="outlined-basic" label="Password" variant="outlined" 
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
    <br/>
    <br/>
    <Button variant="contained" color="secondary" onClick={handleEvent}>
        Submit
    </Button>
    <br/>
    <br/>
    <Button variant="contained" color="secondary" onClick={registrationPage}>CreateAccount</Button>
       </div>
    :<div></div>} */}
    </div>
    
  );
}

export default MyRecipes;