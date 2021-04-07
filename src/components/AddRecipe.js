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

export default AddRecipe;
