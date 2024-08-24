import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddRecipeForm.css'

const AddRecipeForm = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        ingredients: '',
        tags: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecipe(prevRecipe => ({
            ...prevRecipe,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/pending-recipes/', recipe);
            displayMessage('Your recipe has been submitted for review!');
        } catch (error) {
            console.error('Error submitting recipe:', error);
            displayMessage('Failed to submit recipe.');
        }
    };

    const displayMessage = (message) => {
        const msgElement = document.getElementById('msg');
        msgElement.textContent = message;
        
        setRecipe({
            name: '',
            description: '',
            ingredients: '',
            tags: ''
        });
        
        setTimeout(() => {
            msgElement.textContent = '';
        }, 5000);
        
    };

    return (
        <div className='form-container'>
            <h2>Add New Recipe</h2>
            <div className='recipe-form'>
                <form name='add-recipe-form' onSubmit={handleSubmit} autoComplete='on'>
                    <label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={recipe.name}
                            onChange={handleChange}
                            className='input-field'
                            required
                        />
                    </label>
                    <label>
                        <textarea
                            name='description'
                            placeholder='Description'
                            value={recipe.description}
                            onChange={handleChange}
                            className='input-field'
                            required
                        />
                    </label>
                    <label>
                        <textarea
                            name='ingredients'
                            placeholder='Ingredients'
                            value={recipe.ingredients}
                            onChange={handleChange}
                            className='input-field'
                            required
                        />
                    </label>
                    <label>
                        <input
                            type='text'
                            name='tags'
                            placeholder='Tags'
                            value={recipe.tags}
                            onChange={handleChange}
                            className='input-field'
                            required
                        />
                    </label>
                    <div className='submit-box'>
                        <button type='submit'>Submit Recipe</button>
                    </div>
                </form>
                <div className='message-box'>
                    <span id='msg'></span>
                </div>
            </div>
        </div>
    );
};

export default AddRecipeForm;
