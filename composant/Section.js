import React from "react";

const Section = ({ category, images }) => {
  return (
    <div className="global">
      <p className="title">{category}</p>
      <div className="movies-list">
        {images.map((img, i) => {
          return <img key={i} alt="movie" src={img} />;
        })}
      </div>
    </div>
  );
};

export default Section;
