import React from 'react';
import Card from './Card';

export default function Favorites({favorites, clickAction}){

    const renderFavorites = () => favorites.map(favorite => {
        return <Card key={favorite.id} character={favorite} clickAction={clickAction}/>
    })
    return (
        <ul className="favorites-list">
            {renderFavorites()}
        </ul>
    )
}