import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Features from './Features';
import LiveBetting from './LiveBetting';
import Score from './Score';

const SolaBetOne = () => {
  const home = useRef(null);
  const about = useRef(null);
  const b = useRef(null);
  const service = useRef(null);
  const price = useRef(null);

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

  return (
    <>
      <nav className="fixed w-full top-0 start-0 bg-no-repeat bg-blend-multiply bg-la z-10" style={{ backgroundImage: "url('images/image 4.png')" }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href='/home' className="flex items-center space-x-3 rtl:space-x-reverse"> 
            
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="mr-32 text-white bg-gradient-to-br from-purple-600 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <WalletMultiButton className="!important rounded-sm bg-gradient-to-r from-[#7f00a6] to-[#47004e]" />
            </button>
            <div className="relative inline-block text-left md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center ml-3 justify-center px-4 py-2 border border-transparent shadow-sm rounded-md bg-primary text-white bg-gradient-to-br from-purple-600 to-black hover:text-primary focus:outline-none focus:ring-2"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <li onClick={() => scrollToTopSection(home)} className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Home
                    </li>
                    <li onClick={() => scrollToTopSection(about)} className="block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
                      About 
                    </li>
                    <li onClick={() => scrollToTopSection(service)} className="block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
                      Features
                    </li>
                    <li onClick={() => scrollToTopSection(b)} className="block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
                      Benefits
                    </li>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="text-white items-center pl-56 justify-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="cursor-pointer flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li onClick={() => scrollToTopSection(home)}>
                Home
              </li>
              <li onClick={() => scrollToTopSection(about)}>
                About us
              </li>
              <li onClick={() => scrollToTopSection(service)}>
                Features
              </li>
              <li onClick={() => scrollToTopSection(b)}>
                Benefits
              </li>
            </ul>

          </div>
        </div>
      </nav>
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
      
    </>
  )
}

export default SolaBetOne