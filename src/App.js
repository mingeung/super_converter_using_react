import "./App.css";
import React, { useState } from "react";
import MinutesToHours from "./component/MinutesToHours";
import KmToMiles from "./component/KmToMiles";

//컴포넌트 선택 페이지 만들기
function App() {
  const [index, setIndex] = useState("xx");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };

  return (
    <div>
      <h1 id="mainHead">Super Converter</h1>
      {/* onClick이 아니라 onChange로 해야 한다. */}
      <select value={index} onChange={onSelect} className="select">
        <option value={"xx"}>Select your units</option>
        <option value={"0"}>Minutes & Hours</option>
        <option value={"1"}>Km & Miles</option>
      </select>
      <br />
      <div id="index">
        {index === "xx" ? "select your units" : null}
        {index === "0" ? <MinutesToHours /> : null}
        {index === "1" ? <KmToMiles /> : null}
      </div>
    </div>
  );
}

export default App;
