import { useState, useEffect } from "react";
import Layout from "../layout";
import { FcRating } from "react-icons/fc";
import * as web3 from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import NavbarSection from '../../../component/navbar';


const fetchTickets = async () => {
  const response = await import("../../../ticket.json"); 
  return response.data.tickets; 
}
export default function HotOdds() {
  const [tickets, setTickets] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [selectTicket, setSeletTicke] = useState(null)
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  // const wallet = useWallet();
  useEffect(() => {
    const getTickets = async () => {
      try {
        const ticketData = await fetchTickets(); 
        setTickets(ticketData);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setLoading(false); 
      }
    };

    getTickets(); 
  }, []);

  if (loading) {
    return <p>Loading tickets...</p>; 
  }

  const handleSelectTicket = async (ticket) => {
    console.log(ticket)
    try {
      setLoading(true);
      const transaction = new web3.Transaction();
  
        const recipient = new web3.PublicKey(ticket.address);
        const sendSolInstruction = web3.SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: recipient,
        lamports: web3.LAMPORTS_PER_SOL * Number(ticket.price),
      });
       transaction.add(sendSolInstruction);
      const confirmTransaction = await sendTransaction(transaction, connection);
      console.log("successful")
      alert("Transaction successful ✅")
      setLoading(false);
    } catch (error) {
      alert("An error occured ❌")
      console.log(error);
      setLoading(false);
    }
  }
  console.log(tickets)
  return (
    <Layout>
            {/* <NavbarSection /> */}

      <div className="overflow-x-auto no-scrollbar mt-20 flex space-x-8 sm:grid sm:grid-cols-3 w-full">
        {tickets.map((ticket) => (
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
                  <h3 className="sm:font-base text-white">{ticket.price}</h3>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}
