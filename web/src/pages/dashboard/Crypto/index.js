import Layout from "../layout";
import NavbarSection from "../../../component/navbar.jsx";
import transactions from "../../../../transaction.json";
import Link from "next/link";
import Image from "next/image";
import ManU from "../../../../public/images/image 16.png";
import ManCity from "../../../../public/images/image 15.png";

export default function Reward() {
  return (
    <Layout>
      <NavbarSection />
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5">
        <div className="col-span-4 md:mt-5 text-white overflow-x-auto">
          <div className="bg-[#330034] rounded-xl pb-5">
            <h1 className="ms-5 pt-3 my-5 text-lg">Live Update</h1>
            <div className="grid grid-cols-3 gap-5 justify-items-stretch">
              <div className="justify-self-center">
                <Image src={ManU} className="mx-auto" alt="ManU" />
                <h1 className="text-sm pt-2 rounded-lg text-center">
                  Manchester United
                </h1>
                <div className="flex justify-center mt-3">
                  <Link
                    href="#"
                    className="bg-[#604360] rounded-lg text-center border border-white py-1 px-3"
                  >
                    <p className="text-sm md:text-md font-light">1</p>
                    <h1 className="text-sm md:text-md font-medium">6.50</h1>
                  </Link>
                </div>
              </div>
              <div className="justify-self-center">
                <h1 className="bg-[#FF2020] text-sm p-2 rounded-lg text-center ">
                  Live
                </h1>
                <h1 className="text-sm pt-2 rounded-lg text-center">1 : 3</h1>
                <div className="flex justify-center mt-3">
                  <Link
                    href="#"
                    className="bg-[#604360] rounded-lg text-center border border-white py-1 px-3"
                  >
                    <p className="text-sm md:text-md font-light">X</p>
                    <h1 className="text-sm md:text-md font-medium">4.30</h1>
                  </Link>
                </div>
              </div>
              <div className="justify-self-center">
                <Image src={ManCity} className="mx-auto" alt="ManU" />
                <h1 className="text-sm pt-2 rounded-lg text-center">
                  Manchester City
                </h1>
                <div className="flex justify-center mt-3">
                  <Link
                    href="#"
                    className="bg-[#604360] rounded-lg text-center border border-white py-1 px-3"
                  >
                    <p className="text-sm md:text-md font-light">2</p>
                    <h1 className="text-sm md:text-md font-medium">1.40</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 md:mt-10 bg-[#330034] rounded-xl text-white overflow-x-auto">
          <div className="">
            <h1 className="text-xl font-bold p-3">Upcoming Matches</h1>
          </div>
          <div className="flex justify-between items-center gap-10 px-5 py-3 bg-[#170016]">
            <div className="flex items-center gap-2">
              <Image src={ManU} alt={ManU} width={30} height={30} />
              <h1>Man United</h1>
            </div>
            <div>Vs</div>
            <div className="flex items-center gap-2">
              <Image src={ManCity} alt={ManCity} width={30} height={30} />
              <h1>Man City</h1>
            </div>
          </div>
          <div className="grid justify-center">
            <button className="bg-[#604360] rounded-lg my-3 py-3 px-24 w-full">
              View Details
            </button>
            <button className="bg-[#170016] rounded-lg mb-3 py-3 px-24 w-full">
              Add to book
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-6 grid-cols-1 gap-5">
        <div className="col-span-4  text-white overflow-x-auto">
          <h1 className="my-3">Your betting history</h1>
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

        <div className="col-span-2 mt-5 text-white overflow-x-auto">
          <h1 className="my-3">Crypto Price Betting</h1>
          <table className="table-auto bg-[#4E1E4B] border-separate border-spacing-3 text-sm w-full text-left rounded-md">
            <thead>
              <tr className="">
                <th>Name</th>
                <th>Last Name</th>
                <th>24h Changes</th>
              </tr>
            </thead>
            <tbody className="">
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.transaction}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
