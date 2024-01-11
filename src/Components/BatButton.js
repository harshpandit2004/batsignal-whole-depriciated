import React from "react";

export default function BatButton(props) {
  return (
    <div>
      <>
        {props.signalValue ? (
          <button
            type="button"
            className="switchon"
            onClick={props.switchhandler}
          >
            Signal - On
          </button>
        ) : (
          <button
            type="button"
            className="switchoff"
            onClick={props.switchhandler}
          >
            Signal - Off
          </button>
        )}
      </>
    </div>
  );
}
