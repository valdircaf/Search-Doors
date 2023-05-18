import React from 'react';
import '../styles/components/cards.scss';

// eslint-disable-next-line react/prop-types
export default function Cards({ svg, text1, text2 }) {
  return (
    <div className="card">
      {svg}
      <h3>{text1}</h3>
      <h4>{text2}</h4>
    </div>
  );
}
