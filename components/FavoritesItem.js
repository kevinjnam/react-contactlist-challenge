import React from 'react';

export default function FavoritesItem({ firstName, lastName, phone }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #eee'
      }}
    >
      <p>
        {firstName} <strong>{lastName}</strong>
      </p>
      <p>{phone}</p>
    </div>
  );
}
