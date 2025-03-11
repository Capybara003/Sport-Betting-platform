import { useState, useEffect } from "react";
import Layout from "../layout";
import { FcRating } from "react-icons/fc";
import { FaHeart } from "react-icons/fa"; // Import a heart icon for the like button
import * as web3 from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import NavbarSection from '../../../component/navbar';
import { fetchTicket } from "../../../action/action";
import Spinner from "../../../component/spinner";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { payTicket } from "../../../action/action";
import MyHotOdds from "../../../component/MyHotOdd";
import CustomSnackbar from '../../../component/Snackbar'; // Import the CustomSnackbar component

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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function HotOdds() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectTicket, setSelectTicket] = useState(null);
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar open state
  const [snackbarMessage, setSnackbarMessage] = useState(""); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTickets = async () => {
    try {
      setLoading(true);
      const realData = await fetchTicket();
      console.log(realData);
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
    try {
      const transaction = new web3.Transaction();
      const recipient = new web3.PublicKey(ticket.address);
      console.log(ticket.address);
      const sendSolInstruction = web3.SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: recipient,
        lamports: web3.LAMPORTS_PER_SOL * Number(ticket.price),
      });
      transaction.add(sendSolInstruction);
      const confirmTransaction = await sendTransaction(transaction, connection);
      const body = {
        ticketId: ticket.id,
        amount: ticket.price,
        hash: confirmTransaction
      };
      const data = await payTicket(body);
      setSnackbarMessage("Payment successfully.");
      setSnackbarOpen(true);
    } catch (error) {
      alert("An error occurred ❌");
      setLoading(false);
    }
  }

  // Close the Snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Layout>
      <Box sx={{ bgcolor: '', width: "100%", position: 'relative' }}> {/* Added position relative */}
        {/* Watermark */}
        <div className="watermark">HOTODDS 🔥</div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="#330034"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{ backgroundColor: "#330034" }}
          >
            <Tab label="HotOdds" {...a11yProps(0)} />
            <Tab label="My HotOdds" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
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
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MyHotOdds />
        </TabPanel>
      </Box>

      <Spinner loading={loading} />

      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={handleSnackbarClose}
      />
    </Layout>
  );
}
