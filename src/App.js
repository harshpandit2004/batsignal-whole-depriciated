import React, { useState, useEffect } from "react";
import BatButton from "./Components/BatButton";
import Navbar from "./Components/Navbar";
import Signal from "./Components/Signal";

function App() {
  const [signalValue, setSignalValue] = useState();
  const [temp, setTemp] = useState(true);
  const [temp2, setTemp2] = useState(true);

  useEffect(() => {
    fetch("https://batsignal-backend-depriciated.onrender.com/SignalValue", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSignalValue(data.signalValue);
      });
  }, [temp, temp2]);

  const switchhandler = () => {
    fetch(
      "https://batsignal-backend-depriciated.onrender.com/patchasignalvalue",
      {
        method: "PATCH",
        mode: "cors",
        headers: { "Content-type": "text/plain" },
        data: JSON.stringify(),
      }
    )
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
    setTimeout(() => {
      setTemp(!temp);
    }, 400);
  };

  setTimeout(() => {
    setTemp2(!temp2);
  }, 10000);

  useEffect(() => {
    console.log("The signal value is: " + signalValue);
  }, [signalValue]);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Signal switchhandler={switchhandler} signalValue={signalValue} />
        <BatButton switchhandler={switchhandler} signalValue={signalValue} />
      </header>
    </div>
  );
}

export default App;
