import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';


const router = createHashRouter([

    {path: '' , element: <Layout/>, children: [
        {path: '/', element: <Home/>},
        {path: 'recipedetails/:id', element: <RecipeDetails />},
        {path: '*', element: <h1>Wrong URL</h1>}
    ] }
])

export default function App() {
  return (
    <>
    
    <RouterProvider router={router}/>
    
    </>
  )
}
