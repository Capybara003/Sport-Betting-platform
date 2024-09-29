import Layout from '../layout';
import Link from 'next/link';
import Image from 'next/image';
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
            <a href='#' className='mx-6 font-extrabold'>
              Upcoming Football Matches
            </a>
            <a href='#' className='text-[#c6b3c5] mx-6'>
              Leader Board
            </a>
          </div>



          {/* Displaying upcoming games */}
          <div className=' overflow-x-auto no-scrollbar flex space-x-8 sm:grid sm:grid-cols-3 w-full'>
            {upcomingGames.map((game, id) => ( 
              <Link href={`/dashboard/Football/game/${game.id}`}>
              <section  
              className=" my-6 mx-4 border border-slate-400 cursor-pointer rounded-lg bg-[#2f0a2f]  sm:w-[280px] text-white sm:h-[291px]"
              >
                <div className='rounded-lg'>
                  
                  <div className='p-2  bg-[#5c0156] rounded-lg flex justify-between gap-4'>
                    <h3 className='sm:font-lg '>{game.league}</h3>
                    <h3 className='sm:font-base pt-[4px]'>{game.date}</h3>

                  </div>

                  <div className='px-3  py-4 bg-[#2f0a2f] flex justify-between'>
                    <div className='flex'>
                    <img
                    src={game.team1.image}
                    alt={game.team1.name}
                    className='w-4 rounded-full'
                  />
                     
                      <h3 className='sm:font-base'>{game.team1.name}</h3>
                    </div>

                    <h3 className='text-[#dc01cd]'>VS</h3>

                    <div className='flex'>
                      <img src={game.team2.image} alt={game.team2.name} className='w-4 rounded-full' />
                      <h3 className={game.team2.name}>Barcelona</h3>
                    </div>

                   

                  </div>

                  <div className='px-3 py-4 bg-[#5c0156]'>
                      <h3 className='sm:font-base'>Match Winner</h3>
                    </div>


                    <div className='flex  justify-between gap-4 px-3 py-4 bg-[#2f0a2f]'>

                      <div className='bg-[#4a2547] border border-current text-center px-5 rounded-lg py-2'>
                        <h3 className='sm:font-base text-[#927c91]'>1</h3>
                        <h3 className='sm:font-base text-white'>{game.odds.team1}</h3>
                      </div>

                      <div className='bg-[#4a2547] border border-current text-center px-5 rounded-lg py-2'>
                        <h3 className='sm:font-base text-[#927c91]'>X</h3>
                        <h3 className='sm:font-base text-white'>{game.odds.draw}</h3>
                      </div>

                      <div className='bg-[#4a2547] border border-current text-center  px-5 rounded-lg py-2'>
                        <h3 className='sm:font-base text-[#927c91]'>2</h3>
                        <h3 className='sm:font-base text-white'>{game.odds.team2}</h3>
                      </div>
                      

                    </div>

                </div>
              </section>
              </Link>
             
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
