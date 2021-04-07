import './App.css';
import { useState, useEffect } from 'react';
import { recipes as recipeData } from './recipes';
import { RecipeList } from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, ingredients, directions);

    const recipeToAdd = {
      title: name,
      ingredients: [{ description: ingredients.split('\\') }],
      directions: directions.split('\\'),
    };
    console.log('new recipe', recipeToAdd);
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

function AddRecipe({
  name,
  ingredients,
  directions,
  handleSubmit,
  handleNameChange,
  handleIngredientsChange,
  handleDirectionsChange,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Recipe name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          name="ingredients"
          value={ingredients}
          onChange={handleIngredientsChange}
        />
      </div>

      <div>
        <label htmlFor="directions">Directions</label>
        <textarea
          name="directions"
          value={directions}
          onChange={handleDirectionsChange}
        />
      </div>

      <button>Add Recipe</button>
    </form>
  );
}

export default App;
