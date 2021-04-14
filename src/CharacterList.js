import React from 'react';
import Card from './Card';

export default function CharacterList({characters, clickAction}){

    const displayCharacters = () => characters.map(character => {
        return <Card 
            key={character.id}
            setFavorite={characters.setFavorite} 
            character={character}
            clickAction={clickAction}
        /> 
    })
    return (
        <ul className="character-list">
            {displayCharacters()} 
        </ul> // have to invoke displayCharacters with ()
    )
}