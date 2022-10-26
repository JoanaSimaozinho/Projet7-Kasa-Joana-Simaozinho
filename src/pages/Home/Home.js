import * as React from "react";
import { Banner, Cards } from "../../components/index";
import "./Home.css";


export default function Home(props) {

  return (
    <div className="body">
      <Banner content="Chez vous, partout et ailleurs" />
      <Cards />
    </div>
  );
}

