import React, { useState, useEffect } from "react";
import BatCR from "./Components/BatCR";
import BMinit from "./Components/BMinit";

function App() {
  const [something, setsomething] = useState();
  const [initval, setInitval] = useState(true);
  const [temp, setTemp] = useState(true);
  const [temp2, setTemp2] = useState(true);

  useEffect(() => {
    fetch("https://batsignal-backend.herokuapp.com/SignalValue", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsomething(data.stuff[0].signalValue);
      });
  }, [temp, temp2]);

  setTimeout(() => {
    setTemp2(!temp2);
  }, 15000);

  const switchhandler = () => {
    fetch(
      "https://batsignal-backend.herokuapp.com/patchasignalvalue/6357e3e3d837d737e22d7ee4",
      {
        method: "PATCH",
        mode: "cors",
        headers: { "Content-type": "text/plain" },
        data: JSON.stringify(),
      }
    )
      .then((res) => {
        console.log(res.status);
      })
      .then((data) => {
        console.log(data);
      });
    setTimeout(() => {
      setTemp(!temp);
    }, 1000);
    setInitval(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {initval ? <BMinit /> : <BatCR something={something} />}
        <button type="button" className="toggleswitch" onClick={switchhandler}>
          Switch
        </button>
      </header>
    </div>
  );
}

export default App;

/**
 *
 *
 */
