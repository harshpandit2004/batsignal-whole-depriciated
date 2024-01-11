import React, { useState, useEffect } from "react";
import BatButton from "./Components/BatButton";
import Navbar from "./Components/Navbar";
import Signal from "./Components/Signal";
import { io } from 'socket.io-client';

function App() {
  const [signalValue, setsignalValue] = useState();
  const socket = io('http://3.110.173.218:80');

  socket.on('connect', () => {
    console.log("hello world, connected via: ", socket.id)
  });
  socket.on('get-signal-value', (signalValue) => {
    setsignalValue(signalValue);
  })

  useEffect(() => {
    console.log("signalvalue updated: ", signalValue)
  }, [signalValue])

  const switchhandler = () => {
    socket.emit('update-signal-value')
    socket.on('get-signal-value', (signalValue) => {
      setsignalValue(signalValue);
    })
  };

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Signal
          switchhandler={switchhandler}
          signalValue={signalValue}
        />
        <BatButton
          switchhandler={switchhandler}
          signalValue={signalValue}
        />
      </header>
    </div>
  );
}

export default App;
