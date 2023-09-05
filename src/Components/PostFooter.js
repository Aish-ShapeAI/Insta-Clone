import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane as faPaperPlaneTop } from "@fortawesome/free-solid-svg-icons";

  export function PostFooter() {
  const [heartCount, setHeartCount] = useState(0);
  const [heartClicked, setHeartClicked] = useState(false);

  const handleHeartClick = () => {
    if (!heartClicked) {
      setHeartCount(1);
      setHeartClicked(true);
    }
  };


  return (
    <div className="footer">
      {heartClicked ? (
        <span className="material-symbols-outlined">
         <FontAwesomeIcon icon={faSolidHeart}  style={{ color: "#ff0000" ,fontSize: "19px", width: "24px", height: "24px" }} /> 
       </span>): (
        <span className="material-symbols-outlined" onClick={handleHeartClick}>
         <FontAwesomeIcon icon={faRegularHeart}  style={{ fontSize: "19px", width: "24px", height: "24px" }} />
        </span>
      )}
      <span className="material-symbols-outlined" style={{ fontSize: "19px", width: "24px", height: "24px" }} > 
      <FontAwesomeIcon icon={faPaperPlaneTop} /> </span>
      <div className="heart-count" style={{marginLeft: "10px"}}>{heartCount}</div>
    </div>
  );
}

export default PostFooter;
