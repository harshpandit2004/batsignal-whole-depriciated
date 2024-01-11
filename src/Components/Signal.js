import React from 'react'
import BMinitial from "./BMinitial";
import BatConditionalRendering from "./BatConditionalRendering";

export default function Signal(props) {
  return (
    <div>
      <BatConditionalRendering switchhandler={props.switchhandler} signalValue={props.signalValue} />
    </div>
  )
}
