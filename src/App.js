import './App.css';
import { useState, useEffect } from 'react';
import { recipes as recipeData } from './recipes';
import { RecipeList } from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
