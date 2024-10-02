import React from 'react';

const Features = () => {
  return (
    <>
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('images/image 9.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="bg-la bg-opacity-50">
          {/* Section Title */}
          <div className="text-center pt-20 text-4xl text-white font-extrabold">
            <h1>Features</h1>
          </div>
          
          {/* Subtitle */}
          <div className="flex flex-wrap items-center space-x-2 md:space-x-4 lg:space-x-6">
  <h3 className="text-start font-extrabold text-3xl text-white mt-5 ml-8 md:ml-20 lg:ml-44">
    Live Betting
  </h3>
  <img
    className="h-auto w-auto pt-4 md:pt-5 lg:pt-6"
    src="images/Vector.png"
    alt="Team Logo"
  />
  <h3 className="text-white pt-5 md:pt-6 lg:pt-7">Football</h3>
</div>

                
          
         {/* Description */}
<div className="text-start mt-2 mb-8 text-white mx-4 md:mx-8 lg:mx-16 xl:mx-32">
  <h1 className="text-xl md:text-2xl  plg:text-3xl font-bold">
    Place Your Bets Live: Real-Time Betting with HotOdds
  </h1>
</div>

          {/* Feature Cards Container */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 p-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-la to-black rounded-lg shadow-lg shadow-purple overflow-hidden w-full max-w-md">
              <div className="p-6">
                <h2 className="text-xl text-white font-bold mb-4">Japan J.League</h2>
                <div className="flex items-center space-x-2">
                  <h3 className="text-white">Hokkaido Consadole Sapporo</h3>
                  <img className="h-10 w-10" src="images/image 12.png" alt="Team Logo" />
                  <h3 className="text-white">Vs</h3>
                  <img className="h-10 w-10" src="images/image 11.png" alt="Team Logo" />
                  <h3 className="text-white">Avispa Fukuoka</h3>
                </div>
                
                {/* Betting Buttons */}
                <div className="mt-6">
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-blue-500 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
                    >
                      1 7.5
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-blue-500 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
                    >
                      x 1.16
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-blue-500 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
                    >
                      2 8.25
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-la to-black rounded-lg shadow-lg overflow-hidden w-full max-w-md">
              <div className="p-6">
                <h2 className="text-xl text-white font-bold mb-4">England Community Shield</h2>
                <div className="flex items-center space-x-2">
                  <h3 className="text-white">Man City</h3>
                  <img className="h-10 w-10" src="images/image 15.png" alt="Team Logo" />
                  <h3 className="text-white">Vs</h3>
                  <img className="h-10 w-10" src="images/image 16.png" alt="Team Logo" />
                  <h3 className="text-white">Man Utd</h3>
                </div>
                
                {/* Betting Buttons */}
                <div className="mt-6">
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-blue-500 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
                    >
                      1 1.83
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-blue-500 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
                    >
                      x 4.22
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-blue-500 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
                    >
                      2 4.23
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
