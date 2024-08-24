import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RecipeList.css'

const RecipeList = ({ selectedTags }) => {
    const [recipes, setRecipes] = useState([]);
    const [expandedRecipe, setExpandedRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/recipes/');
                const allRecipes = response.data;

                if (selectedTags.length > 0) {
                    const filteredRecipes = allRecipes.filter(recipe =>
                        selectedTags.some(tag => recipe.tags.includes(tag))
                    );
                    setRecipes(filteredRecipes);
                } else {
                    setRecipes(allRecipes);
                }
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, [selectedTags]);

    const toggleExpandRecipe = (recipeId) => {
        setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
    };

    return (
        <div className='recipe-container'>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id} className='recipe-card' onClick={() => toggleExpandRecipe(recipe.id)}>
                        <h3>{recipe.name}</h3>
                        <p><strong>Tags:</strong> {recipe.tags}</p>
                        {expandedRecipe === recipe.id && (
                            <div className='recipe-details'>
                                <div className='img-box'>
                                    <img src={`http://127.0.0.1:8000/static/images/recipes/${recipe.name}.jpg`} alt={recipe.name} />
                                </div>
                                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <p>{recipe.description}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
