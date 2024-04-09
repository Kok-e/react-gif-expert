import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;

        setCategories([value, ...categories]);

    }

    const onDeleteCategory = (category) => {
        setCategories(categories.filter(cat => cat !== category));
    }

    return (
        <>
            <h1>
                GifExpertApp
            </h1>

            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} onDeleteCategory={onDeleteCategory} />
                )
                )
            }
        </>
    )
}

export default GifExpertApp
