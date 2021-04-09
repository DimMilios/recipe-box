import { useForm } from '../hooks/useForm';
import { useToggle } from '../hooks/useToggle';
import { prefix } from '../shared';
import AddRecipe from './AddRecipe';

function RecipeDetails({
  recipes,
  setRecipes,
  title,
  ingredients,
  directions,
  handleDelete,
}) {
  const [detailsVisible, toggleDetails] = useToggle(false);
  const [editFormVisible, toggleEditForm] = useToggle(false);
  const { state, setValue } = useForm({
    title: '',
    ingredients: '',
    directions: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    const recipeToEdit = recipes.find(recipe => recipe.title === title);
    console.log(recipeToEdit);

    if (recipeToEdit) {
      const newRecipe = {
        title: state.title,
        ingredients: state.ingredients.split('\\'),
        directions: state.directions.split('\\'),
      };
      localStorage.setItem(
        `${prefix}-${newRecipe.title}`,
        JSON.stringify(newRecipe)
      );
      localStorage.removeItem(recipeToEdit.localStorageKey);

      const updatedRecipes = recipes.map(recipe =>
        recipe.title === recipeToEdit.title
          ? { localStorageKey: `${prefix}-${newRecipe.title}`, ...newRecipe }
          : recipe
      );
      console.log(updatedRecipes);
      setRecipes(updatedRecipes);
    }
  };

  return (
    <li>
      <h2 onClick={toggleDetails}>{title}</h2>
      {detailsVisible && (
        <>
          <div>
            <button onClick={() => handleDelete(title)}>Delete</button>
            <button onClick={toggleEditForm}>Edit</button>
          </div>

          {editFormVisible && (
            <div>
              <AddRecipe
                handleSubmit={handleSubmit}
                title={state.title}
                ingredients={state.ingredients}
                directions={state.directions}
                setValue={setValue}
              />
            </div>
          )}

          <div>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map(ingredient => (
                <li key={crypto.getRandomValues(new Uint8Array(30)).toString()}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Directions</h3>
            <ol>
              {directions.map(direction => (
                <li key={crypto.getRandomValues(new Uint8Array(30)).toString()}>
                  {direction}
                </li>
              ))}
            </ol>
          </div>
        </>
      )}
    </li>
  );
}

export default RecipeDetails;
