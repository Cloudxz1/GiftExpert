import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    // Agregar una nueva categoria
    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;
        
        setCategories([newCategory, ...categories ]);
    };

    return( 
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory = { event => onAddCategory(event) }
            />
            {/* Listado de gifs */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            
            {
                categories.map(category =>(
                <GifGrid key ={category} 
                category={ category }
                />))
            }
            
            {/* GifsItem */}
        </>
    )
};