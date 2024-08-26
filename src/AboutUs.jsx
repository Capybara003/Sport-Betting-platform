import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div
        className="relative bg-la bg-blend-multiply w-full h-max bg-cover bg-center"
        style={{ backgroundImage: "url('images/')" }}
      >
        <div className="text-center pt-20 text-4xl text-linear font-extrabold">
          <h1>About Us</h1>
        </div>
        <div className="px-4 max-w-screen-xl text-center py-6 mx-auto lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Component */}
            {[
              {
                title: 'Decentralization',
                description:
                  'SolBet leverages the Solana blockchain to offer a decentralized betting platform, ensuring no central authority controls the operations.',
                image: 'images/a.png',
              },
              {
                title: 'Transparency',
                description:
                  'All bets and transactions are recorded on the blockchain, providing transparency and verifiability.',
                image: 'images/blur.png',
              },
              {
                title: 'Security',
                description:
                  'Betting operations are managed by smart contracts on the Solana blockchain, which automate processes and reduce the risk of fraud.',
                image: 'images/s.png',
              },
              {
                title: 'Data Protection',
                description:
                  'User data and transaction details are secured using blockchain technology, protecting against tampering and unauthorized access.',
                image: 'images/d.png',
              },
              {
                title: 'Low Fees',
                description:
                  'Solana’s low transaction fees minimize costs for placing bets and transferring funds.',
                image: 'images/e.png',
              },
              {
                title: 'High Speed',
                description:
                  'The platform benefits from Solana’s high-speed transactions, allowing for quick bet placements and payouts.',
                image: 'images/st.png',
              },
              {
                title: 'Wallet Integration',
                description:
                  'Users can connect their Solana-compatible wallets for seamless deposit, withdrawal, and betting experiences.',
                image: 'images/sa.png',
              },
              {
                title: 'Community',
                description:
                  'Targeted towards betting enthusiasts, crypto users, and Solana community members, fostering a vibrant user base.',
                image: 'images/c.png',
              },
              {
                title: 'Regulatory & Compliance',
                description:
                  'The platform adheres to relevant regulations and best practices for operating in the decentralized space.',
                image: 'images/u.png',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br shadow-inner  shadow-purple-700 opacity-75  from-la to-black rounded-lg p-6  transform transition duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <img
                    className="h-13 w-auto object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <h2 className="text-xl text-white font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
