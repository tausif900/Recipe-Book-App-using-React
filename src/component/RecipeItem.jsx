import React from 'react'
import { RiDeleteBack2Line } from "react-icons/ri";

const RecipeItem = ({ recipe, deleteRecipe }) => {
    return (
        <div className='recipe-item'>
            <span>{recipe.name}</span>
            <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.id)}><RiDeleteBack2Line /></button>
        </div>
    )
}

export default RecipeItem
