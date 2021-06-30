import './App.css';
import { useState } from 'react';
import RecipeWindow from './Components/RecipeWindow';

function App() {
  const YOUR_APP_ID = 'bac60f74';
  const YOUR_APP_KEY = '008d98da1cb5c18289e6a1ce970eeef7';

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1>Find Awesome Recipes Here!</h1>
      {/* Search Form */}
      <form className="form-control" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search your Main Ingredient"
          className="input-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Submit" className="btn-submit" />
      </form>

      <RecipeWindow recipes={recipes} />
    </div>
  );
}

export default App;