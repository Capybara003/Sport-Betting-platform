import Image from "next/image";
import { Inter } from "next/font/google";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-white">Home</h1>

      <div>
        <button className="!important bg-gradient-to-r from-[#7f00a6] to-[#47004e] rounded-md  sm:px-[3px] sm:py-[3px]">
          <WalletMultiButton className="!important rounded-sm bg-gradient-to-r from-[#7f00a6] to-[#47004e]" />
        </button>
      </div>
    </main>
  );
}
