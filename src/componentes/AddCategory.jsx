import React, { useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({setCategoria}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('submitiado');

        if(inputValue.trim().length >2){

            setCategoria( cat => [inputValue, ...cat])
            setInputValue('')
        }
    }
    
    
    return (
        <form onSubmit={handleSubmit} >
            <input 
            type="text"
            value={inputValue}
            placeholder="Buscar"
            onChange={ handleChange }
            
            />
        </form>
    );
}
AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
export default AddCategory;
