import React from 'react';

const LiveBetting = () => {
  return (
    <>
      <div
        className="relative bg-blend-multiply w-full h-max bg-cover bg-la bg-center"
        style={{ backgroundImage: "url('images/')" }}
      >
        <div className="rounded-md">
          {/* Main Content Section */}
          <div className="max-w-screen-xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex justify-center md:justify-end md:mb-0">
              <img
                src="images/image 17.png"
                alt="Live Betting"
                className="w-full h-full object-cover transition-transform bg-blend-multiply pr-36 duration-300 hover:scale-110"
              />
            </div>

            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h1 className="text-white text-3xl font-bold">Live Betting</h1>
              <p className="text-gray-200 mt-4">
                Join HotOdds for live betting excitement on your favorite sports. Whether it’s a last-minute football match, a crucial basketball game, or a thrilling volleyball showdown, our platform lets you place bets as the action unfolds. Stay ahead with real-time odds and dynamic betting options. Experience the rush of live betting with HotOdds, where every moment counts!
              </p>
            </div>
          </div>

          <div className="px-2 max-w-screen-xl text-center py-2 mt-0 mx-auto lg:py-16">
            <div
              className="w-auto font-sans max-w-80 p-10 m-10 rounded-lg inline-block border-2 border-transparent shadow-2xl text-center transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
              style={{
                backgroundImage: "url('images/Group 5.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
                width: '400px',
              }}
            ></div>

            <div
              className="w-auto font-sans max-w-80 p-10 m-10 rounded-lg inline-block border-2 border-transparent shadow-2xl text-center transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
              style={{
                backgroundImage: "url('images/Group 7.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
                width: '400px',
              }}
            ></div>

            <div
              className="w-auto font-sans max-w-80 p-10 m-10 rounded-lg inline-block border-2 border-transparent shadow-2xl text-center transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
              style={{
                backgroundImage: "url('images/Group 8.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
                width: '400px',
              }}
            ></div>
          </div>
        </div>

        {/* Final Section - Removed Bottom Spacing */}
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:mr-8 flex flex-col justify-center items-center text-center md:items-start md:text-left">
            <h1 className="text-white font-bold text-4xl mt-4 ml-10 mb-2">
              Real-Time Bet Tracker: Witness Every Bet as It Happens
            </h1>
            <p className="text-white mt-2 ml-10 mb-4">
              Stay updated with every bet placed across the blockchain join here to dive into the action!
            </p>
            <button
              type="button"
              className="text-white ml-10 w-5/6 shadow-2xl shadow-white bg-gradient-to-br from-purple-600 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 border-2 text-sm text-center mr-3"
            >
              Join Now
            </button>
          </div>

          <div className="md:w-1/2 md:ml-8 flex justify-center">
            <div className="w-auto h-auto rounded-full overflow-hidden">
              <img
                src="images/Group 22.png"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveBetting;
