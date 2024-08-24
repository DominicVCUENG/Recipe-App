import './styles/App.css';
import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import TagFilter from './components/TagFilter';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagsChange = (tags) => {
        setSelectedTags(tags);
    };

    return (
        <div  className='container'>
            <h1>Recipe App</h1>
            <TagFilter onTagsChange={handleTagsChange} />
            <RecipeList selectedTags={selectedTags} />
            <AddRecipeForm />
        </div>
    );
}

export default App;
