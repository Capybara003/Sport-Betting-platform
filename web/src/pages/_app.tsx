import "@/styles/globals.css";
import WalletContextProvider from "@/context/WalletContextProvider.jsx";
import TransitionContextProvider from "@/context/TransitionContextProvider.jsx";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWallet } from "@solana/wallet-adapter-react";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WalletContextProvider>

        <ToastContainer />

        <TransitionContextProvider>
          <Component {...pageProps} />
        </TransitionContextProvider>
      </WalletContextProvider>
    </>
  );
}