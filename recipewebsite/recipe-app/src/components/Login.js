import { useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

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


const Login = props =>  {
    let history = useHistory();
    const [button, setButton] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
   // const [login, setLogin] = useState('')
    
   const [recipe_name, setRecipeName] = useState('')
    const[recipes,setRecipes]=useState([])
    
     
   

      const handleSearch=(e)=>{
        const recipe={recipe_name}
        console.log(recipe)
  
        fetch(`http://localhost:8080/recipes?recipe_name=${recipe.recipe_name}`,{
          method:"GET"
        }).then(res=>res.json())
        .then((result)=>{
          console.log("******")
          console.log(result)
          console.log(result.status)
           if(result.length ===  undefined){
            alert("No recipe found!")
           }else{ 
             console.log("Here inside the log")
             console.log(result)
             setRecipes(result);
           }
            
          })
    }
    
   

    const handleEvent=(e)=>{
         // Connectinf from front end to backend
         fetch(`http://localhost:8080/user?name=${name}&password=${password}`,{
           method:"GET"
         }).then(async(response) => {
            // status 404 or 500 will set ok to false
            if (response.ok) {
                     let result = await response.json()
                     history.push('/search',result);
                     window.location.reload(false);
            }
            else {
                alert("No account with such details");
                window.location.reload(false);
            }
        }).catch(e => console.error('EXCEPTION: ', e))
         
     }

    

      function registrationPage(){
        history.push('/registration');
        window.location.reload(false);
        
      }

  return (
    <div style={{ backgroundImage: `url(${require("./food.jpeg")})`, width: '100%', height: '800px' }}>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EasyRecipes
          </Typography>
          <Button color="inherit" onClick={(e) => setButton(true)}>Login</Button>
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
                    handleSearch()
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
        <Typography variant="body2">
          Description : {recipe.description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
      ))
    }

    {button?
       <div>
        <TextField id="outlined-basic" label="Username" variant="outlined" 
        style={{
          backgroundColor: "lightblue"
      }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <br/>
        <TextField id="outlined-password-inpu" label="Password"  type="password" variant="outlined" 
        style={{
          backgroundColor: "lightblue"
      }}
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
        :<div></div>}
        </div>
    
  );
}

export default Login;