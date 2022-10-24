import * as React from "react";
import "./Avis.css";

export default function Avis(props) {
  const ColoredStar = () => {
    return <img src="../../../img/stars.png" alt="etoiles colorées" />;
  };
  const EmptyStar = () => {
    return <img src="../../../img/star-empty.png" alt="etoiles grises" />;
  };

  return (
    <div className="stars">
      {Array.from({ length: parseInt(props.rating) }, (v, idx) => (
        <ColoredStar key={"colored-" + idx} />
      ))}
      {Array.from({ length: 5 - parseInt(props.rating) }, (v, idx) => (
        <EmptyStar key={"empty-" + idx} />
      ))}
    </div>
  );
}


