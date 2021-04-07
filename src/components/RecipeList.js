import { RecipeDetails } from './RecipeDetails';

export function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map(recipe => {
        return (
          <RecipeDetails
            key={crypto.getRandomValues(new Uint8Array(30)).toString()}
            {...recipe}
          />
        );
      })}
    </ul>
  );
}
