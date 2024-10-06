import { useState, useEffect } from "react";
import { FcRating } from "react-icons/fc";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { fetchPaidTicket, fetchTicketMatch } from "../action/action";
import Spinner from "../component/spinner";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import { formatDate } from "../utils/date.formatter";
import { FaHeart } from "react-icons/fa"; // Import a heart icon for the like button
import CustomSnackbar from "../component/Snackbar"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800, // Increase the width of the modal
  bgcolor: "#330034",
  border: "2px solid #000",
  boxShadow: 24,
  color: "white",
  p: 4,
};

export default function MyHotOdds() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bet, setBets] = useState(null);
  const [selectTicket, setSeletTicke] = useState(null);
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTickets = async () => {
    try {
      setLoading(true);
      const realData = await fetchPaidTicket();
      setTickets(realData);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  const handleSelectTicket = async (ticket) => {
    const data = await fetchTicketMatch(ticket.id);
    console.log(data);
    setBets(data);
    handleOpen();
  };

  return (
    <Box sx={{ bgcolor: "", width: "100%" }}>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 w-full">
            {!loading && tickets?.data?.tickets.length > 0 && tickets?.data.tickets.map((ticket) => (
              <section
                key={ticket.id}
                className="border border-slate-400 cursor-pointer rounded-lg bg-[#2f0a2f] w-full h-[180px] text-white"
                onClick={() => handleSelectTicket(ticket)}
              >
                <div className="rounded-lg">
                  <div className="p-1 bg-[#5c0156] rounded-lg flex gap-2">
                    <div className="pt-[3px]">
                      <FcRating />
                    </div>
                    <h3 className="text-sm sm:font-base">
                      Rating: {ticket.rating}
                    </h3>
                  </div>

                  <div className="flex justify-between gap-2 px-2 py-2 bg-[#2f0a2f]">
                    <div>
                      <h3 className="text-xs sm:font-base text-[#927c91]">Total Match</h3>
                      <h3 className="text-sm sm:font-base text-white">{ticket.totalMatch}</h3>
                    </div>

                    <div>
                      <h3 className="text-xs sm:font-base text-[#927c91]">Active Match</h3>
                      <h3 className="text-sm sm:font-base text-white">{ticket.activeMatch}</h3>
                    </div>
                  </div>

                  <div className="flex justify-between gap-2 px-2 py-2 bg-[#5c0156]">
                    <div className="bg-[#4a2547] border border-current text-center px-3 rounded-lg py-1">
                      <h3 className="text-xs sm:font-base text-[#927c91]">Paid</h3>
                      <h3 className="text-sm sm:font-base text-white">{ticket.paid}</h3>
                    </div>

                    <div className="bg-[#4a2547] border border-current text-center px-3 rounded-lg py-1">
                      <h3 className="text-xs sm:font-base text-[#927c91]">Price</h3>
                      <h3 className="text-sm sm:font-base text-white">{ticket.price} SOL</h3>
                    </div>
                  </div>

                  {/* Like Button (No Functionality) */}
                  <div className="flex justify-end p-2">
                    <button
                      className="flex items-center text-white cursor-pointer"
                    >
                      <FaHeart className="mr-1" color="red" />
                      <span>{ticket.likes || 0}</span> {/* Placeholder for like count */}
                    </button>
                  </div>
                </div>
              </section>
            ))}

            <div>{!loading && tickets?.data?.tickets.length < 1 && <h1>No Current Ticket</h1>}</div>
          </div>

          <Modal
  keepMounted
  open={open}
  onClose={handleClose}
  aria-labelledby="keep-mounted-modal-title"
  aria-describedby="keep-mounted-modal-description"
>
  <Box
    sx={{
      width: "95%", // Increased width for a spacious look
      maxWidth: "800px", // Max width of the modal
      bgcolor: "#1A0033", // Background color
      borderRadius: "12px", // Rounded corners
      boxShadow: 24,
      padding: "20px",
      margin: "auto",
      mt: 8,
      overflowX: "hidden", // Ensure no overflow in the modal
    }}
  >
    <Typography
      id="keep-mounted-modal-title"
      variant="h6"
      component="h2"
      color="white"
      textAlign="center"
      fontWeight="bold"
      mb={2}
      sx={{
        fontSize: "20px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      Match Bets
    </Typography>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {bet &&
        bet?.bets.map((bet) => {
          const dates = formatDate(bet.matchDate);
          return (
            <div
              className="rounded-lg shadow-lg p-5 bg-[#2A002A] border border-[#660066]"
              key={bet.id}
            >
              <div className="flex justify-between items-center mb-3">
                {/* First Team */}
                <div className="flex items-center space-x-3 w-[35%]">
                  <Avatar
                    alt="First Team Logo"
                    src={bet.firstTeamLogo}
                    sx={{
                      width: 35,
                      height: 35,
                      bgcolor: "#fff",
                      border: "1px solid #ffffff33",
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="white"
                    fontWeight="bold"
                    sx={{
                      whiteSpace: "nowrap", // Prevent text from wrapping
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {bet.firstTeam}
                  </Typography>
                </div>

                {/* Bet Option (Displayed in the center) */}
                <Typography
                  variant="body2"
                  color="#FFD700"
                  fontWeight="600"
                  sx={{
                    whiteSpace: "nowrap", // Prevent wrapping
                    overflow: "hidden",
                    textOverflow: "ellipsis", // Show ellipsis if text overflows
                    textAlign: "center", // Center the option
                    flex: 1, // Ensure it takes the available space
                  }}
                >
                  {bet.option}
                </Typography>

                {/* Second Team */}
                <div className="flex items-center space-x-3 w-[35%]">
                  <Typography
                    variant="body2"
                    color="white"
                    fontWeight="bold"
                    sx={{
                      whiteSpace: "nowrap", // Prevent text wrapping
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {bet.secondTeam}
                  </Typography>
                  <Avatar
                    alt="Second Team Logo"
                    src={bet.secondTeamLogo}
                    sx={{
                      width: 35,
                      height: 35,
                      bgcolor: "#fff",
                      border: "1px solid #ffffff33",
                    }}
                  />
                </div>
              </div>

              {/* Match Date */}
              <Typography
                variant="caption"
                color="#ffffff88"
                display="block"
                textAlign="center"
                sx={{
                  whiteSpace: "nowrap", // Prevent date wrapping
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {dates}
              </Typography>
            </div>
          );
        })}
    </div>
  </Box>
</Modal>

      <Spinner loading={loading} />

{open && <CustomSnackbar />}
    </Box>
  );
}