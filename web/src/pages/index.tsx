import Image from 'next/image';
import { Inter } from 'next/font/google';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import SolaBetOne from '../component/SolaBetOne';
import Link from 'next/link'; // Import Link from Next.js

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <SolaBetOne />

      <div>
      </div>
    </main>
  );
}
