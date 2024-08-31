import React, { useState } from 'react';

function Incentives({ userPoints }) {
  const [incentivesList, setIncentivesList] = useState([]);

  const generateIncentives = () => {
    const incentives = Object.entries(userPoints).map(([name, points]) => {
      return { name, points };
    });
    setIncentivesList(incentives);
  };

  return (
    <div>
      <h2>Incentives</h2>
      <button onClick={generateIncentives}>Generate</button>
      <ul>
        {incentivesList.map((user, index) => (
          <li key={index}>
            {user.name}: {user.points} points
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Incentives;
