import React, { useEffect, useState } from "react";
import "./style.css";
import Categories from "./components/Categories";
import Cards from "./components/cards";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=bc9dd0399e954199984995fdbda6d0e1"
    )
      .then((res) => res.json())
      .then((result) => setNewsData(result.articles));
  }, []);

  const handleOnClickCategory = (categorySelected) =>
    setActiveCategory(categorySelected);

  return (
    <>
      <div className="app-container">
        <nav>
          <Categories
            handleOnClickCategory={handleOnClickCategory}
            activeCategory={activeCategory}
          />
        </nav>
        <main>
          <Cards newsData={newsData} activeCategory={activeCategory} />
        </main>
      </div>
    </>
  );
}

export default App;
