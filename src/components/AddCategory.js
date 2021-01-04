import React,{useState} from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
       setinputValue(e.target.value);

    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categorias => [inputValue,...categorias]);
            setinputValue('');
        }

        
       // console.log('Submit Hecho!');

    }
    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                placeholder = "Digite la Categoria"
                value = {inputValue}
                onChange = {handleInputChange}

            />
        </form>
        
    
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
  };
