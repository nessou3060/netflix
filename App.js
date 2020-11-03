import React from "react";
import "./App.css";

import MoviesList from "./assets/movies.json";
import Logo from "./assets/logo.png";
import Section from "./composant/Section";

const App = () => {
  return (
    <div className="movies">
      <img className="logo " src={Logo} />
      {MoviesList.map((element, i) => {
        return (
          <Section
            key={i}
            category={element.category}
            images={element.images}
          />
        );
      })}
    </div>
  );
};
export default App;
