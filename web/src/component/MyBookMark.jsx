import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Box,
  Button,
  Modal,
  Fade,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { createTicket } from "../action/action";
import CustomSnackbar from '../component/Snackbar'; // Import the CustomSnackbar component

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#330034",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MyBookMark() {
  const oddsData = localStorage.getItem("book");
  const initialOddsArray = oddsData ? JSON.parse(oddsData) : [];
  const [open, setOpen] = useState(false);
  const [oddsArray, setOddsArray] = useState(initialOddsArray);
  const [isPaid, setIsPaid] = useState(""); // This state tracks the radio button value
  const [price, setPrice] = useState(""); // This tracks the price input field value
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar open state
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message

  // Open and close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle change for the radio button (to update isPaid state)
  const handleRadioChange = (event) => {
    setIsPaid(event.target.value); // Update the radio button value
  };

  // Function to handle removing a bookmark
  const handleRemoveBookmark = (fixtureId) => {
    const updatedOddsArray = oddsArray.filter(
      (odd) => odd.fixtureId !== fixtureId
    );
    localStorage.setItem("book", JSON.stringify(updatedOddsArray));
    setOddsArray(updatedOddsArray);
    
    // Show snackbar
    setSnackbarMessage("Bookmark removed successfully.");
    setSnackbarOpen(true);
  };

  const handleTicketBooking = async () => {
    try {
      setLoading(true);
      const oddsData = localStorage.getItem("book");
      const initialOddsArray = oddsData ? JSON.parse(oddsData) : [];

      const body = {
        paid: isPaid,
        amount: Number(price),
        bets: initialOddsArray,
      };

      const data = await createTicket(body);
      if (data.status < 202) {
        localStorage.removeItem("book");
      }
      console.log(data);
      alert(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Close the Snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="lg">
      {oddsArray.length === 0 ? (
        <Typography variant="h6" align="center" color="white">
          No bookmarks available.
        </Typography>
      ) : (
        <>
          <Button style={{ marginBottom: "20px" }} onClick={handleOpen}>
            Book Ticket
          </Button>
          <Grid container spacing={2}>
            {oddsArray.map((odd, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={odd.fixtureId}>
                <Card
                  style={{
                    height: "auto", // Allow height to adjust automatically
                    cursor: "pointer",
                    backgroundColor: "#330034",
                    padding: "8px", // Reduced padding for less height
                    borderRadius: "8px", // Rounded corners
                  }}
                  onClick={() => handleRemoveBookmark(odd.fixtureId)}
                >
                  <CardContent
                    style={{
                      padding: "8px", // Reduced padding
                      textAlign: "center",
                    }}
                  >
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                      spacing={1}
                    >
                      <Grid item>
                        <Box display="flex" alignItems="center">
                          <img
                            src={odd.firstTeamLogo}
                            alt={odd.firstTeam}
                            style={{ width: 30, height: 30, marginRight: 8 }} // Adjusted logo size
                          />
                          <Typography
                            variant="body2"
                            color="primary"
                            style={{
                              whiteSpace: "nowrap", // Prevent text from wrapping
                              overflow: "hidden", // Hide overflow text
                              textOverflow: "ellipsis", // Show ellipsis for overflow
                              maxWidth: "80px", // Set a max width to trigger ellipsis
                            }}
                          >
                            {odd.firstTeam}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="white"
                            padding={"0px 5px"} // Reduced padding
                          >
                            vs
                          </Typography>
                          <img
                            src={odd.secondTeamLogo}
                            alt={odd.secondTeam}
                            style={{ width: 30, height: 30, marginLeft: 8 }} // Adjusted logo size
                          />
                          <Typography
                            variant="body2"
                            color="primary"
                            style={{
                              whiteSpace: "nowrap", // Prevent text from wrapping
                              overflow: "hidden", // Hide overflow text
                              textOverflow: "ellipsis", // Show ellipsis for overflow
                              maxWidth: "80px", // Set a max width to trigger ellipsis
                            }}
                          >
                            {odd.secondTeam}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Typography variant="body2" color="#FFD700">
                      {odd.option}
                    </Typography>
                    <Typography variant="body2" color="#7F0376">
                      {new Date(odd.matchDate).toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* Reusable Snackbar for feedback */}
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={handleSnackbarClose}
      />

      {/* Modal for booking ticket */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{ color: "white" }}
              >
                Book Ticket
              </Typography>

              <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
              >
                <FormControl>
                  <FormLabel sx={{ color: "white" }}>Paid?</FormLabel>
                  <RadioGroup
                    defaultValue="no"
                    name="radio-buttons-group"
                    value={isPaid}
                    onChange={handleRadioChange} // Set the radio value
                    sx={{ color: "white" }}
                  >
                    <Radio
                      value="YES"
                      label="YES"
                      variant="outlined"
                      sx={{ color: "white" }}
                      checkedIcon={<span style={{ color: "white" }}>●</span>}
                      icon={<span style={{ color: "white" }}>○</span>}
                    />
                    <Radio
                      value="NO"
                      label="NO"
                      variant="soft"
                      sx={{ color: "white" }}
                      checkedIcon={<span style={{ color: "white" }}>●</span>}
                      icon={<span style={{ color: "white" }}>○</span>}
                    />

                    {/* Conditionally render the TextField only if "yes" is selected */}
                    {isPaid === "YES" && (
                      <TextField
                        id="filled-multiline-flexible"
                        label="Enter Amount In SOL"
                        multiline
                        maxRows={4}
                        variant="filled"
                        value={price} // Link the price input field to state
                        onChange={(e) => setPrice(e.target.value)} // Update price state
                        sx={{
                          "& .MuiInputBase-input": { color: "white" },
                          "& .MuiInputLabel-root": { color: "white" },
                          "& .MuiFilledInput-root": {
                            backgroundColor: "#170016",
                            "&:hover": {
                              backgroundColor: "#444",
                            },
                          },
                        }}
                      />
                    )}
                  </RadioGroup>
                </FormControl>

                <Button onClick={() => handleTicketBooking()}>
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </div>
    </Container>
  );
}
