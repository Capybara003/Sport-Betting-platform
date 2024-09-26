import Layout from '../layout';
import Link from 'next/link';
// import Navbar from '../../../../components/Navbar';

export default function Football() {
  // Array of upcoming games
  const upcomingGames = [
    {
      id: 1,
      league: 'UEFA Champions League',
      date: 'Oct 15',
      team1: { name: 'Paris', image: '/images/paris.png' },
      team2: { name: 'Barcelona', image: '/images/barca.png' },
      odds: { team1: '1.20', draw: '6.00', team2: '7.30' },
      url: '/par',
    },
    {
      id: 2,
      league: 'UEFA Champions League',
      date: 'Oct 18',
      team1: { name: 'Manchester City', image: '/images/Mancity.png' },
      team2: { name: 'Chelsea', image: '/images/chelsea.png' },
      odds: { team1: '2.20', draw: '3.00', team2: '4.20' },
      url: '/manc',
    },
    {
      id: 3,
      league: 'UEFA Champions League',
      date: 'Oct 18',
      team1: { name: 'Bayern', image: '/images/bayern.png' },
      team2: { name: 'Manchester United', image: '/images/Manu.png' },
      odds: { team1: '2.20', draw: '3.00', team2: '4.20' },
      url: '/bay',
    },
    {
      id: 4,
      league: 'UEFA Champions League',
      date: 'Oct 18',
      team1: { name: 'Bayern', image: '/images/bayern.png' },
      team2: { name: 'Manchester United', image: '/images/Manu.png' },
      odds: { team1: '1.20', draw: '6.00', team2: '7.30' },
      url: '/par',
    },
    {
      id: 5,
      league: 'UEFA Champions League',
      date: 'Oct 15',
      team1: { name: 'Paris', image: '/images/chelsea.png' },
      team2: { name: 'Barcelona', image: '/images/barca.png' },
      odds: { team1: '1.20', draw: '6.00', team2: '7.30' },
      url: '/manc',
    },
    {
      id: 6,
      league: 'UEFA Champions League',
      date: 'Oct 18',
      team1: { name: 'Manchester City', image: '/images/Mancity.png' },
      team2: { name: 'Chelsea', image: '/images/chelsea.png' },
      odds: { team1: '1.20', draw: '6.00', team2: '7.30' },
      url: '/bay',
    },
  ];

  return (
    <Layout>
      <div className='flex flex-row bg-back p-6 overflow-hidden'>
        <div className='w-full mt-0'>
          {/* Main header card */}
          <div
            className='relative bg-cover bg-center w-full md:w-full h-44 md:h-80 p-6 text-white rounded-sm mt-1 grid place-items-center'
            style={{ backgroundImage: `url('/images/ime.png')` }}
          >
            <div className='absolute inset-0 bg-guy bg-opacity-60'>
              <div className='relative flex flex-col justify-start ml-10 md:ml-20 h-16 w-96 mb-24 mt-16 md:mt-32'>
                <h2 className='text-base md:text-2xl font-bold'>
                  The Future of Decentralized
                </h2>
                <h3 className='text-base md:text-2xl font-bold'>
                  <span className='text-fuchsia-600'>Betting</span> on Solana
                </h3>
              </div>
            </div>
          </div>

          {/* Upcoming games header */}
          <div className='flex items-center ml-2 mt-1 text-white text-sm md:text-lg'>
            <a href='#' className='mx-6 font-bold'>
              Upcoming Football Matches
            </a>
            <a href='#' className='mx-6'>
              Leader Board
            </a>
          </div>

          {/* Displaying upcoming games */}
          <div className='my-4 overflow-x-auto no-scrollbar flex space-x-4 lg:grid lg:grid-cols-3 w-full'>
            {upcomingGames.map((game) => (
              <a
                key={game.id}
                href={game.url}
                className='block w-72 md:w-80 p-0 pb-5 h-52 md:h-48 mt-2 mb-8 border-stone-500 flex-shrink-0 '
              >
                <div className='p-2 bg-add rounded-md flex justify-between'>
                  <p className='text-white text-xs font-bold'>{game.league}</p>
                  <p className='text-white text-xs font-bold'>{game.date}</p>
                </div>
                <div className='bg-guy w-full h-10 px-2 py-1 flex items-center'>
                  <img
                    src={game.team1.image}
                    alt={game.team1.name}
                    className='w-4 h-4 rounded-full'
                  />
                  <p className='text-white text-xs ml-2'>{game.team1.name}</p>
                  <p className='text-fuchsia-600 text-md mx-2'>vs</p>
                  <img
                    src={game.team2.image}
                    alt={game.team2.name}
                    className='w-4 h-4 rounded-full'
                  />
                  <p className='text-xs text-white ml-2'>{game.team2.name}</p>
                </div>
                <div className='bg-add w-full h-10 px-2 py-1 text-white'>
                  <h3>Match Winner</h3>
                </div>
                <div className='p-2 pb-6 rounded-md overflow-hidden bg-guy grid grid-cols-3 gap-2'>
                  <button className='mt-2 shadow-md w-full bg-opacity-60 text-white py-2 rounded-md bg-fm'>
                    <p>1</p>
                    <p>{game.odds.team1}</p>
                  </button>
                  <button className='mt-2 shadow-md w-full bg-opacity-60 text-white py-2 rounded-md bg-fm'>
                    <p>X</p>
                    <p>{game.odds.draw}</p>
                  </button>
                  <button className='mt-2 shadow-md w-full bg-opacity-60 text-white py-2 rounded-md bg-fm'>
                    <p>2</p>
                    <p>{game.odds.team2}</p>
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
