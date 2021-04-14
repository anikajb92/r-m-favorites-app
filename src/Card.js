import React from 'react'

export default function Card({character, clickAction}){
  const {name, image} = character; // still destructured, adding extra layer so we can access the name and image 

  const handleClick = (event) => {
    clickAction(character)
  }


    return (
        <li onClick={handleClick}>
          <h2>{name}</h2>
          <img src={image} alt="character-image"/>
        </li>
    )
}