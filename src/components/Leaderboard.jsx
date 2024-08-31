import React from 'react';

const Leaderboard = ({ userPoints }) => {
  // Ensure userPoints is an object and not empty
  if (!userPoints || typeof userPoints !== 'object' || Object.keys(userPoints).length === 0) {
    return <div>No data available</div>;
  }

  // Convert userPoints object to an array of objects with name and score
  const dataArray = Object.keys(userPoints).map(name => ({
    name,
    score: userPoints[name],
  }));

  // Sort the dataArray by score in descending order
  dataArray.sort((a, b) => b.score - a.score);

  // Function to render the table rows
  const renderTableRows = () => {
    let serialNo = 1;

    return dataArray.map((item, index) => (
      <tr key={index}>
        <td>{serialNo++}</td>
        <td>{item.name}</td>
        <td>{item.score}</td>
      </tr>
    ));
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Ranking based on Carbon Footprint Points</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#cdd5c1', color: '#1d3e2f', border: '1px solid #ddd' }}>
        <thead style={{ backgroundColor: '#1d3e2f', color: '#cdd5c1' }}>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Serial No</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
