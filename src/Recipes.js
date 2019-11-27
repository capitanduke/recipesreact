import React from 'react';
import './App.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';



const Recipes = ({ title, calories, image, ingredients, diet, healthLabels }) => {
    //console.log({calories});
    return(
        <div>
            

        <Card className="cards">
            <CardImg top width="100%" src={image} alt={ title } />
            <CardBody>
                <CardTitle><h1>{ title }</h1></CardTitle>
                <CardSubtitle><b>Calories:</b> { calories }</CardSubtitle>
                <CardSubtitle><b>Diet facts:</b> { diet }</CardSubtitle>
                <CardSubtitle><b>Health facts:</b> { healthLabels }</CardSubtitle>
                <CardText>
                <p><b>Ingredients:</b></p>
                    { ingredients.map(ingredient => (
                        <li>{ ingredient.text }</li>
                    )) }
                </CardText>
            </CardBody>
        </Card>
            
        </div>
    )
};


export default Recipes;