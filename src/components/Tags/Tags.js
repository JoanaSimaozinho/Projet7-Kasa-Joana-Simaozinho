import * as React from "react";
import "./Tags.css";

export default function Tags(props) {

  return (
    <div>
        <div className="mb-tags">
          <div className="tags">
            <div className="tag">{props.tags}</div>
          </div>
        </div>

    </div>
    
  );
}

