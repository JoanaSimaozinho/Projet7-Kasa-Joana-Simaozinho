import * as React from "react";
import Cards from "../../components/Cards/Cards";
import "./Home.css";

function Home() {
  return (
    <div className="body">
      <figure className="cards card">
        <figcaption>
          <p className="HomeParagraph">Chez vous, partout et ailleurs</p>
        </figcaption>
      </figure>

      <Cards />
    </div>
  );
}

export default Home;
