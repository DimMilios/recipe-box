import RecipeDetails from './RecipeDetails';

function RecipeList({ recipes, setRecipes, handleDelete, handleEdit }) {
  return (
    <ul>
      {recipes.map(recipe => {
        return (
          <RecipeDetails
            key={crypto.getRandomValues(new Uint8Array(30)).toString()}
            recipes={recipes}
            setRecipes={setRecipes}
            handleDelete={handleDelete}
            {...recipe}
          />
        );
      })}
    </ul>
  );
}

export default RecipeList;
