// src/components/Player.js

import React from 'react';

const Player = ({ x, y, name, number, color, border, numberColor }) => {
  const circleRadius = 4;
  return (
    <>
      {/* Player circle */}
      <circle
        cx={x}
        cy={y}
        r={circleRadius}
        fill={`#${color}`}
        stroke={`#${border}`}
        strokeWidth="0.5"
      />
      
      {/* Player number */}
      <text
        x={x}
        y={y + 1}
        fill={`#${numberColor}`}
        fontSize="2"
        textAnchor="middle"
      >
        {number}
      </text>

      {/* Player name */}
      <text
        x={x}
        y={y + 7}
        fill="white"
        fontSize="2"
        textAnchor="middle"
      >
        {name}
      </text>
    </>
  );
};

export default Player;
