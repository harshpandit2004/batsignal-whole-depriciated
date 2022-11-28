import React from 'react'
import BMinitial from "./BMinitial";
import BatConditionalRendering from "./BatConditionalRendering";

export default function Signal(props) {
  return (
    <div>
      {props.initval ? <BMinitial switchhandler = {props.switchhandler}/> : <BatConditionalRendering switchhandler={props.switchhandler} something={props.something} />}
    </div>
  )
}
