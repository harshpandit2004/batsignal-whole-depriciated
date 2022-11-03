import React, { useState, useEffect } from "react";
import BatCR from "./Components/BatCR";
import BMinit from "./Components/BMinit";

function App() {
  const [something, setsomething] = useState();
  const [initval, setInitval] = useState(true);

  useEffect(() => {
    fetch("https://batsignal-backend.herokuapp.com/SignalValue", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsomething(data.stuff[0].signalValue);
      });
  }, []);

  const switchhandler = () => {
    fetch(
      "https://batsignal-backend.herokuapp.com/patchasignalvalue/6357e3e3d837d737e22d7ee4",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH"
      }
    ).then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    setInitval(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {initval ? <BMinit /> : <BatCR something={something} />}
        <button className="toggleswitch" onClick={switchhandler}>
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
