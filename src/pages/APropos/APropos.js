import * as React from "react";
import { Banner, Collapse } from "../../components/index";
import "./APropos.css";

function APropos() {
  return (
    <div className="body">
      <Banner />
      <Collapse />
      <Collapse />
      <Collapse />
      <Collapse />
    </div>
  );
}

export default APropos;
