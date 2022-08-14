import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [Color, setColor] = useState("");
  const [Change, setChange] = useState();

  return (
    <div className="App">
      <div className="color-background" style={{ boxShadow: `10px 10px 50px 20px ${Color}`, backgroundColor: Color }}></div>
      <input type="text" placeholder="Type your color" onChange={(e) => setChange(e.target.value)} />
      <button onClick={() => setColor(Change)}>change</button>
    </div>
  );
};

export default App;