// import { useHistory, useLocation } from "react-router-dom";
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import {  useState } from "react";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

// const RecipesOnMainPage = props =>  {
//     const location = useLocation();
//     let history = useHistory();
//     const[recipe,setRecipe]=useState([])

//    // const recipes = location.state;

   
    
//      function refreshPage(value){
//         console.log("recipes name"+ recipes)
//         // console.log("I am hereeeeeeee")
//         // console.log(value)
//         // fetch(`http://localhost:8080/recipes/${value}`)
//         // .then(res=>res.json())
//         // .then((result)=>{
//         //     console.log(location.state)
//         //     setRecipe(result);
//         // })
        
//       }

      

//       function handleBackEvent(){
//         history.push('/');
//         window.location.reload(false);
//       }
      
     

//   return (
//     <div>
//      <h1>My Recipes</h1>
//     {recipes.map(recipe=>(
//          <Card sx={{ minWidth: 275 }}  style={{margin:"10px",padding:"15px", textAlign:"left"}} key={recipe.id}>
//        <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           {recipe.recipe_name}
//         </Typography>
        
//         <Typography variant="body2">
//           Cook Time: {recipe.cook_time}
//         </Typography>
//         <Typography variant="body2">
//           Total Time: {recipe.total_time}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" onClick={() => refreshPage(recipe.id)} >Learn More</Button>
//       </CardActions>
//     </Card>
//       ))
//     }

//     <Button variant="contained" color="secondary" onClick={handleBackEvent}>Logout</Button>

//     {recipe ? 
//         <div>
//         <h1 style={{color:"lightred"}}>{recipe.recipe_name}</h1>
//         <Stack spacing={2}>
//          <Item>Cook Time: dcwvwv</Item>
//          <Item>Total Time: {recipe.total_time}</Item>
//          <Item>Description: {recipe.description}</Item>
//          <Item>Author: {recipe.author_name}</Item>
//        </Stack>
//        <br/>
//        <Button variant="contained" color="secondary" onClick={handleBackEvent}>Back</Button>
//  </div>: null
//      }
//     </div>
    
//   );
// }

// export default RecipesOnMainPage;