import React from "react";

function BatCR(props) {
  return (
    <div className="batDiv">
      {props.something ? (
        <>
          <img
            src={require("../images/Batman-Logo1.png")}
            className="BMon"
            alt="BMon"
          />
        </>
      ) : (
        <img
          src={require("../images/Batman-Logo.png")}
          className="BMoff"
          alt="BMoff"
        />
      )}
    </div>
  );
}

export default BatCR;
