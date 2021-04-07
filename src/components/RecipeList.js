import { RecipeDetails } from './RecipeDetails';

export function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map(recipe => {
        return <RecipeDetails key={recipe.title} {...recipe} />;
      })}
    </ul>
  );
}
