import { useToggle } from '../hooks/useToggle';

function RecipeDetails({ title, ingredients, directions, handleDelete }) {
  const [visible, toggle] = useToggle(false);
  return (
    <li>
      <h2 onClick={toggle}>{title}</h2>
      {visible && (
        <>
          <div>
            <button onClick={() => handleDelete(title)}>Delete</button>
          </div>

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
