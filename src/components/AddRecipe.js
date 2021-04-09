function AddRecipe({ handleSubmit, title, ingredients, directions, setValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Recipe name</label>
        <input name="title" type="text" value={title} onChange={setValue} />
      </div>

      <div>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea name="ingredients" value={ingredients} onChange={setValue} />
      </div>

      <div>
        <label htmlFor="directions">Directions</label>
        <textarea name="directions" value={directions} onChange={setValue} />
      </div>

      <button>Add Recipe</button>
    </form>
  );
}

export default AddRecipe;
