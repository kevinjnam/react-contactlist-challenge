import React from 'react';
import { useSelector } from 'react-redux';
import { modifyFavorite } from '../actions/contacts';
import { getFavorites } from '../selectors/contacts';
import FavoritesItem from './FavoritesItem';

export default function FavoriteList() {
  const favorites = useSelector(getFavorites);

  return (
    <div style={{ width: 400 }}>
      {favorites.length < 1 ? (
        <h4>You currently have no favorites.</h4>
      ) : (
        favorites.map(favorite => (
          <FavoritesItem
            key={favorite.id}
            {...favorite}
            modifyFavorite={favorite => modifyFavorite(favorite)}
          />
        ))
      )}
    </div>
  );
}
