import React from "react";

export default function BMinitial(props) {
  return (
      <button className="batDiv" onClick={props.switchhandler}>
        <img
          src={require("../images/Batman-Logo.png")}
          className="BMinit"
          alt="BMinit"
        />
      </button>
  );
}
