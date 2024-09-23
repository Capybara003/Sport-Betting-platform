import Layout from './dashboard/layout'; // Assuming you have a shared Layout component
import React from 'react';

export default function Par() {
  return (
    <Layout>
      <div className='h-screen flex flex-row bg-back p-6'>
        {/* Main content with cards and table */}
        <div className='w-3/4 mt-0'>
          {/* Card 1 */}
          <div className='relative bg-cover bg-guy bg-center w-full max-w-2xl h-72 flex text-white rounded-md mt-4 overflow-hidden'>
            <div className='w-1/2 h-full p-4'>
              <div className='bg-guy w-full h-10 px-2 py-1 flex items-center gap-4'>
                <div className='flex items-center'>
                  <img
                    src='/images/bayern.png'
                    alt='Profile'
                    className='w-6 h-6 rounded-full'
                  />
                  <p className='text-fuchsia-600 text-md mx-2'>vs</p>
                  <img
                    src='/images/Manu.png'
                    alt='Profile'
                    className='w-6 h-6 rounded-full'
                  />
                </div>
                <div className='bg-fuchsia-900 flex items-center p-1 py-2 rounded-md mx-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='bg-fuchsia-900 pr-1 ml-1'
                  >
                    <path
                      d='M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z'
                      fill='white'
                    ></path>
                    <path
                      d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z'
                      fill='white'
                    ></path>
                  </svg>
                  <p className='pr-2'>Oct 18</p>
                </div>
              </div>
              <div className='bg-guy'>
                <div className='text-white text-xs mt-2'>
                  <p>UEFA Champions League</p>
                </div>
              </div>
              <div className='bg-guy'>
                <div className=' '>
                  <p className='text-white text-base mt-2'>
                    Bayern
                    <span className='text-white m-2 p-2 text-md font-bold'>
                      VS
                    </span>
                    Man United
                  </p>
                </div>
                <div className='bg-guy'>
                  <div className='text-white text-sm mt-2'>
                    <p className='pb-2'>
                      Place a bet on this match today and participate
                    </p>
                    <p className='mb-2'>in various raffles</p>
                  </div>
                </div>
              </div>
              <div className=''>
                <button className='mt-4 w-3/4  bg-fuchsia-800 hover:shadow-md text-white py-2 font-bold rounded-md'>
                  Add to Booking Ticket
                </button>
              </div>
            </div>
            <div className='w-1/2 h-full'>
              <img src='/images/kick.png' alt='Kick' />
            </div>
          </div>

          {/* Analysis Info */}
          <div className='flex items-center mt-3 text-white'>
            <a href='#' className='mx-6 font-bold text-sm'>
              Team Information
            </a>
            <a href='#' className='mx-6 text-xs'>
              Head-to-Head Analysis
            </a>
            <a href='#' className='mx-6 text-xs'>
              AI assistance
            </a>
          </div>

          {/* Table */}
          <div className='w-full max-w-2xl mt-6 bg-guy rounded-xl overflow-hidden'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='border-b-2 text-base'>
                  <th className='text-left pl-28 text-white'>Position</th>
                  <th className='text-left py-2 text-white'>Player</th>
                </tr>
              </thead>

              <tbody>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>GK</td>
                  <td className='p-2'>John Smith</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>RB</td>
                  <td className='p-2'>Micheal Johnson</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>CB</td>
                  <td className='p-2'>David Lee</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>CB</td>
                  <td className='p-2'>Steven Wright</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>LB</td>
                  <td className='p-2'>Alex Brown</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>RM</td>
                  <td className='p-2'>Chris Adams</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>CM</td>
                  <td className='p-2'>James Davis</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>LM</td>
                  <td className='p-2'>Peter Jones</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>RW</td>
                  <td className='p-2'>Alan Green</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>ST</td>
                  <td className='p-2'>Robert King</td>
                </tr>
                <tr className='text-slate-100 text-sm'>
                  <td className='pl-32'>LM</td>
                  <td className='p-2'>Thomas Moore</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />
          <br />
        </div>

        {/* New card for Upcoming Game */}
        <div className='block h-52'>
          <div className='w-72 bg-guy rounded-md ml-6 h-40 mt-5 border-stone-500'>
            <div className='border-1 p-2 flex pt-3'>
              <h2 className='text-white text-base pr-2'>Live Update</h2>
              <div className='pt-2'>
                <img src='/images/vetor.png' alt='' className='size-3' />
              </div>
            </div>
            <div className='bg-guy w-full h-16 px-2 py-1 flex overflow-hidden'>
              <img
                src='/images/bayern.png'
                alt='Profile'
                className='w-16 h-16 rounded-full'
              />
              <div className='px-10'>
                <p className='bg-red-600 text-white m-2 px-2'>Live</p>
                <p className='text-white text-md mx-2 ml-4'>3:1</p>
              </div>

              <img
                src='/images/Manu.png'
                alt='Profile'
                className='w-16 h-16 rounded-full'
              />
            </div>
            <div className='mx-6 flex text-white text-sm'>
              <p className='pr-40'>Bayern</p>
              <p>Man United</p>
            </div>

            <div className='p-2 rounded-md overflow-hidden bg-guy grid grid-cols-3 gap-2'>
              <button className='border w-20 h-16 mt-2 shadow-md mr-8 bg-opacity-60 text-white py-2 rounded-md bg-fm border-white'>
                <p>1</p>
                <p>2.20</p>
              </button>
              <button className='border mt-2 shadow-md mr-2 w-20 h-16 bg-opacity-60 text-white py-2 rounded-md bg-fm border-white'>
                <p>X</p>
                <p>3.00</p>
              </button>
              <button className='border mt-2 shadow-md mr-4 w-20 h-16 bg-opacity-60 text-white rounded-md bg-fm border-white'>
                <p>2</p>
                <p>4.20</p>
              </button>
            </div>
          </div>
          <br />
          <br />
          <div className='w-72 bg-guy p-0 pb-5 rounded-md ml-6 h-52 mt-6 border-stone-500'>
            <div className='border-1 p-2 flex pt-2'>
              <h2 className='text-white text-base pr-2'>Betting Slip</h2>
              <div className='pt-2'>
                <img src='/images/vetor.png' alt='' className='size-3' />
              </div>
            </div>
            <div className='bg-back w-full h-10 px-2 py-1 flex items-center'>
              <img
                src='/images/bayern.png'
                alt='Profile'
                className='w-6 h-6 rounded-full mt-1'
              />
              <p className='text-white text-sm ml-2'>Bayern</p>
              <p className='text-fuchsia-600 text-md mx-4'>vs</p>
              <img
                src='/images/Manu.png'
                alt='Profile'
                className='w-6 h-6 rounded-full mt-1'
              />
              <p className='text-white text-sm ml-2'>Man United</p>
            </div>

            <div className='p-2'>
              <button className='mt-2 w-full bg-back bg-opacity-100 text-white py-2 rounded-md text-sm'>
                Amount
              </button>
              <button className='mt-4 w-full  bg-fuchsia-600 text-white py-2 font-bold rounded-md'>
                Add to Book
              </button>
            </div>
          </div>
          <div className='text-white ml-8 mt-4'>
            <p className='text-lg font-bold pb-1'>Team Bayern:</p>
            <p className='text-sm pb-1'>Formation: 4-3-3</p>
            <p className='text-sm'>Captain: James Davis</p>
          </div>
          <div className='text-white ml-8 mt-4'>
            <p className='text-lg font-bold pb-1'>Team Man United:</p>
            <p className='text-sm pb-1'>Formation: 4-4-2</p>
            <p className='text-sm'>Captain: Andrew Evans</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
