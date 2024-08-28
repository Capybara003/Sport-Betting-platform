import Image from "next/image";
import { Inter } from "next/font/google";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import SolaBetOne from "../component/SolaBetOne";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      {/* <h1 className="text-white">Home</h1> */}
      <SolaBetOne />


      <div>
        {/* <button className="!important bg-gradient-to-r from-[#7f00a6] to-[#47004e] rounded-md  sm:px-[3px] sm:py-[3px]">
          <WalletMultiButton className="!important rounded-sm bg-gradient-to-r from-[#7f00a6] to-[#47004e]" />
        </button> */}
      </div>
    </main>
  );
}
