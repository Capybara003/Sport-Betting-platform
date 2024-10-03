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
  console.log("headtohead", h2h.response[0]);
  const columns = [
    { id: "team", label: "Team", minWidth: 200 },
    { id: "date", label: "Date", minWidth: 100 },
    { id: "status", label: "Status", minWidth: 100 },
    { id: "referee", label: "Referee", minWidth: 200 },
    { id: "venue", label: "Venue", minWidth: 100 },
    { id: "goals", label: "Goals", minWidth: 100 },
    { id: "league", label: "League", minWidth: 100 },
    { id: "score", label: "Score", minWidth: 100 },
    { id: "season", label: "Season", minWidth: 100 },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const createData = (team, matchData) => {
    return {
      team: {
        logo: team.logo,
        name: team.name,
      },
      date: formatDate(matchData.fixture.date),
      status: matchData.fixture.status.long,
      referee: matchData.fixture.referee,
      venue: matchData.fixture.venue.name,
      goals: team === matchData.teams.home ? matchData.goals.home : matchData.goals.away,
      league: matchData.league.name,
      score: `${matchData.score.fulltime.home} - ${matchData.score.fulltime.away}`,
      season: matchData.league.season,
    };
  };

  const rows = [
    createData(h2h.response[0].teams.home, h2h.response[0]),
    createData(h2h.response[0].teams.away, h2h.response[0]),
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "100%",
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
                    align={column.align}
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
              {rows.map((row, index) => (
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
                    <TableCell key={column.id} align={column.align} style={{ color: "#fff" }}>
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