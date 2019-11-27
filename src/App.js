import React, {useEffect, useState} from 'react';
import Recipes from './Recipes';
import './App.css';
import { Button, Input, Form, InputGroup, Container, Row, Col } from 'reactstrap';

const App = () => {

  const APP_ID = "4eaee232";
  const APP_KEY = "47b9d46ae49a059bdd6639bd92ef51c1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const content = [];
  const content2 = [];


  useEffect(() => {
    getRecipes()
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    //console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  
  recipes.map((recipe, i) => {
      if((i % 2 === 0)){
        content.push(
            <Recipes 
                key={i} 
                title={recipe.recipe.label} 
                calories={parseFloat(recipe.recipe.calories).toFixed(0)} 
                image={recipe.recipe.image} 
                ingredients={recipe.recipe.ingredients}
                diet={recipe.recipe.dietLabels}
                healthLabels={recipe.recipe.healthLabels}
            />
        )
      }else{
          content2.push(
              <Recipes 
                  key={i} 
                  title={recipe.recipe.label} 
                  calories={parseFloat(recipe.recipe.calories).toFixed(0)} 
                  image={recipe.recipe.image} 
                  ingredients={recipe.recipe.ingredients}
                  diet={recipe.recipe.dietLabels}
                  healthLabels={recipe.recipe.healthLabels}
              />
          );
      }
  });


  return (
    <Container className="App">
      <Row>
        <Col sm="12" className="form">
          <h1>Recipes</h1>
          <Form className="search-form" onSubmit={getSearch}>
          <InputGroup>
              <Input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search your recipes" />
              <Button className="search-button" type="submit" color="primary">Search</Button>
          </InputGroup>
          </Form>
        </Col>
        <Col sm="6">    
            {content}
        </Col>
        <Col sm="6">    
            {content2}
        </Col>
      </Row>
    </Container>
  );


};

export default App;