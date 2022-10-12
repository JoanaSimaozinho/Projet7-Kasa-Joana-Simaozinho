import * as React from "react";
import { Banner, Cards } from "../../components/index";
import "./Home.css";

function Home() {
  return (
    <div className="body">
      <Banner />
      <Cards />
    </div>
  );
}

export default Home;
