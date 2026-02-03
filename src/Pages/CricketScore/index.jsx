import React, { useState } from "react";

const CricketScore = () => {
  const [balls, setBalls] = useState([]); // Stores: [{ ball: 1, runs: 4 }, ...]
  const [currentBall, setCurrentBall] = useState(1);
  const [total, setTotal] = useState(0);

  const updateScore = () => {
    if (currentBall > 6) return;

    // Generate random runs for example: 0, 1, 2, 3, 4, 6
    const runs = [0, 1, 2, 3, 4, 6][Math.floor(Math.random() * 6)];

    const newBallData = { ball: currentBall, runs };

    setBalls((prev) => [...prev, newBallData]);

    setTotal((prev) => prev + runs);

    setCurrentBall(currentBall + 1);
  };

  return (
    <div style={{ width: "300px", margin: "30px auto", textAlign: "center" }}>
      <h3>Cricket Score Board</h3>

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>Ball Number</th>
            <th>Runs</th>
          </tr>
        </thead>

        <tbody>
          {balls.map((item) => (
            <tr key={item.ball}>
              <td>{item.ball}</td>
              <td>{item.runs}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      {currentBall <= 6 ? (
        <button onClick={updateScore}>Update Score (Ball {currentBall})</button>
      ) : (
        <h3>Total Score: {total}</h3>
      )}
    </div>
  );
};

export default CricketScore;
