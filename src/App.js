import './App.css';
import { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const prefix = '_fcce5c90958-c559-42db-9fca-cc42317b48f8_recipes';

  useEffect(() => {
    setRecipes(
      Object.entries(localStorage).reduce((array, [key, value]) => {
        if (key in array || !key?.startsWith(prefix)) return [];
        return array.concat(JSON.parse(value));
      }, [])
    );
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, ingredients, directions);

    const recipeToAdd = {
      title: name,
      ingredients: ingredients.split('\\'),
      directions: directions.split('\\'),
    };
    console.log('new recipe', recipeToAdd);

    localStorage.setItem(`${prefix}-${name}`, JSON.stringify(recipeToAdd));

    setRecipes([...recipes, recipeToAdd]);
    setName('');
    setIngredients('');
    setDirections('');
  };

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handleIngredientsChange = event => {
    setIngredients(event.currentTarget.value);
  };

  const handleDirectionsChange = event => {
    setDirections(event.currentTarget.value);
  };

  return (
    <div>
      <RecipeList recipes={recipes} />

      <AddRecipe
        name={name}
        ingredients={ingredients}
        directions={directions}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleIngredientsChange={handleIngredientsChange}
        handleDirectionsChange={handleDirectionsChange}
      />
    </div>
  );
}

export default App;
