import { Button, Input } from "antd";
import axios from "axios";
import React, { useState,useEffect } from "react";
import Recipe from "../components/recipe";
const FoodRecipe = () => {
    const [recipe, setRecipe] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("paneer");
    useEffect(() => {
      getRecipe();
    }, [query]);
  
    const getRecipe = async () => {
      const response = await axios.get(

        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=75abcf69&app_key=0c69df6c5f7798798372b556c33a633f	`
      );
      setRecipe(response.data.hits);
      console.log(response.data.hits);
    };
    const updateSearch = (e) => {
      setSearch(e.target.value);
      console.log(e.target.value);
    };
    const updateQuery = (e) => {
      e.preventDefault();
      setQuery(search);
    };



  return (
    <div className="container mx-auto mt-[10%] ">
      <h1 className="text-5xl font-semibold text-[#001529] text-center">
        
        Want to search the best diet recipe for your health{" "}
      </h1>
      <h1 className="text-lg mb-3 mt-1 font-extrabold text-[#001529] text-center">
        
        Just search here
      </h1>
      <center>
      <form class="d-flex mb-5" role="search" onSubmit={updateQuery} pb-5>

     
          <Input
             onChange={updateSearch}
            value={search}
            placeholder="Search Recipes"
          />
        <button class="btn btn-outline-success" type="submit">
            Search
          </button>
 
                </form>  </center> 
        <div className=" card-group row row-cols-1 row-cols-md-3 g-4 ">
          {recipe.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      
    </div>
  );
};

export default FoodRecipe;
