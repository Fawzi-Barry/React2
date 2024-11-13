// CardList.js
import React from 'react';
import Card from './Card';

function CardList({ data }) {
  return (
    <div className="card-list">
      {data.map((cardData, index) => (
        <Card 
          key={index}
          image={cardData.image}
          title={cardData.title}
          description={cardData.description}
        />
      ))}
    </div>
  );
}

export default CardList;
