import { useHistory, useLocation } from "react-router-dom";
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container} from '@material-ui/core';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const  SearchRecipe = props => {
    const location = useLocation();
    console.log("search details got from previous page")
    console.log(location)
    let history = useHistory();
    const user_id = location.state.id;
   
    const handleRecipeEvent=(e)=>{
        // Connectinf from front end to backend
        fetch(`http://localhost:8080/recipes?user_id=${user_id}`,{
          method:"GET"
        }).then(async(response) => {
           // status 404 or 500 will set ok to false
           if (response.ok) {
                    let result = await response.json()
                    console.log("details being sent from search page to my recipes")
                    console.log(result)
                    history.push('/myrecipes',result);
                    window.location.reload(false);
           }
           else {
               alert("No recipe for this account");
               window.location.reload(false);
           }
       }).catch(e => console.error('EXCEPTION: ', e))
        
    }

      function addRecipePage(result){
        history.push('/addRecipe',result);
        window.location.reload(false);
        
      }
      
      function handleBackEvent(){
        history.push('/');
        window.location.reload(false);
      }

  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Search for the Recipe in the search bar
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => addRecipePage(location.state)}>Add Recipe</Button>
        </Toolbar>
      </AppBar>

      <Stack spacing={2}>
                <Item>User Name: {location.state.name}</Item>
                <Item>You can go a ahead and add the recipes</Item>
      </Stack>
      <br/>
      <Button variant="contained" color="secondary" onClick={handleRecipeEvent}>MyRecipes</Button>
      <br/>
      <br/>
      <Button variant="contained" color="secondary" onClick={handleBackEvent}>Logout</Button>
    </Box>
    </Container> 
  );
}

export default SearchRecipe;