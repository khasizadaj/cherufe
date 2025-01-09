import { useState } from "react";
import { CirclePlus, CookingPot } from "lucide-react";

export default function Content() {
  function getRecipe() {
    console.log("Get Recipe Called!");
  }

  function addIngredient(e) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl));

    // Validate input
    if (data.ingredient.length === 0) {
      alert("No ingredient provided.");
      return;
    }
    if (ingredients.includes(data.ingredient)) {
      alert("This ingredient is already added.");
      return;
    }

    // Update ingredients
    setIngredients((prevIngredients) => [...prevIngredients, data.ingredient]);

    formEl.reset();
  }

  const [ingredients, setIngredients] = useState([]);

  let ingredientsElement;
  if (ingredients.length === 0) {
    ingredientsElement = (
      <p className="text-gray-500">ℹ️ Added ingredients will show up here!</p>
    );
  } else {
    ingredientsElement = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    });
  }

  return (
    <section className="h-[calc(100vh-100px)] flex flex-col justify-end px-24 py-8">
      <div className="flex-1 p-4 space-y-8">
        <h2 className="text-3xl font-semibold text-orange-500">Ingredients</h2>
        <ol className="list-decimal list-inside text-2xl space-y-2">
          {ingredientsElement}
        </ol>
      </div>
      <div className="flex mb-2 gap-2">
        <form
          onSubmit={addIngredient}
          className="h-full flex flex-1 mb-2 gap-2"
        >
          <input
            type="text"
            placeholder="e.g. tomato"
            aria-label="Add ingredient"
            name="ingredient"
            className="flex-1 px-4 text-xl rounded border border-orange-500 bg-orange-500/10"
          />
          <button
            type="submit"
            className="flex justify-center items-center gap-4 p-4 text-lg border-2 rounded border-orange-500 bg-orange-500/10 hover:bg-orange-400/20 font-semibold"
          >
            <CirclePlus size={24} className="text-orange-500" />
            Add ingredient
          </button>
        </form>
        <button
          type="button"
          onClick={getRecipe}
          className="flex justify-center items-center gap-4 p-4 text-xl font-semibold border rounded border-orange-500 bg-orange-500 hover:bg-orange-600"
        >
          <CookingPot size={24} className="text-white" />
          Cook Up!
        </button>
      </div>
    </section>
  );
}
