import { useToggle } from '../hooks/useToggle';

function RecipeDetails({ title, ingredients, directions }) {
  const [visible, toggle] = useToggle(false);
  return (
    <li>
      <h2 onClick={toggle}>{title}</h2>
      {visible && (
        <div>
          <div>
            <h3>Ingredients</h3>
            {ingredients.map(ingredient => (
              <div key={crypto.getRandomValues(new Uint8Array(30)).toString()}>
                {ingredient.description}
              </div>
            ))}
          </div>
          <div>
            <h3>Directions</h3>
            {directions.map(direction => (
              <div key={crypto.getRandomValues(new Uint8Array(30)).toString()}>
                {direction}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

export default RecipeDetails;
