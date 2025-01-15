import { useState } from "react";
import { CirclePlus, CookingPot } from "lucide-react";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";

import { getRecipeFromAI } from "../utils/ai";

const CUISINES = [
  { value: "any", text: "Any" },
  { value: "surprise", text: "Surprise me" },
  { value: "italian", text: "Italian" },
  { value: "chinese", text: "Chinese" },
  { value: "mexican", text: "Mexican" },
  { value: "indian", text: "Indian" },
  { value: "japanese", text: "Japanese" },
  { value: "french", text: "French" },
  { value: "thai", text: "Thai" },
  { value: "mediterranean", text: "Mediterranean" },
  { value: "american", text: "American" },
  { value: "korean", text: "Korean" },
];

export default function Content() {
  async function getRecipe() {
    if (cuisine === "") {
      if (confirm("Setting cuisine to Any")) {
        setCuisine("any");
      }
      else {
        alert("No cuisine selected. Please select a cuisine.");
        return;
      }
    }
    try {
      console.log("Get Recipe Called!");
      setRequestSent(true);
      const recipe = await getRecipeFromAI(ingredients, cuisine, "openai");
      setRequestSent(false);
      setRecipe(recipe);
    } catch (error) {
      console.error("Error fetching recipe:", error.message);
    }
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

  function updateCuisine(e) {
    setCuisine(e.target.value);
  }

  const [ingredients, setIngredients] = useState([]);
  const [requestSent, setRequestSent] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [cuisine, setCuisine] = useState("");

  return (
    <section className="h-[calc(100vh-100px)] flex flex-col justify-end px-4 sm:px-24 pb-8 gap-4">
      <div className="flex-1 space-y-8 overflow-y-auto">
        <Ingredients ingredients={ingredients} />
        {requestSent && <Recipe recipe="Looking for a recipe... 🍜" />}
        {!requestSent && recipe && <Recipe recipe={recipe} />}
      </div>
      <div className="flex flex-col sm:flex-row mb-2 gap-2">
        <form
          onSubmit={addIngredient}
          className="h-full flex flex-col sm:flex-row flex-1 mb-2 gap-2"
        >
          <input
            type="text"
            placeholder="e.g. tomato"
            aria-label="Add ingredient"
            name="ingredient"
            className="flex-1 p-4 text-base rounded border border-orange-500 bg-orange-500/10"
          />
          <button
            type="submit"
            className="flex justify-center items-center gap-4 p-3 text-base border-2 rounded border-orange-500 bg-orange-500/10 hover:bg-orange-400/20 font-semibold"
          >
            <CirclePlus size={24} strokeWidth={2} className="text-orange-500" />
            Add ingredient
          </button>
        </form>
        <select
          name="cuisine"
          aria-label="Select cuisine"
          className="w-full sm:w-40 p-3 text-base font-semibold rounded border border-orange-500 bg-orange-500/10"
          defaultValue=""
          onChange={updateCuisine}
        >
          <option value="" disabled>
            -- Cuisine --
          </option>
          {CUISINES.map((cuisine) => (
            <option
              key={cuisine.value}
              value={cuisine.value}
              className="bg-orange-800 text-gray-50"
            >
              {cuisine.text}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={getRecipe}
          className="flex justify-center items-center gap-4 p-3 text-base font-semibold border rounded border-orange-500 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:border-gray-300 disabled:cursor-not-allowed"
        >
          <CookingPot size={24} strokeWidth={2} className="text-white" />
          Cook Up!
        </button>
      </div>
    </section>
  );
}
