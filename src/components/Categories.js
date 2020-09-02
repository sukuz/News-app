import React from "react";

export default function Categories({ activeCategory, handleOnClickCategory }) {
  const categoryArray = [
    { id: 1, name: "Politico" },
    { id: 2, name: "New York Times" },
    { id: 3, name: "CNN" },
    { id: 4, name: "CNBC" },
    { id: 5, name: "TechCrunch" },
  ];

  const handleOnclick = (name) => {
    if (activeCategory === name) {
      return handleOnClickCategory("");
    }
    return handleOnClickCategory(name);
  };

  return (
    <div className="categories">
      {categoryArray.map((eachCategory) => (
        <button
          className={
            activeCategory === eachCategory.name
              ? "activeCategory"
              : "category-buttons"
          }
          onClick={() => handleOnclick(eachCategory.name)}
          key={eachCategory.id}
        >
          {eachCategory.name}
        </button>
      ))}
    </div>
  );
}
