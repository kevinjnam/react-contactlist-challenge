import React from 'react';

export default function Divider({ category, children }) {
  return (
    <div>
      <h3
        style={{
          display: 'flex',
          fontSize: '1.5rem',
          justifyContent: 'space-between',
          borderBottom: '1px solid #eee'
        }}
      >
        {category}
      </h3>
      {children}
    </div>
  );
}
