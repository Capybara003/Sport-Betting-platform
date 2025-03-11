import '@/styles/globals.css';
import WalletContextProvider from '@/context/WalletContextProvider.jsx';
import TransitionContextProvider from '@/context/TransitionContextProvider.jsx';
import type { AppProps } from 'next/app';
import Footer from '@/component/Footer';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WalletContextProvider>
        <TransitionContextProvider>
        <SnackbarProvider />
        <Component {...pageProps} />
          <Footer />
        </TransitionContextProvider>
      </WalletContextProvider>
    </>
  );
}
