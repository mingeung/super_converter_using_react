import React, { useState } from "react";
import "./MinutesToHours.css";

function MinutesToHours() {
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
      <div>
        <h2>Minutes & Hours</h2>
        <div className="calcul">
          <label>Minutes</label>
          <input
            type="number"
            value={inverted ? Math.round(amount * 60) : amount}
            id="minutes"
            placeholder="minutes"
            onChange={onChange}
            disabled={inverted}
          />
        </div>
        <div className="calcul">
          <label>Hours</label>
          <input
            type="number"
            value={inverted ? amount : Math.round(amount / 60)}
            id="hours"
            placeholder="hours"
            onChange={onChange}
            disabled={!inverted}
          />
        </div>
      </div>
      <div id="button">
        <button onClick={reset}>reset</button>
        <button onClick={onFlip}>Flip</button>
      </div>
    </div>
  );
}

export default MinutesToHours;
