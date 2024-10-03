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



export default function H2HTable({ h2h }) {

console.log("headtohead", h2h.response)
  const columns = [
  { id: "team", label: "Team", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "referree", label: "Referree", minWidth: 100 },
  { id: "venue", label: "Venue", minWidth: 100 },
  { id: "goals", label: "Goals", minWidth: 100 },
  { id: "league", label: "League", minWidth: 100 },
  { id: "score", label: "Score", minWidth: 100 },
  { id: "season", label: "Season", minWidth: 100 },
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
                {columns.map((column) => (
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
                <TableRow>
                        
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

    </Box>
  );
}
