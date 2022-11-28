import React from "react";

function BatConditionalRendering(props) {
  return (
    <>
      {props.something ? (
        <button className="batDiv" onClick={props.switchhandler}>
          <img
            src={require("../images/Batman-Logo1.png")}
            className="BMon"
            alt="BMon"
          />
        </button>
      ) : (
        <button className="batDiv" onClick={props.switchhandler}>
          <img
            src={require("../images/Batman-Logo.png")}
            className="BMoff"
            alt="BMoff"
          />
        </button>
      )}
    </>
  );
}

export default BatConditionalRendering;
