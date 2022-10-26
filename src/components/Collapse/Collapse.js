import * as React from "react";
import "./Collapse.css";
import { useState } from "react";

export default function Collapse(props) {
  const [visible, setVisibility] = useState(false);
  const contentType = typeof props.content;
  if (contentType === "object") {
    props.content.map((item, index) => console.log(item));
  }

  return (
    <div className="accordeon">
      <div className="caracteristiques" onClick={() => setVisibility(!visible)}>
        <p className="collapsName">{props.title}</p>
        <i
          className={`icon fas ${
            visible ? "fa-chevron-up" : "fa-chevron-down"
          }`}
        ></i>
      </div>
      {visible && (
        <div className="informations">
          {contentType === "string" && (
            <p className="paragraphCollapse">{props.content}</p>
          )}
          {contentType === "object" &&
            props.content.map((item, index) => <div key={index}>{item}</div>)}
        </div>
      )}
    </div>
  );
}