import React from 'react'
import RecipeItem from './RecipeItem'

const RecipeList = ({ recipes, deleteRecipe }) => {
    return (
        <div>
            <h2>All Recipes</h2>
            {recipes.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    recipe={recipe}
                    deleteRecipe={deleteRecipe}
                />
            ))}
        </div>
    )
}

export default RecipeList
