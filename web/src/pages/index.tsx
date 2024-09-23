import Image from 'next/image';
import { Inter } from 'next/font/google';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import SolaBetOne from '../component/SolaBetOne';
import Link from 'next/link'; // Import Link from Next.js

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      {/* <h1 className="text-white">Home</h1> */}
      <SolaBetOne />

      <div>
        {/* <button className="!important bg-gradient-to-r from-[#7f00a6] to-[#47004e] rounded-md  sm:px-[3px] sm:py-[3px]">
          <WalletMultiButton className="!important rounded-sm bg-gradient-to-r from-[#7f00a6] to-[#47004e]" />
        </button> */}

        {/* Link to Upcoming Match page */}
        <div className='mt-8'>
          <Link href='/upcoming-match' legacyBehavior>
            <a className='bg-gradient-to-r from-[#7f00a6] to-[#47004e] text-white py-2 px-4 rounded-lg'>
              View Upcoming Match
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
