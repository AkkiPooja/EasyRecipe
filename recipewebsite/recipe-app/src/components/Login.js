import { useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@material-ui/core/TextField';

const Login = props =>  {
    let history = useHistory();
    const [button, setButton] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
   // const [login, setLogin] = useState('')

    const handleEvent=(e)=>{
         // Connectinf from front end to backend
         fetch(`http://localhost:8080/user?name=${name}&password=${password}`,{
           method:"GET"
         }).then(res=>res.text())
         .then((result)=>{
            result === ''?
            alert("No account with such details")
            :
            nextPage();
           })
     }

    function nextPage(){
        history.push('/search');
        window.location.reload(false);
        
      }

      function registrationPage(){
        history.push('/registration');
        window.location.reload(false);
        
      }

  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EasyRecipes
          </Typography>
          <Button color="inherit" onClick={(e) => setButton(true)}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    {button?
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
    :<div></div>}
    </div>
    
  );
}

export default Login;