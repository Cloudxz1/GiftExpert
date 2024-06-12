import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([' ']);

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
                <GifGrid key ={ category } 
                    category ={ category }
                />))
            }
            
            {/* GifsItem */}
        </>
    )
};