import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'; // Adjust based on your image handling library
import Link from 'next/link';   // Adjust based on your routing library

const MatchCard = ({ 
  team1Name, 
  team1Image, 
  team2Name, 
  team2Image, 
  matchDate, 
  odds 
}) => {
  return (
    <div className="border border-white rounded-xl bg-[#330034] mt-5 md:mt-10">
      <div className="flex justify-between gap-10 px-5 py-3">
        <h1 className="text-sm md:text-md font-medium">
          UEFA Champions League
        </h1>
        <h1>{matchDate}</h1>
      </div>
      <div className="flex justify-between items-center gap-10 px-5 py-3 bg-[#170016]">
        <div className="flex items-center gap-2">
          <Image src={team1Image} alt={team1Name} width={30} height={30} />
          <h1>{team1Name}</h1>
        </div>
        <div>Vs</div>
        <div className="flex items-center gap-2">
          <Image src={team2Image} alt={team2Name} width={30} height={30} />
          <h1>{team2Name}</h1>
        </div>
      </div>
      <div className="flex justify-between gap-10 px-5 py-3">
        <h1 className="text-sm md:text-md font-medium">Match Winner</h1>
      </div>
      <div className="flex justify-center gap-10 px-5 py-3 mb-3 bg-[#170016]">
        {Object.entries(odds).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <Link href="#" className="bg-[#604360] rounded-lg text-center border border-white py-1 px-3">
                <p className="text-sm md:text-md font-light">{key}</p>
                <h1 className="text-sm md:text-md font-medium">{value}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchCard;
