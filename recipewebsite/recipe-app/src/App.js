
import './App.css';
//import AddRecipe from './components/AddRecipe'; 
import {  Router , Route, Switch } from 'react-router-dom';
import SearchRecipe from './components/SearchRecipe';
import RecipeById from './components/RecipeById';
import Login from './components/Login';
import Registration from './components/Registration';
import AddRecipe from './components/AddRecipe';
import MyRecipes from './components/MyRecipes';
import UpdateRecipe from './components/UpdateRecipe';
import DeleteById from './components/DeleteById';
// import RecipesOnMainPage from './components/RecipesOnMainPage'
import history from './components/history';

function App() {
  return (
    <div className="App">
      <Router  history={history}>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/myrecipes" component={MyRecipes}/>
          <Route exact path="/update" component={UpdateRecipe}/>
          <Route exact path="/search" component={SearchRecipe}/>
          <Route exact path="/addRecipe" component={AddRecipe}/>
          <Route exact path="/recipeById" component={RecipeById}/>
          <Route exact path="/DeleteById" component={DeleteById}/>
          {/* <Route exact path="/RecipesOnMainPage" component={RecipesOnMainPage}/> */}
        </Switch>
       </Router>
    </div>
  );
}

export default App;
