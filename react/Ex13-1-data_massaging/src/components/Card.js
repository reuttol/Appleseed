import React from "react";

const Card = (props) =>{

    return (
        <div>
            <h2>Name: {props.person.name}</h2>
            <p>Birthdat: {props.person.birthday}</p>
            <p>Favorite Food:</p>
            <p>Favorite Food - Meat: {props.person.favoriteFoods.meats.join(', ')}</p>
            <p>Favorite Food - Fish: {props.person.favoriteFoods.fsh.join(', ')}</p>
        </div>
    );
}

export default Card;