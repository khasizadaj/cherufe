const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const INSTRUCTIONS = `
You are an assistant that receives a list of ingredients that a user 
has and suggests a recipe they could make with some or all of those 
ingredients. You don't need to use every ingredient they mention 
in your recipe. The recipe can include additional ingredients they 
didn't mention, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to 
a web page

Make sure to keep it straightforward and not include any extra 
steps or explanations. You should only return the recipe.

You can add / remove ingredients from the list of ingredients
provided if needed. Don't make drastic changes to the list of 
ingredients.

You add emojis for ingredients if you want to make it more 
fun.

Markdown format:
- Use a unordered list to list the ingredients
- Use an ordered list to list the steps
- Use H2 for the recipe name, H3 for sections (e.g. "Ingredients")
`;

export async function getRecipeFromAI(ingredientsList, cuisine, model) {
  const ingredientsString = ingredientsList.join(", ");

  if (model == "openai") {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "developer",
          content: [
            {
              type: "text",
              text: INSTRUCTIONS,
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `
                I have ${ingredientsString}. 
                I would prefer it to be from ${cuisine} cuisine. 
                Please give me a recipe you'd recommend I make!
              `,
            },
          ],
        },
      ],
    });
    return completion.choices[0].message.content;
  }
}
