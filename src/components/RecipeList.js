import RecipeDetails from './RecipeDetails';

function RecipeList({ recipes, handleDelete }) {
  return (
    <ul>
      {recipes.map(recipe => {
        return (
          <RecipeDetails
            key={crypto.getRandomValues(new Uint8Array(30)).toString()}
            handleDelete={handleDelete}
            {...recipe}
          />
        );
      })}
    </ul>
  );
}

export default RecipeList;
