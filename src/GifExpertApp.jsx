import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGRid';

export const GifExpertApp = () => {

    const[categories, setCategories]=useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([...categories, newCategory]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
       <AddCategory //onAddCategory={setCategories}
       onNewCategory={(newCategory) => onAddCategory(newCategory)}
       />
        
        
            {
                categories.map(category => {
                    return (
                        <GifGrid
                        key={category}
                        category={category}
                        
                        />
                    )
                })
            }
            
        
    </>
  );
}