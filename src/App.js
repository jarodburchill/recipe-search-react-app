import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "b13e27ea";
  const APP_KEY = "aee20b35ca7e609b40c023f355878e70";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div>
      <h1 className="app-title">Recipe Finder</h1>
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text"
          placeholder="i.e. 'Banana Smoothie'"
          value={search} 
          onChange={updateSearch} 
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((item, index) => (
          <Recipe 
            key={index} 
            title={item.recipe.label} 
            image={item.recipe.image}
            ingredients={item.recipe.ingredients} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
