import React from 'react';

const HeroSection = () => {
  // Function to display a toast (you can replace this with a toast library)
  const handleGetStartedClick = () => {
    alert('Kindly connect your wallet');
  };

  // Function to scroll to the next section
  const handleLearnMoreClick = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div
        className="relative brightness-110 bg-purple-700 bg-blend-multiply w-full h-max bg-cover bg-center hue-rotate-15"
        style={{ backgroundImage: "url('images/image 4.png')" }}
      >
        <div className="text-center pt-60 text-3xl text-white font-bold">
          <h1>HotOdds</h1>
        </div>
        <div className="text-center text-4xl text-white font-bold">
          <h1>
          Game insights platform that help prunters place<b className="text-purple-700"> winning </b> bets.</h1>
        </div>
        <div className="text-center px-10 md:px-56 pt-2 text-white font-bold">
          Join the revolution in betting and experience a platform where innovation meets reliability. Sign up for HotOdds today and place your bets in a secure, fast, and decentralized environment.
        </div>

        {/* Centering the buttons and image */}
        <section className="mt-6 pt-6 flex mb-6 justify-center items-center">
          <form className="flex justify-center items-center space-x-4">
            {/* Get Started Button with toast alert */}
            <button
              type="button"
              onClick={handleGetStartedClick} // Toast functionality
              className="text-white shadow-sm shadow-white bg-gradient-to-br from-purple-600 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Get Started
            </button>

            <img
              className="h-2 w-auto"
              src="images/Line 1.png"
              alt="Divider Icon"
            />

            {/* Learn More Button with scroll functionality */}
            <button
              type="button"
              onClick={handleLearnMoreClick} // Scroll functionality
              className="text-black bg-white hover:text-white hover:bg-la font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Learn More
            </button>
          </form>
        </section>

        {/* This is the section to scroll to */}
        <section
          id="next-section" // Add this id to target the scroll
          className="max-w-screen-xl pt-6 mx-auto px-1 py-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/image 1.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/image 3.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/image 6.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/image 5.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/fot.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
