import React from "react";

export default function Card({ eachNewsData }) {
  const trimmedTitle = eachNewsData.title.substring(0, 40);
  const trimmedDescription = eachNewsData.description.substring(0, 70);

  return (
    <div className="eachCard">
      <div
        style={{
          height: "120px",
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={eachNewsData.urlToImage}
          alt="newsimg"
        />
      </div>
      <div>
        <b>{trimmedTitle}...</b>
      </div>
      <div style={{ height: "20px" }}>{trimmedDescription}...</div>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          marginTop: "50px",
          height: "40px",
        }}
      >
        <div style={{ color: "darkred", fontSize: "x-small" }}>
          <b>{eachNewsData.author}</b>
        </div>
        <label style={{ fontSize: "x-small", marginRight: "30px" }}>
          {eachNewsData.publishedAt}
        </label>
        <a href={eachNewsData.url} style={{ marginLeft: "0px" }}>
          more...
        </a>
      </div>
    </div>
  );
}
