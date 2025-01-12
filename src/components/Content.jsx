import { useState } from "react";
import { CirclePlus, CookingPot } from "lucide-react";
import Ingredients from "./Ingredients";

export default function Content() {
  function getRecipe() {
    console.log("Get Recipe Called!");
  }

  /*
    This section is much more simplified in react@19.0.0
    In new version you do not need to prevent form submission
    manually and reset it.
  */
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

  return (
    <section className="h-[calc(100vh-100px)] flex flex-col justify-end px-24 py-8 gap-4">
      <div className="flex-1 space-y-8 overflow-y-auto">
      <Ingredients ingredients={ingredients} />
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
          disabled
          type="button"
          onClick={getRecipe}
          className="flex justify-center items-center gap-4 p-4 text-xl font-semibold border rounded border-orange-500 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:border-gray-300 disabled:cursor-not-allowed"
        >
          <CookingPot size={24} className="text-white" />
          Cook Up!
        </button>
      </div>
    </section>
  );
}
