// src/App.js

import React from 'react';
import FootballPitch from './football.pitch';

const TeamPitch = (x, y) => {
    const teamA = x.manCityData
    const teamB = x.realMadridData
  return (
    <div className="App">
      <h1>{teamA.team.name} vs {teamB.team.name}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <img src={teamA.team.logo} alt={teamA.team.name} width="60" />
        <img src={teamB.team.logo} alt={teamB.team.name} width="60" />
      </div>
      
      {/* Passing data for both teams */}
      <FootballPitch
        homeTeam={teamA.team}
        homeFormation={teamA.formation}
        homeStartXI={teamA.startXI}
        awayTeam={teamB.team}
        awayFormation={teamB.formation}
        awayStartXI={teamB.startXI}
      />
    </div>
  );
};

export default TeamPitch;
