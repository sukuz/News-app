import React from "react";
import Card from "./Card";

function Cards({ newsData, activeCategory }) {
  const cards = activeCategory.length
    ? newsData.filter((card) => card.source.name === activeCategory)
    : newsData;
  return (
    <div className="cards">
      {cards.length &&
        cards.map((eachNewsData) => (
          <Card eachNewsData={eachNewsData} key={eachNewsData.url} />
        ))}
    </div>
  );
}

export default Cards;
