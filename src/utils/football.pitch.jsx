import React from 'react';
import Player from './player';

const FootballPitch = ({ homeTeam, homeFormation, homeStartXI, awayTeam, awayFormation, awayStartXI }) => {
  // Ensure both formations are valid strings
  if (typeof homeFormation !== 'string' || typeof awayFormation !== 'string') {
    console.error("Formation must be a string in the format '4-3-3' for both teams");
    return null; // Handle the error gracefully
  }

  // Parse the formation type (e.g., "4-3-3")
  const [homeDefenders, homeMidfielders, homeForwards] = homeFormation.split("-");
  const [awayDefenders, awayMidfielders, awayForwards] = awayFormation.split("-");

  // Grid to position mapping (Example: "1:1", "4:2")
  const gridToPosition = {
    "1:1": { x: 50, y: 95 },  // Goalkeeper
    "2:1": { x: 10, y: 75 },  // Left Defender
    "2:2": { x: 30, y: 75 },
    "2:3": { x: 70, y: 75 },
    "2:4": { x: 90, y: 75 },  // Right Defender
    "3:1": { x: 10, y: 50 },  // Left Midfielder
    "3:2": { x: 50, y: 50 },  // Central Midfielder
    "3:3": { x: 90, y: 50 },  // Right Midfielder
    "4:1": { x: 10, y: 25 },  // Left Forward
    "4:2": { x: 50, y: 25 },  // Central Forward
    "4:3": { x: 90, y: 25 },  // Right Forward
  };

  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ border: '1px solid black' }}>
      {/* Pitch background */}
      <rect x="0" y="0" width="100" height="100" fill="green" />
      
      {/* Midfield line */}
      <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5" />

      {/* Penalty areas */}
      <rect x="0" y="30" width="15" height="40" fill="none" stroke="white" strokeWidth="0.5" />
      <rect x="85" y="30" width="15" height="40" fill="none" stroke="white" strokeWidth="0.5" />

      {/* Center circle */}
      <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="0.5" fill="none" />

      {/* Render home team starting XI */}
      {homeStartXI.map((playerInfo, idx) => {
        const { player } = playerInfo;
        const position = gridToPosition[player.grid];
        
        if (!position) return null; // Skip if no position defined
        
        return (
          <Player
            key={idx}
            x={position.x}
            y={position.y}
            name={player.name}
            number={player.number}
            color={homeTeam.colors.player.primary}
            border={homeTeam.colors.player.border}
            numberColor={homeTeam.colors.player.number}
          />
        );
      })}

      {/* Render away team starting XI */}
      {awayStartXI.map((playerInfo, idx) => {
        const { player } = playerInfo;
        const position = gridToPosition[player.grid];
        
        if (!position) return null; // Skip if no position defined
        
        // Adjust y-position to reflect away team playing on the opposite half
        const adjustedPosition = { x: position.x, y: 100 - position.y };
        
        return (
          <Player
            key={idx}
            x={adjustedPosition.x}
            y={adjustedPosition.y}
            name={player.name}
            number={player.number}
            color={awayTeam.colors.player.primary}
            border={awayTeam.colors.player.border}
            numberColor={awayTeam.colors.player.number}
          />
        );
      })}
    </svg>
  );
};

export default FootballPitch;
