import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SolaBetOne from './SolaBetOne';
import './index.css';

// Import necessary Solana wallet adapter components
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Import the styles
import '@solana/wallet-adapter-react-ui/styles.css';

// You can change this to 'mainnet-beta' or 'devnet' as needed
const network = WalletAdapterNetwork.Devnet;

// You can provide a custom RPC endpoint here
const endpoint = clusterApiUrl(network);

// Only import wallets that your app will support
const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <SolaBetOne />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <RouterProvider router={router} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </React.StrictMode>
);