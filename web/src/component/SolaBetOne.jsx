import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import HeroSection from './HeroSection';
import { useRouter } from 'next/router';
import AboutUs from './AboutUs';
import Features from './Features';
import LiveBetting from './LiveBetting';
import Score from './Score';
import NavbarSection from './Navbar';



const SolaBetOne = () => {
  const home = useRef(null);
  const about = useRef(null);
  const b = useRef(null);
  const service = useRef(null);
  const price = useRef(null);

  const wallet = useWallet();
  const { connection } = useConnection();
  const router = useRouter();


  const scrollToTopSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (wallet.connected) {
      // Redirect to dashboard when the wallet is connected
      router.push('/dashboard/Football');
    }
  }, [wallet.connected, router]);

  return (
    <>
     
      <NavbarSection />
      <div>
      {!wallet.connected && (
      <div>
      <div className="bg-[#020002]" ref={home}>
        <HeroSection />
      </div>
      <div ref={about}>
        <AboutUs />
      </div>
      <div ref={service}>
        <Features />
      </div>
      <LiveBetting />
      <Score />
      </div>
      )}
     
     

    
     </div>
   
      
    </>
  )
}

export default SolaBetOne
