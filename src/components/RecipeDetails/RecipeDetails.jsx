import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function RecipeDetails({ }) {

  const { id } = useParams();
  const [recipeInstructions, setrecipeInstructions] = useState(null)

  useEffect(() => {
   axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
     .then((response) => {
       setrecipeInstructions(response.data.meals);
        console.log(response.data.meals);
     })
     .catch((error) => {
       console.error(`Error fetching recipe details:`, error);
     });
  }, [id]);


  return (
    <>


   {recipeInstructions && recipeInstructions.map((instruction, index) => (
      <div key={id} className="container mx-auto p-6">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-4 ">
      {instruction.strMeal} - {instruction.strArea}
    </h1>
    <img className="max-w-sm mx-auto my-4 rounded-lg shadow" src={instruction.strMealThumb} alt={instruction.strMeal} />
    <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
    <ul className="list-disc list-inside mb-4">
      {instruction.strIngredient1 && <li className="mb-2">{instruction.strIngredient1}</li>}
      {instruction.strIngredient2 && <li className="mb-2">{instruction.strIngredient2}</li>}
      {instruction.strIngredient3 && <li className="mb-2">{instruction.strIngredient3}</li>}
      {instruction.strIngredient4 && <li className="mb-2">{instruction.strIngredient4}</li>}
      {instruction.strIngredient5 && <li className="mb-2">{instruction.strIngredient5}</li>}
      {instruction.strIngredient6 && <li className="mb-2">{instruction.strIngredient6}</li>}
      {instruction.strIngredient7 && <li className="mb-2">{instruction.strIngredient7}</li>}
      {instruction.strIngredient8 && <li className="mb-2">{instruction.strIngredient8}</li>}
      {instruction.strIngredient9 && <li className="mb-2">{instruction.strIngredient9}</li>}
      {instruction.strIngredient10 && <li className="mb-2">{instruction.strIngredient10}</li>}
      {instruction.strIngredient11 && <li className="mb-2">{instruction.strIngredient11}</li>}
      {instruction.strIngredient12 && <li className="mb-2">{instruction.strIngredient12}</li>}
      {instruction.strIngredient13 && <li className="mb-2">{instruction.strIngredient13}</li>}
      {instruction.strIngredient14 && <li className="mb-2">{instruction.strIngredient14}</li>}
      {instruction.strIngredient15 && <li className="mb-2">{instruction.strIngredient15}</li>}
      {instruction.strIngredient16 && <li className="mb-2">{instruction.strIngredient16}</li>}
      {instruction.strIngredient17 && <li className="mb-2">{instruction.strIngredient17}</li>}
      {instruction.strIngredient18 && <li className="mb-2">{instruction.strIngredient18}</li>}
      {instruction.strIngredient19 && <li className="mb-2">{instruction.strIngredient19}</li>}
      {instruction.strIngredient20 && <li className="mb-2">{instruction.strIngredient20}</li>}
    </ul>
    <h2 className="text-xl font-semibold mb-2">Instructions</h2>
    <p className="text-gray-700 mb-4">{instruction.strInstructions}</p>
    <p className="text-gray-700 mb-4">{instruction.strAdditionalInfo}</p>
  </div>
</div>
   ))}




    </>
  )
}
