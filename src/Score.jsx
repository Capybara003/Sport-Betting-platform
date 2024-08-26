import React from 'react';

const Leaderboard = () => {
  return (
    <>
    <div className="bg-la text-white p-8">
      <h1 className="text-center text-3xl font-bold mb-8">Leaderboard</h1>
      <h2 className="mx-auto text-black w-full  justify-center bg-gradient-to-br from-blue-600 to-pink-500  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-10 py-2.5 text-center mb-6">
  ALL TIME
</h2>


      <div>
        <div>
         
          <ul>
          <li className="flex flex-wrap justify-center items-center mb-10">
  <span className="text-blue-to-blue-600 text-black bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
    01
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        className="h-10 w-10 border-2 border-transparent rounded-full"
        src="images/User_02.png"
        alt="Message Icon"
      />
      <h1 className="text-sm md:text-base lg:text-lg">Johan Sundstein</h1>
    </div>
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
    Denmark
  </span>
</li>
<li className="flex flex-wrap text-black justify-center items-center mb-10">
  <span className="text-blue-to-blue-600 bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
    02
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        className="h-10 w-10 border-2 border-transparent rounded-full"
        src="images/User_02.png"
        alt="Message Icon"
      />
      <h1 className="text-sm md:text-base lg:text-lg">Jesse Vainikka</h1>
    </div>
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
  Finland
  </span>
</li>


    <li className="flex flex-wrap text-black justify-center items-center mb-10">
    <span className="text-blue-to-blue-600 bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
        03
    </span>
    <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
            className="h-10 w-10 border-2 border-transparent rounded-full"
            src="images/User_02.png"
            alt="Message Icon"
        />
        <h1 className="text-sm md:text-base lg:text-lg">Christopher Lehr</h1>
        </div>
    </span>
    <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
    Australia
    </span>
    </li>
    
    <li className="flex flex-wrap  text-black justify-center items-center mb-10">
    <span className="text-blue-to-blue-600 bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
        04
    </span>
    <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
            className="h-10 w-10 border-2 border-transparent rounded-full"
            src="images/User_02.png"
            alt="Message Icon"
        />
        <h1 className="text-sm md:text-base lg:text-lg">Sébastien Debs</h1>
        </div>
    </span>
    <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
    France
    </span>
    </li>


    <li className="flex flex-wrap justify-center items-center mb-10">
  <span className="text-blue-to-blue-600 text-black bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
    01
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        className="h-10 w-10 border-2 border-transparent rounded-full"
        src="images/User_02.png"
        alt="Message Icon"
      />
      <h1 className="text-sm md:text-base lg:text-lg">Peter Rasmussen</h1>
    </div>
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
    Denmark
  </span>
</li>
          
          </ul>
          
    <li className="flex flex-wrap justify-center mt-20   items-center mb-10">
    <span className="text-blue-to-blue-600 bg-gradient-to-br shadow-purple-400 shadow-xl from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
        Ranking
    </span>
    <span className="text-white bg-gradient-to-br shadow-purple-400 shadow-xl from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-1 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
        
        <h1 className="text-sm md:text-base text-blue-to-blue-600 text-center lg:text-lg">Names of Players</h1>
    
    </span>
    <span className="text-blue-to-blue-600 shadow-purple-400 shadow-xl bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
    Score
    </span>
    </li>
    <ul>
          <li className="flex flex-wrap justify-center items-center mb-10">
  <span className="text-blue-to-blue-600 bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
    01
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        className="h-10 w-10 border-2 border-transparent rounded-full"
        src="images/User_02.png"
        alt="Message Icon"
      />
      <h1 className="text-sm md:text-base lg:text-lg">John Smith</h1>
    </div>
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
    616
  </span>
</li>
<li className="flex flex-wrap justify-center items-center mb-10">
  <span className="text-blue-to-blue-600 bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
    02
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        className="h-10 w-10 border-2 border-transparent rounded-full"
        src="images/User_02.png"
        alt="Message Icon"
      />
      <h1 className="text-sm md:text-base lg:text-lg">Pedre Val</h1>
    </div>
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
  612
  </span>
</li>


    <li className="flex flex-wrap justify-center items-center mb-10">
    <span className="text-blue-to-blue-600 bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
        03
    </span>
    <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
            className="h-10 w-10 border-2 border-transparent rounded-full"
            src="images/User_02.png"
            alt="Message Icon"
        />
        <h1 className="text-sm md:text-base lg:text-lg">Victor  Feranado</h1>
        </div>
    </span>
    <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
        590
    </span>
    </li>
    
    <li className="flex flex-wrap justify-center items-center mb-10">
    <span className="text-blue-to-blue-600 bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
        04
    </span>
    <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
            className="h-10 w-10 border-2 border-transparent rounded-full"
            src="images/User_02.png"
            alt="Message Icon"
        />
        <h1 className="text-sm md:text-base lg:text-lg">Abdul Ibraihim</h1>
        </div>
    </span>
    <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
    570
    </span>
    </li>


    <li className="flex flex-wrap justify-center items-center mb-10">
  <span className="text-blue-to-blue-600 bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mb-2 lg:mb-0 ml-0 md:ml-8 lg:ml-32">
    05
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-start mb-2 lg:mb-0 flex-1 mx-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        className="h-10 w-10 border-2 border-transparent rounded-full"
        src="images/User_02.png"
        alt="Message Icon"
      />
      <h1 className="text-sm md:text-base lg:text-lg">Peter Rasmussen</h1>
    </div>
  </span>
  <span className="text-white bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 font-medium rounded-lg text-center mr-0 md:mr-8 lg:mr-48">
    500
  </span>
</li>
          
          </ul>
        </div>
      </div>
    </div>
 
    </>
  );
};

export default Leaderboard;
