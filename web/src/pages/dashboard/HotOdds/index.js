import { useState, useEffect } from "react";
import Layout from "../layout";
import { FcRating } from "react-icons/fc";
import * as web3 from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import NavbarSection from '../../../component/navbar';
import {fetchTicket} from "../../../action/action"
import Spinner from "../../../component/spinner";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {payTicket} from "../../../action/action"
import MyHotOdds from "../../../component/MyHotOdd";

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
  const [selectTicket, setSeletTicke] = useState(null)
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const wallet = useWallet();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTickets = async () => {
    try {
      setLoading(true)
      const realData = await fetchTicket()
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
      }
      const data = await payTicket(body)
      alert("Transaction successful ✅")
    } catch (error) {
      alert("An error occured ❌")
      setLoading(false);
    }
  }
  return (
    <Layout>
         <Box sx={{ bgcolor: '', width:"100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="#330034"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{backgroundColor:"#330034"}}
        >
          <Tab label="HotOdds" {...a11yProps(0)} />
          <Tab label="My HotOdds" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
      <div className="overflow-x-auto no-scrollbar mt-3 flex space-x-8 sm:grid sm:grid-cols-3 w-full">
        {!loading && tickets?.data.tickets.map((ticket) => (
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
                <h3 className="sm:font-base">
                  Rating: {ticket.rating} 
                </h3>
              </div>

              <div className="flex justify-between gap-4 px-3 py-4 bg-[#2f0a2f]">
                <div>
                  <h3 className="sm:font-base text-[#927c91]">Total Match</h3>
                  <h3 className="sm:font-base text-white">{ticket.totalMatch}</h3>
                </div>

                <div>
                  <h3 className="sm:font-base text-[#927c91]">Active Match</h3>
                  <h3 className="sm:font-base text-white">{ticket.activeMatch}</h3>
                </div>
              </div>

              <div className="flex justify-between gap-4 px-3 py-4 bg-[#5c0156]">
                <div className="bg-[#4a2547] border border-current text-center px-5 rounded-lg py-2">
                  <h3 className="sm:font-base text-[#927c91]">Paid</h3>
                  <h3 className="sm:font-base text-white">{ticket.paid}</h3>
                </div>

                <div className="bg-[#4a2547] border border-current text-center px-5 rounded-lg py-2">
                  <h3 className="sm:font-base text-[#927c91]">Price</h3>
                  <h3 className="sm:font-base text-white">{ticket.price} SOL</h3>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <MyHotOdds />
      </TabPanel>
    </Box>

      <Spinner loading={loading}/>
    </Layout>
  );
}
