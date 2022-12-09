import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

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

export default function Registration() {
    let history = useHistory();
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const classes = useStyles();
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const[confirmPassword, setconfirmPassword] = useState('')

    //onclick handling
    const handleEvent=(e)=>{
        e.preventDefault();
        const user={name, password}
        console.log(user)
        // Connectinf from front end to backend
        fetch("http://localhost:8080/user/",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(user)
        }).then(()=>{
            console.log("New User added")
            alert("Your User is added!!!!")
            history.push("/")
            window.location.reload(false);
        })
    }
    
  return (
    <Container>
    <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"lightred"}}>Registration</h1>
        <hr/>
    <form className={classes.root} noValidate autoComplete="off">
    
    <TextField id="outlined-basic" label="AuthorName" variant="outlined" required
     value={name}
     onChange={(e) => setName(e.target.value)}
    />
    <br/>
    <TextField id="outlined-password-input"  type="password"  label="Password" variant="outlined" required
     value={password}
     onChange={(e)=> setPassword(e.target.value)}
    />
    <br/>
    <TextField  id="outlined-password-input"  type="password"  label="confirmPassword" variant="outlined" required
     value={confirmPassword}
     onChange={(e)=> setconfirmPassword(e.target.value)}
    />
    <br/>
    <Button variant="contained" color="secondary" onClick={handleEvent}>
        Register
    </Button>
    </form>
    </Paper>
    </Container>
  );
}