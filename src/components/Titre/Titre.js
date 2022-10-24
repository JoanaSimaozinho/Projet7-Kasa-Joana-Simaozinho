import * as React from "react";
import "./Titre.css";

export default function Titre(props) {
  return (
    <div>
      <div className="mb-title">
        <div className="titre">{props.title}</div>
      </div>
    </div>
  );
}

