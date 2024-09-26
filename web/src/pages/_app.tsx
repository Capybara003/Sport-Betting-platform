import '@/styles/globals.css';
import WalletContextProvider from '@/context/WalletContextProvider.jsx';
import TransitionContextProvider from '@/context/TransitionContextProvider.jsx';
import type { AppProps } from 'next/app';
import Footer from '@/component/Footer';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WalletContextProvider>
        <TransitionContextProvider>
          <Component {...pageProps} />
          <Footer />
        </TransitionContextProvider>
      </WalletContextProvider>
    </>
  );
}
