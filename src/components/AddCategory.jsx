import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        //console.log(event.target.value);
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);

        if(inputValue.trim().length <= 1) return;
        // setCategories(...., inputValue);
        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
        
    }
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}