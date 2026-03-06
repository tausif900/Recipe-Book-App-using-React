import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeForm from './component/RecipeForm';
import RecipeList from './component/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const addRecipe = (name) => {
    const newRecipe = {
      id: Date.now(),
      name: name,
    }
    setRecipes([...recipes, newRecipe]);
  };
  const deleteRecipe = (id) => {
    const updateRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updateRecipes);
  };
  return (
    <div className='container'>
      <h1>Recipe Book App</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div >

  )
}

export default App
