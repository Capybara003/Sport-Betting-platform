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
import Box from "@mui/material/Box"; // For block layout

export default function LineUpTable({ lineup }) {
  if(!lineup.response.length < 0) {
    return (
      <h1>No Line up</h1>
    )
  }
  const teamA = lineup?.response[0];
  const teamB = lineup?.response[1];

  const columns = (team) => [
    {
      id: "name",
      label: (
        <div className="flex">
          <Avatar
            alt="Team Logo"
            src={team?.team.logo}
            sx={{ width: 28, height: 28, bgcolor: "#fff", marginRight: "5px" }}
          />
          <Typography>{team?.team.name}</Typography>
        </div>
      ),
      minWidth: 170,
    },
    { id: "number", label: "Number", minWidth: 100 },
    { id: "Position", label: "Position", minWidth: 100 },
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
      {/* Team A Table */}
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
                {columns(teamA).map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      color: "#fff",
                      backgroundColor: "#330034",
                      fontSize: "15px",
                    }} // White text for better visibility
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell
                sx={{ opacity: 1, color: "#1976D2" }} // Reduced opacity & white text
              >
                StartXI
              </TableCell>
              {teamA?.startXI.map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.player.id}
                >
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.name}
                  </TableCell>
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.number}
                  </TableCell>

                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.pos}
                  </TableCell>
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.number}
                  </TableCell>
                </TableRow>
              ))}

              <TableCell
                sx={{ opacity: 1, color: "#1976D2" }} // Reduced opacity & white text
              >
                Subtitutes
              </TableCell>
              {teamA?.substitutes.map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.player.id}
                >
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.name}
                  </TableCell>
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.number}
                  </TableCell>

                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.pos}
                  </TableCell>
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.number}
                  </TableCell>
                </TableRow>
              ))}

              <TableCell
                sx={{ opacity: 1, color: "#1976D2" }} // Reduced opacity & white text
              >
                Coach
              </TableCell>

              <TableCell
                sx={{ opacity: 0.1, color: "#fff", display: "flex" }} // Reduced opacity & white text
              >
                <Avatar
                  alt="Team Logo"
                  src={teamA.coach.photo}
                  sx={{
                    width: 28,
                    height: 28,
                    bgcolor: "#fff",
                    marginRight: "5px",
                  }}
                />{" "}
                {teamA.coach.name}
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

{/* TEAM B */}
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
                {columns(teamB).map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      color: "#fff",
                      backgroundColor: "#330034",
                      fontSize: "15px",
                    }} // White text for better visibility
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell
                sx={{ opacity: 1, color: "#1976D2" }} // Reduced opacity & white text
              >
                StartXI
              </TableCell>
              {teamB?.startXI.map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.player.id}
                >
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.name}
                  </TableCell>
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.number}
                  </TableCell>

                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.pos}
                  </TableCell>
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.number}
                  </TableCell>
                </TableRow>
              ))}

              <TableCell
                sx={{ opacity: 1, color: "#1976D2" }} // Reduced opacity & white text
              >
                Subtitutes
              </TableCell>
              {teamB.substitutes.map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.player.id}
                >
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.name}
                  </TableCell>
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.number}
                  </TableCell>

                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.pos}
                  </TableCell>
                  <TableCell
                    sx={{ opacity: 0.2, color: "#fff" }} // Reduced opacity & white text
                  >
                    {row.player.number}
                  </TableCell>
                </TableRow>
              ))}

              <TableCell
                sx={{ opacity: 1, color: "#1976D2" }} // Reduced opacity & white text
              >
                Coach
              </TableCell>

              <TableCell
                sx={{ opacity: 0.1, color: "#fff", display: "flex" }} // Reduced opacity & white text
              >
                <Avatar
                  alt="Team Logo"
                  src={teamA.coach.photo}
                  sx={{
                    width: 28,
                    height: 28,
                    bgcolor: "#fff",
                    marginRight: "5px",
                  }}
                />{" "}
                {teamB.coach.name}
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
