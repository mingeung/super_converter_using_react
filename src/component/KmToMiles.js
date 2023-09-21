import React, { useState } from "react";
import "./KmToMiles.css";

function KmToMiles() {
  const [amount, setAmount] = useState("");
  const [inverted, setInverted] = useState(false);

  const reset = () => {
    setAmount(0);
  };

  const onFlip = () => {
    reset();
    setInverted((current) => !current);
  };

  const onChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div id="box">
      <h2>Km & Miles</h2>
      <div className="calcul">
        <label>Km</label>
        <input
          type="number"
          value={inverted ? Math.round(amount * 1.60934) : amount}
          id="km"
          placeholder="km"
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div className="calcul">
        <label>Miles</label>
        <input
          type="number"
          value={inverted ? amount : Math.round(amount * 0.621371)}
          id="miles"
          placeholder="miles"
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

export default KmToMiles;
