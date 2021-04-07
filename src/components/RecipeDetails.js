import { useToggle } from '../hooks/useToggle';

export function RecipeDetails({ title, ingredients, directions }) {
  const [visible, toggle] = useToggle(false);
  return (
    <li onClick={toggle}>
      <h2>{title}</h2>
      {visible && (
        <div>
          <div>
            <h3>Ingredients</h3>
            {ingredients.map(ingredient => (
              <div key={ingredient.ingredient}>{ingredient.description}</div>
            ))}
          </div>
          <div>
            <h3>Directions</h3>
            {directions.map(direction => (
              <div key={direction}>{direction}</div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}
