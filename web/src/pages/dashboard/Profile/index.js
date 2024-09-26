import Layout from "../layout";
import Image from "next/image";
import Link from "next/link";
import MatchCard from "../../../component/MatchCard.jsx";
import NavbarSection from "../../../component/Navbar.jsx";
import ManU from "../../../../public/images/image 16.png";
import ManCity from "../../../../public/images/image 15.png";
import transactions from "../../../../transaction.json";

export default function Profile() {
  return (
    <Layout>
      <NavbarSection />
      <div className="block grid md:grid-cols-6 grid-cols-1 md:mt-20 gap-5">
        <div className="text-white col-span-4">
          <div className="flex justify-between items-center gap-5 py-5 px-5 md:px-10 bg-[#330034] rounded-xl">
            
            <div className="grow">
              <p className="text-sm md:text-md font-light">Balance</p>
              <p className="text-sm md:text-md font-medium">0.0034567 ETH</p>
            </div>
            <div className="text-center">
              <p className="text-sm md:text-md font-light">78 Games</p>
              <p className="text-sm md:text-md font-medium">
                Active Game Booked
              </p>
            </div>
          </div>
          <div className="flex gap-10 mt-5 items-center">
            <h1 className="text-md bg-[#330034] font-bold p-2.5 rounded-xl">
              Transaction History
            </h1>
            <h1 className="text-md">Set Preferences</h1>
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="table-auto bg-[#4E1E4B] border-separate border-spacing-3 text-sm w-full text-left rounded-md">
              <thead>
                <tr className="">
                  <th>Date and Time</th>
                  <th>Transaction</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Balance Before</th>
                  <th>Balance After</th>
                </tr>
              </thead>
              <tbody className="">
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.transaction}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.status}</td>
                    <td>{transaction.balanceBefore}</td>
                    <td>{transaction.balanceAfter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-white col-span-2">
          <h1 className="font-medium text-xl mt-5">Upcoming Football Game</h1>
          <MatchCard
            team1Name="Man United"
            team1Image={ManU}
            team2Name="Man City"
            team2Image={ManCity}
            matchDate="Oct 15"
            odds={{
              1: "6.50", // Man United win
              X: "4.00", // Draw
              2: "1.40", // Man City win
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
