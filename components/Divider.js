import React from 'react';

export default function Divider({ category, children }) {
  return (
    <div>
      <h3>{category}</h3>
      {children}
    </div>
  );
}
