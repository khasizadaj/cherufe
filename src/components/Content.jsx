import { CirclePlus, CookingPot } from "lucide-react";

export default function Content(props) {
  function getRecipe() {
    console.log("Get Recipe Called!");
  }

  function addIngredient(e) {
    e.preventDefault();
    console.log("Added ingredient.");
    const data = new FormData(e.currentTarget);
    const newIngredient = data.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);

    // NOTE: This is not interative solution. State is the way
    // to go and will be added later.
  }

  const ingredients = ["Tomato", "Cheddar cheese", "Carrot"];

  return (
    <section className="h-[calc(100vh-100px)] flex flex-col justify-end px-24 py-8">
      <div className="flex-1 p-4 space-y-8">
        <h2 className="text-3xl font-semibold text-orange-500">Ingredients</h2>
        <ol className="list-decimal list-inside text-2xl space-y-2">
          {ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
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
