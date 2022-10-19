import * as React from "react";
import "./Tags.css";

export default function Tags(props) {
  const annonces = require('../../annonces.json')

  return (
    <div>
      {annonces.map((annonce) =>
        <div className="mb-tags">
          <div className="tags">
            <div key={annonce.id} className="tag">{annonce.tags}</div>
          </div>
        </div>
      )}
    </div>
    
  );
}

