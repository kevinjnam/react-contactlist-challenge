import React, { useState } from 'react';

export default function ContactItem({
  firstName,
  lastName,
  phone,
  id,
  modifyFavorite
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    const newFavorite = { firstName, lastName, phone, id };
    modifyFavorite(newFavorite);
    setIsFavorite(!isFavorite);
  };

  const contactItemButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5px',
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    outline: 'none'
  };

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p>{phone}</p>
        <button onClick={handleClick} style={contactItemButtonStyle}>
          {isFavorite ? '-' : '+'}
        </button>
      </div>
    </div>
  );
}
