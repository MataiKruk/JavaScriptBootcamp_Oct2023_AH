import "./two-truths-MK.css";
import { useState } from "react";

function TwoTruthsMK() {
  const truthsAndLieArrMK = [
    { statement: "I have gone skydiving before", isTruth: true },
    { statement: "I have broken my arm", isTruth: false },
    { statement: "Sub sandwiches are my favorite food", isTruth: true },
  ];

  const [truthsAndLieMK, setTruthsAndLie] = useState(truthsAndLieArrMK);
  const [revealed, setRevealed] = useState(false);

  const toggleReveal = () => {
    revealed ? setRevealed(false) : setRevealed(true)
  };

  return (
    <div className="main">
      <header>My Name is Matai and here are my two truths and a lie</header>
      <ul>
        {truthsAndLieMK.map((truthOrLie, index) => (
          <li key={index}>
            {truthOrLie.statement + " "}
            <span
              style={{
                color: truthOrLie.isTruth ? "green" : "red",
                display: revealed ? "inline" : "none",
              }}
            >
              {truthOrLie.isTruth ? "Truth" : "Lie"}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={toggleReveal}>Reveal</button>
    </div>
  );
}

export default TwoTruthsMK;
