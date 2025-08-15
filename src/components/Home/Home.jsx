import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

  const [allMeals, setallMeals] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allCategories = ["All", "Beef", "Breakfast","Chicken", "Dessert", "Goat", "Lamb", "Miscellaneus", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegeterian"];

  useEffect(() => {
    if (selectedCategory === "All") {
      const promises = allCategories.map((category) =>
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((response) => response.data.meals)
            .catch((error) => {
                console.error(`Error fetching meals for category ${category}:`, error);
                return null;
            })
    );

    Promise.all(promises)
        .then((results) => {
            const validMeals = results.filter(meal => meal !== null);
            const flattenedMeals = validMeals.flat();
            setallMeals(flattenedMeals);
            console.log(flattenedMeals);
        });
    }
    else if (selectedCategory == "Beef") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Beef:`, error);
        });
    }else if (selectedCategory == "Breakfast") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Breakfast:`, error);
        });
    }else if (selectedCategory == "Chicken") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Chicken:`, error);
        });
    }else if (selectedCategory == "Dessert") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Dessert:`, error);
        });
    }else if (selectedCategory == "Goat") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Goat:`, error);
        });
    }else if (selectedCategory == "Lamb") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Lamb:`, error);
        });
    }else if (selectedCategory == "Miscellaneous") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Miscellaneous:`, error);
        });
    }else if (selectedCategory == "Pasta") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Pasta:`, error);
        });
    }else if (selectedCategory == "Seafood") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Seafood:`, error);
        });
    }else if (selectedCategory == "Side") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Side`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Side:`, error);
        });
    }else if (selectedCategory == "Starter") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter`)
        .then((response) => {
          setallMeals(response.data.meals);
          console.log(response.data.meals);
        })
        .catch((error) => {
          console.error(`Error fetching meals for category Starter:`, error);
        });
      }else if (selectedCategory == "Vegan") {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan`)
          .then((response) => {
            setallMeals(response.data.meals);
            console.log(response.data.meals);
          })
          .catch((error) => {
            console.error(`Error fetching meals for category Vegan:`, error);
          });
      }else if (selectedCategory == "Vegetarian") {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
          .then((response) => {
            setallMeals(response.data.meals);
            console.log(response.data.meals);
          })
          .catch((error) => {
            console.error(`Error fetching meals for category Vegetarian:`, error);
          });
      }

  }, [selectedCategory]);

function handleCategoryChange(category) {
  setSelectedCategory(category);
}

  return (
    <>

<div className="flex flex-wrap rounded-md shadow-xs" role="group">
  {allCategories.map(function (category) {
    return (<button onClick={() => handleCategoryChange(category)} type="button" key={category} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{category}</button>
)
  })}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {allMeals && allMeals.map((meal) => (
    <div key={meal.idMeal} className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-10">
        <img className="w-50 h-50 mb-3 rounded-full shadow-lg" src={meal.strMealThumb} alt={meal.strMeal} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">{meal.strMeal}</h5>
        <div className="flex mt-4 md:mt-6">
          <Link to={`/recipedetails/${meal.idMeal}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View Recipe</Link>
        </div>
      </div>
    </div>
  ))}
</div>





    
    </>
  )
}
