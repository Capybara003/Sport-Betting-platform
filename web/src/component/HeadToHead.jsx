import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function H2HTable({ h2h }) {
  // Columns for the table
  const columns = [
    { id: "team", label: "Team", minWidth: 200 },
    { id: "date", label: "Date", minWidth: 100 },
    { id: "referee", label: "Referee", minWidth: 400 },
    { id: "venue", label: "Venue", minWidth: 300 },
    { id: "goals", label: "Goals", minWidth: 100 },
    { id: "league", label: "League", minWidth: 150 },
    { id: "score", label: "Score", minWidth: 100 },
    { id: "season", label: "Season", minWidth: 100 },
  ];

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Function to create rows for both home and away teams
  const createData = (team, matchData) => {
    return {
      team: {
        logo: team.logo,
        name: team.name,
      },
      date: formatDate(matchData.fixture.date),
      referee: matchData.fixture.referee,
      venue: matchData.fixture.venue.name,
      goals: team === matchData.teams.home ? matchData.goals.home : matchData.goals.away,
      league: matchData.league.name,
      score: `${matchData.score.fulltime.home} - ${matchData.score.fulltime.away}`,
      season: matchData.league.season,
    };
  };

  // Create rows for both teams (home and away) in the array
  const rows = h2h?.response
    .map((match) => [
      createData(match.teams.home, match),
      createData(match.teams.away, match),
    ])
    .flat(); // Flatten to make it a single array

  // Sort rows by season in ascending order
  const sortedRows = rows?.sort((a, b) => a.season - b.season);

  return (
    <Box
      sx={{
        width: "100%",
        height: "150%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: "900px",
          overflow: "hidden",
          mb: 4,
          backgroundColor: "#330034",
        }}
      >
        <TableContainer sx={{ maxHeight: 340 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{
                      minWidth: column.minWidth,
                      color: "#fff",
                      backgroundColor: "#330034",
                      fontSize: "15px",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt="Team Logo"
                      src={row.team.logo}
                      sx={{
                        width: 28,
                        height: 28,
                        bgcolor: "#fff",
                        marginRight: "5px",
                      }}
                    />
                    <Typography style={{ color: "#fff" }}>{row.team.name}</Typography>
                  </TableCell>
                  {columns.slice(1).map((column) => (
                    <TableCell key={column.id} style={{ color: "#fff" }}>
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
