import React from "react";

export default function BatButton(props) {
  return (
    <div>
      {props.initval ? (
        <button type="button" className="switch" onClick={props.switchhandler}>
          go live
        </button>
      ) : (
        <>
          {props.something ? (
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
      )}
    </div>
  );
}
