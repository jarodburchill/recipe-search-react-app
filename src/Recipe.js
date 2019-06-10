import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}    
            </ul>
            <img src={image} alt={title} className={style.image}/>
        </div>
    );
}

export default Recipe;