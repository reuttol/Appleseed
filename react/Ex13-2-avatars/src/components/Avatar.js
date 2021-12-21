import React from 'react'
import './app.css'

 const Avatar = (props) =>{
        return (
            <div className='avatar'>
                <h4>{props.avatar.name}</h4>
                <img src={props.avatar.image} alt='avatar'/>          
            </div>
        )
}

export default Avatar;