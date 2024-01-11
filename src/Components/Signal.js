import React from 'react'
import BatConditionalRendering from "./BatConditionalRendering";

export default function Signal(props) {
  return (
    <div>
      <BatConditionalRendering switchhandler={props.switchhandler} signalValue={props.signalValue} />
    </div>
  )
}
