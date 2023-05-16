import React, { useState, useEffect } from "react";
import BatButton from "./Components/BatButton";
import Navbar from "./Components/Navbar";
import Signal from "./Components/Signal";

function App() {
  const [something, setsomething] = useState();
  const [initval, setInitval] = useState(true);
  const [temp, setTemp] = useState(true);
  const [temp2, setTemp2] = useState(true);

  useEffect(() => {
    //if temp = false, no need to fetch (to be added functionality)
    fetch("https://clever-battledress-dove.cyclic.app/SignalValue", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsomething(data.stuff[0].signalValue);
      });
  }, [temp, temp2]);

  const switchhandler = () => {
    fetch(
      "https://clever-battledress-dove.cyclic.app/patchasignalvalue/6357e3e3d837d737e22d7ee4",
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
    setInitval(false);
    setTimeout(() => {
      setTemp(!temp);
    }, 400);
  };

  setTimeout(() => {
    setTemp2(!temp2);
  }, 10000);
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Signal
          switchhandler={switchhandler}
          initval={initval}
          something={something}
        />
        <BatButton
          switchhandler={switchhandler}
          initval={initval}
          something={something}
        />
      </header>
    </div>
  );
}

export default App;
