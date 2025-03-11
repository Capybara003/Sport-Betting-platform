import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box'; // For block layout

function createData(name, home, away, total, percentage) {
  return { name, home, away, total, percentage };
}

export default function StatsTable({ stats }) {
  const teamA = stats[0].teamsStats.response;
  const teamB = stats[1].teamsStats.response;

  const createTeamRows = (team) => [
    createData("Played", `${team.fixtures.played.home}`, `${team.fixtures.played.away}`, `${team.fixtures.played.total}`, ""),
    createData("Win", `${team.fixtures.wins.home}`, `${team.fixtures.wins.away}`, `${team.fixtures.wins.total}`, ""),
    createData("Draws", `${team.fixtures.draws.home}`, `${team.fixtures.draws.away}`, `${team.fixtures.draws.total}`, ""),
    createData("Loses", `${team.fixtures.loses.home}`, `${team.fixtures.loses.away}`, `${team.fixtures.loses.total}`, ""),
    createData("Clean Sheet", `${team.clean_sheet.home}`, `${team.clean_sheet.away}`, `${team.clean_sheet.total}`, ""),
    createData("Failed To Score", `${team.failed_to_score.home}`, `${team.failed_to_score.away}`, `${team.failed_to_score.total}`, ""),
    createData("Goals Against Average", `${team.goals.against.average.home}%`, `${team.goals.against.average.away}%`, `${team.goals.against.average.total}%`, ""),
    createData("Goals Against Total", `${team.goals.against.total.home}`, `${team.goals.against.total.away}`, `${team.goals.against.total.total}`, ""),
    createData("Goals For Average", `${team.goals.for.average.home}%`, `${team.goals.for.average.away}%`, `${team.goals.for.average.total}%`, ""),
    createData("Goals For Total", `${team.goals.for.total.home}`, `${team.goals.for.total.away}`, `${team.goals.for.total.total}`, ""),
  ];

  const rowsA = createTeamRows(teamA);
  const rowsB = createTeamRows(teamB);

  const columns = (team) => [
    {
      id: 'name',
      label: (
        <div className='flex'>
          <Avatar
            alt="Team Logo"
            src={team.team.logo}
            sx={{ width: 28, height: 28, bgcolor: "#fff", marginRight:"5px"}}
          />
          <Typography>{team.team.name}</Typography>
        </div>
      ),
      minWidth: 170
    },
    { id: 'home', label: 'Home', minWidth: 100 },
    { id: 'away', label: 'Away', minWidth: 100 },
    { id: 'total', label: 'Total', minWidth: 100 },
  ];

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Team A Table */}
      <Paper sx={{ width: '100%', maxWidth: '900px', overflow: 'hidden', mb: 4, backgroundColor: '#330034' }}>
        <TableContainer sx={{ maxHeight: 340 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns(teamA).map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, color: '#fff', backgroundColor:"#330034", fontSize:"15px"}}  // White text for better visibility
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsA.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns(teamA).map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell 
                        key={column.id} 
                        align={column.align} 
                        sx={{ opacity: 0.2, color: '#fff' }}  // Reduced opacity & white text
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Team B Table */}
      <Paper sx={{ width: '100%', maxWidth: '900px', overflow: 'hidden', backgroundColor: '#330034' }}>
        <TableContainer sx={{ maxHeight: 340 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns(teamB).map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, color: '#fff', backgroundColor:"#330034", fontSize:"15px"}}  // White text for better visibility
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsB.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns(teamB).map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell 
                        key={column.id} 
                        align={column.align} 
                        sx={{ opacity: 0.2, color: '#fff' }}  // Reduced opacity & white text
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
