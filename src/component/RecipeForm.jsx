import React, { useState } from 'react'
import { MdAdd } from "react-icons/md";

const RecipeForm = ({ addRecipe }) => {
    const [recipeName, setRecipeName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recipeName.trim()) return;
        addRecipe(recipeName);
        setRecipeName('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                className="form-control  recipe-input"
                aria-describedby="passwordHelpBlock"
                placeholder='Enter Recipe Name'
            />
            <button type="submit"
                className="btn btn-success"><MdAdd /></button>
        </form>

    )
}

export default RecipeForm
