import './App.css';
import { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import { recipes as data } from './recipes';
import AddRecipe from './components/AddRecipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loadedRecipes, setLoadedRecipes] = useState(false);

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const prefix = '_fcce5c90958-c559-42db-9fca-cc42317b48f8_recipes';

  useEffect(() => {
    const storedRecipes = Object.entries(localStorage).reduce(
      (array, [key, value]) => {
        if (key in array || !key?.startsWith(prefix)) return [];
        return array.concat({ localStorageKey: key, ...JSON.parse(value) });
      },
      []
    );

    setRecipes(storedRecipes);
  }, [loadedRecipes]);

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

  const handleDelete = title => {
    const recipeToDelete = recipes.find(recipe => recipe.title === title);

    if (recipeToDelete) {
      localStorage.removeItem(recipeToDelete.localStorageKey);
      setRecipes(
        recipes.filter(
          recipe => recipe.localStorageKey !== recipeToDelete.localStorageKey
        )
      );
    }
  };

  const handleLoadRecipes = () => {
    data.forEach(recipe => {
      recipe.localStorageKey = `${prefix}-${recipe.title}`;
      localStorage.setItem(recipe.localStorageKey, JSON.stringify(recipe));
    });
    setLoadedRecipes(true);
  };

  return (
    <>
      <RecipeList recipes={recipes} handleDelete={handleDelete} />

      <AddRecipe
        name={name}
        ingredients={ingredients}
        directions={directions}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleIngredientsChange={handleIngredientsChange}
        handleDirectionsChange={handleDirectionsChange}
      />

      <button onClick={handleLoadRecipes}>Load recipes from file</button>
    </>
  );
}

export default App;
