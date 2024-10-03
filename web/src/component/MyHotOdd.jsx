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
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { color } from "framer-motion";
import { formatDate } from "../utils/date.formatter";

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
  width: 400,
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
    setBets(data);
    handleOpen();
  };
  return (
    <Box sx={{ bgcolor: "", width: "100%" }}>
      <div className="overflow-x-auto no-scrollbar mt-3 flex space-x-8 sm:grid sm:grid-cols-3 w-full">
        {!loading &&
          tickets?.data.tickets.map((ticket) => (
            <section
              key={ticket.id}
              className="my-6 mx-4 border border-slate-400 cursor-pointer rounded-lg bg-[#2f0a2f] w-[250px] h-[221px] sm:w-[280px] text-white sm:h-[221px]"
              onClick={() => handleSelectTicket(ticket)}
            >
              <div className="rounded-lg">
                <div className="p-2 bg-[#5c0156] rounded-lg flex gap-3">
                  <div className="pt-[5px]">
                    <FcRating />
                  </div>
                  <h3 className="sm:font-base">Rating: {ticket.rating}</h3>
                </div>

                <div className="flex justify-between gap-4 px-3 py-4 bg-[#2f0a2f]">
                  <div>
                    <h3 className="sm:font-base text-[#927c91]">Total Match</h3>
                    <h3 className="sm:font-base text-white">
                      {ticket.totalMatch}
                    </h3>
                  </div>

                  <div>
                    <h3 className="sm:font-base text-[#927c91]">
                      Active Match
                    </h3>
                    <h3 className="sm:font-base text-white">
                      {ticket.activeMatch}
                    </h3>
                  </div>
                </div>

                <div className="flex justify-between gap-4 px-3 py-4 bg-[#5c0156]">
                  <div className="bg-[#4a2547] border border-current text-center px-5 rounded-lg py-2">
                    <h3 className="sm:font-base text-[#927c91]">Paid</h3>
                    <h3 className="sm:font-base text-white">{ticket.paid}</h3>
                  </div>

                  <div className="bg-[#4a2547] border border-current text-center px-5 rounded-lg py-2">
                    <h3 className="sm:font-base text-[#927c91]">Price</h3>
                    <h3 className="sm:font-base text-white">
                      {ticket.price} SOL
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          ))}
      </div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
         {bet && bet.bets.map((bet) => {
           const dates = formatDate(bet.matchDate)
            return <div className="bg-[#1D001B] py-5 px-3" key={bet.id}>
             <div className="flex justify-between">
               <div className="flex">
                 <Avatar
                   alt="League Logo"
                   src={bet.firstTeamLogo}
                   sx={{ width: 28, height: 28, bgcolor: "#fff" }}
                 />
                 <Typography variant="body1" marginLeft="10px" color="white">
                   {bet.firstTeam}
                 </Typography>
               </div>
 
               <Typography
                 variant="body1"
                 marginLeft="10px"
                 color="white"
                 style={{ opacity: 0.2 }}
               >
                 {bet.option}
               </Typography>
               <b></b>
               <div className="flex">
                 <Avatar
                   alt="League Logo"
                   src={bet.secondTeamLogo}
                   sx={{ width: 28, height: 28, bgcolor: "#fff" }}
                 />
                 <Typography variant="body1" marginLeft="10px" color="white">
                   {bet.secondTeam}
                 </Typography>
               </div>
             </div>
 
             <b
               className="flex justify-center align-center"
               style={{ opacity: 0.2 }}
             >
               {dates}
             </b>
           </div>
         })}
        </Box>
      </Modal>

      <Spinner loading={loading} />
    </Box>
  );
}
