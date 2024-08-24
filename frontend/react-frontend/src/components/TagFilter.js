import React, { useState } from 'react';
import '../styles/TagFilter.css'

const TagFilter = ({ onTagsChange }) => {
    const tags = ['American', 'Asian', 'Breakfast', 'Chinese', 'Comfort', 'Creole', 'Dessert', 'French', 'Greek', 'Healthy', 'Indian', 'Italian', 'Japanese', 'Mexican', 'Middle Eastern', 'Mild', 'Russian', 'Savory', 'Seafood', 'Spicy', 'Sweet', 'Thai', 'Vegan', 'Vietnamese'];

    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagChange = (event) => {
        const tag = event.target.value;
        setSelectedTags(prevTags =>
            prevTags.includes(tag)
                ? prevTags.filter(t => t !== tag)
                : [...prevTags, tag]
        );
    };

    const handleApplyFilters = () => {
        onTagsChange(selectedTags);
    };

    return (
        <div className='tag-container'>
            <h2>Filter by Tags</h2>
                <div className='tag-box'>
                    {tags.map(tag => (
                        <label key={tag} className='tags'>
                            <input
                                type='checkbox'
                                value={tag}
                                checked={selectedTags.includes(tag)}
                                onChange={handleTagChange}
                            />
                            {tag}
                        </label>
                    ))}
                </div>
                <div id='filter-button'>
                    <button onClick={handleApplyFilters}>Apply Filters</button>
                </div>
        </div>
    );
};

export default TagFilter;
