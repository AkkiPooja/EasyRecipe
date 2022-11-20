
import './App.css';
//import AddRecipe from './components/AddRecipe'; 
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import SearchRecipe from './components/SearchRecipe';
import RecipeById from './components/RecipeById';
import Login from './components/Login';
import Registration from './components/Registration';
import AddRecipe from './components/AddRecipe';
import history from './components/history';

function App() {
  return (
    <div className="App">
      <Router  history={history}>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/search" component={SearchRecipe}/>
          <Route exact path="/addRecipe" component={AddRecipe}/>
          <Route exact path="/recipeById" component={RecipeById}/>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
