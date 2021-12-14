import React from "react";

const Button = (props) =>{
    console.log(props);
    return <button className={props.addClass}>{props.title}</button>
}

export default Button;