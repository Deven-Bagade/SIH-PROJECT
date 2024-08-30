import React from 'react';

const Leaderboard = () => {
  // Define the 2D array of objects with name and score
  const dataArray = [
    [
      { name: 'Deven', score: 10 }, 
      { name: 'Amit', score: 20 }, 
      { name: 'John', score: 30 }, 
      { name: 'Deven', score: 10 },
      { name: 'Sara', score: 15 }, 
      { name: 'Lily', score: 25 }, 
      { name: 'David', score: 35 },
      { name: 'Emily', score: 5 }, 
      { name: 'Chris', score: 10 }, 
      { name: 'Alex', score: 15 }
    ]
  ];

  // Function to render the table rows
  const renderTableRows = () => {
    let serialNo = 1;

    return dataArray.map((row, rowIndex) =>
      row.map((item, itemIndex) => (
        <tr key={`row-${rowIndex}-item-${itemIndex}`}>
          <td>{serialNo++}</td>
          <td>{item.name}</td>
          <td>{item.score}</td>
        </tr>
      ))
    );
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Ranking based on Carbon Footprint Points</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#cdd5c1', color: '#1d3e2f', borderStyle:'solid' }}>
        <thead style={{ backgroundColor: '#1d3e2f', color:'#cdd5c1',  borderStyle:'solid' }}>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left'}}>Serial No</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left'}}>Name</th>
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
