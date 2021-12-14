import React from "react";

const Card = (props) =>{
    return (
        <div className="card-container">
            <img src={props.image} alt="" className="img"/>
            <div>{props.title}</div>
            <div>{props.description}</div>
            <div className="links"> 
                <a href={props.link1}>{props.link1Text}</a>
                <a href={props.link2}>{props.link2Text}</a>
            </div>
        </div>
    )
}

export default Card;