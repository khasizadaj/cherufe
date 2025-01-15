export default function Ingredients(props) {
  let ingredientsElement;
  if (props.ingredients.length === 0) {
    ingredientsElement = (
      <p className="text-gray-500">ℹ️ Added ingredients will show up here!</p>
    );
  } else {
    ingredientsElement = props.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    });
  }
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold text-orange-500">Ingredients</h2>
      <ol className="list-decimal list-inside text-2xl space-y-2">
        {ingredientsElement}
      </ol>
    </div>
  );
}
