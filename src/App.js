import './App.css';
import { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import { recipes as data } from './recipes';
import AddRecipe from './components/AddRecipe';
import { prefix } from './shared';
import { useForm } from './hooks/useForm';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loadedRecipes, setLoadedRecipes] = useState(false);

  const {
    state: { title, ingredients, directions },
    setValue,
    clearForm,
  } = useForm({ title: '', ingredients: '', directions: '' });

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
    console.log(title, ingredients, directions);

    const recipeToAdd = {
      title,
      ingredients: ingredients.split('\\'),
      directions: directions.split('\\'),
    };
    console.log('new recipe', recipeToAdd);

    localStorage.setItem(`${prefix}-${title}`, JSON.stringify(recipeToAdd));

    setRecipes([
      ...recipes,
      { localStorageKey: `${prefix}-${title}`, ...recipeToAdd },
    ]);
    clearForm();
  };

  const handleDelete = title => {
    const recipeToDelete = recipes.find(recipe => recipe.title === title);

    if (
      recipeToDelete &&
      window.confirm(`Are you sure you want to delete ${title}?`)
    ) {
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
      <RecipeList
        recipes={recipes}
        setRecipes={setRecipes}
        handleDelete={handleDelete}
      />

      <AddRecipe
        handleSubmit={handleSubmit}
        title={title}
        ingredients={ingredients}
        directions={directions}
        setValue={setValue}
      />

      <button onClick={handleLoadRecipes}>Load recipes from file</button>
    </>
  );
}

export default App;
