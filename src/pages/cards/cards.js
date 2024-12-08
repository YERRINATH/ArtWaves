import React from 'react';
import './cards.css'; // Import CSS for styling

const CardsSection = ({ cards }) => {
  return (
    <section>
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <a key={index} href={card.link} target="_blank" rel="noopener noreferrer" className="card">
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <h2>{card.title}</h2>
              <p className="card-description">{card.description}</p>
              
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
